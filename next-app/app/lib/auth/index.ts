import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { User } from '../types/interfaces'
import client from '../graphql/apollo-client'
import { USER_BY_NAME } from './queries'
import bcryptjs from 'bcryptjs'

const key = new TextEncoder().encode(process.env.AUTH_SECRET)

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('10m')
    .sign(key)
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ['HS256'],
  })
  return payload
}

export async function login(credentials: { name: string; password: string }) {
  const {
    data: { user },
  }: { data: { user: User } } = await client.query({
    query: USER_BY_NAME,
    variables: {
      username: credentials.name,
    },
  })

  if (!user) throw new Error('error validating user')

  //TODO:Validate password
  const isPasswordValid = await bcryptjs.compare(
    credentials.password,
    user.password,
  )

  if (!isPasswordValid) throw new Error('error validating user')

  // Create the session
  const expires = new Date(Date.now() + 60 * 10000)
  const session = await encrypt({ user, expires })

  // Save the session in a cookie
  cookies().set('session', session, { expires, httpOnly: true })
}

export async function logout() {
  // Destroy the session
  cookies().set('session', '', { expires: new Date(0) })
}

export async function getSession() {
  const session = cookies().get('session')?.value
  if (!session) return null
  return await decrypt(session)
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get('session')?.value
  if (!session) return

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session)
  parsed.expires = new Date(Date.now() + 10 * 1000)
  const res = NextResponse.next()
  res.cookies.set({
    name: 'session',
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  })
  return res
}
