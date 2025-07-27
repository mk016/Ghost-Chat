import { NavBar } from '@/components/Home/NavBar'
import Footer from '@/components/Home/Footer'

export default function MarketingLayout({
  children,
}: {
  children: any
}) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}
