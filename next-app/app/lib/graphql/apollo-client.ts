import { ApolloClient, InMemoryCache } from '@apollo/client'

let client: ApolloClient<any> | null = null

// Apollo client is still in experimental phase on Next 14 RSC:
// https://github.com/apollographql/apollo-client-nextjs
// hence to avoid caching issues between Next cache and Apollo cache
// we need to re-create the instance of the client in the server
export const getClient = () => {
  if (!client || typeof window === 'undefined') {
    client = new ApolloClient({
      uri: process.env.SERVER_URL,
      cache: new InMemoryCache(),
    })
  }

  return client
}

export default client
