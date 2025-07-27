import type { Metadata } from 'next'

import BentoSection from '@/components/Home/BentoSection'
import ContactUs from '@/components/Home/ContactUs'
import { FeatureCards } from '@/components/Home/Features/FeatureCards'
import { Hero } from '@/components/Home/Hero'

export const metadata: Metadata = {
  title: 'Ghost - Real-time Chat',
  description:
    'Create instant chat rooms for quick collaboration and easy sharing. No signup needed - just seamless communication on demand.',
  keywords: [
    'chat',
    'real-time',
    'communication',
    'instant messaging',
    'collaboration',
    'Ghost',
  ],
  openGraph: {
    title: 'Ghost - Real-time Chat',
    description:
      'Create instant chat rooms for quick collaboration and easy sharing. No signup needed - just seamless communication on demand.',
    images: ['/images/Ghost.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ghost - Real-time Chat',
    description:
      'Create instant chat rooms for quick collaboration and easy sharing. No signup needed - just seamless communication on demand.',
    images: ['/images/Ghost.png'],
  },
}

const Page = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <BentoSection />
        <FeatureCards />
        <ContactUs /> 
      </div>
    </div>
  )
}

export default Page
