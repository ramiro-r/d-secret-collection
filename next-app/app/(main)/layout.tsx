export default function NavigationLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <p>Layout Nav</p>
      {children}
    </>
  )
}
