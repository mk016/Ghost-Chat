import Link from 'next/link'

import EchoLogo from '../icons/animated/EchoLogo'

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-neutral-200 bg-white">
      <div className="container mx-auto px-4 py-12 sm:px-8 md:px-12 lg:px-20 lg:py-24">
        <div className="flex flex-col space-y-12 lg:flex-row lg:items-start lg:justify-between lg:space-y-0">
          <div className="space-y-3">
            <EchoLogo />

            <p className="text-sm text-neutral-500">
              copyright &copy; {new Date().getFullYear()} Echo. All rights
              reserved.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 sm:gap-16 md:gap-24">
            <div className="flex flex-col space-y-5">
              <h3 className="font-medium text-black">Pages</h3>
              <Link
                href="/join-room"
                className="text-sm text-neutral-500 hover:text-neutral-600"
              >
                Join Room
              </Link>
              <Link
                href="/plans"
                className="text-sm text-neutral-500 hover:text-neutral-600"
              >
                Pricing
              </Link>
              <Link
                href="/#features"
                className="text-sm text-neutral-500 hover:text-neutral-600"
              >
                features
              </Link>
              <Link
                href="/#contact"
                className="text-sm text-neutral-500 hover:text-neutral-600"
              >
                Contact
              </Link>
            </div>

            <div className="flex flex-col space-y-5">
              <h3 className="font-medium text-black">Socials</h3>
              <Link
                href="https://github.com/Rohit-Singh-Rawat"
                className="text-sm text-neutral-500 hover:text-neutral-600"
              >
                GitHub
              </Link>
              <Link
                href="https://x.com/Spacing_Whale"
                className="text-sm text-neutral-500 hover:text-neutral-600"
              >
                Twitter
              </Link>
              <Link
                href="https://www.linkedin.com/in/rohit-singh-rawat-8b4170256/"
                className="text-sm text-neutral-500 hover:text-neutral-600"
              >
                LinkedIn
              </Link>
            </div>

            <div className="flex flex-col space-y-5">
              <h3 className="font-medium text-black">Legal</h3>
              <Link
                href="/privacy"
                className="text-sm text-neutral-500 hover:text-neutral-600"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-neutral-500 hover:text-neutral-600"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookie"
                className="text-sm text-neutral-500 hover:text-neutral-600"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
