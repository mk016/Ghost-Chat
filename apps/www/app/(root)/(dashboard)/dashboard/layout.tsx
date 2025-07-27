import { SidebarInset, SidebarProvider } from '@echo/ui/components/ui/sidebar'

import { AppSidebar } from '@/components/shared/app-sidebar'
import { TopBar } from '@/components/shared/TopBar'

export default function DashboardLayout({
  children,
  joinRoom,
}: {
  children: any
  joinRoom: any
}) {
  return (
    <div className="bg-neutral-100">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="relative rounded-none rounded-tl-2xl pt-px md:border md:border-b-0 md:border-r-0 md:border-neutral-200/80 md:bg-white">
          <TopBar />
          {children}
          {joinRoom}
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
