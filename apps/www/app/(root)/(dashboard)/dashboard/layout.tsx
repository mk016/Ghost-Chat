export default function DashboardLayout({
  children,
  joinRoom,
}: {
  children: any
  joinRoom: any
}) {
  return (
    <>
      {children}
      {joinRoom}
    </>
  )
}
