
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-mono text-sm">
      <div className="z-10 max-w-6xl w-full px-4 md:px-8 lg:px-16 py-4">
        {children}
      </div>
    </main>
  )
}
