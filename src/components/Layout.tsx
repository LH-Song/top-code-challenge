export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="flex-auto">{children}</main>
    </>
  )
}
