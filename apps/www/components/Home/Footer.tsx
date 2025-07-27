'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

import EchoLogo from '../icons/animated/EchoLogo'
import { X, Linkedin } from 'lucide-react'

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  }

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    },
    hover: {
      x: 5,
      transition: { duration: 0.2 }
    }
  }

  return (
    <motion.footer 
      className="mt-10 border-t border-gray-700 bg-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col space-y-12 lg:flex-row lg:items-start lg:justify-between lg:space-y-0">
          <motion.div 
            className="space-y-3"
            variants={itemVariants}
          >
            <EchoLogo />

            <motion.p 
              className="text-sm text-gray-400"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              copyright &copy; {new Date().getFullYear()} Ghost. All rights
              reserved.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 sm:gap-16 md:gap-24">
            <motion.div 
              className="flex flex-col space-y-5"
              variants={itemVariants}
            >
              <motion.h3 
                className="font-medium text-white"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Pages
              </motion.h3>
              <motion.div variants={itemVariants}>
                <Link
                  href="/join-room"
                  className="text-sm text-gray-400 hover:text-gray-300 transition-colors"
                >
                  <motion.span
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    Join Room
                  </motion.span>
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  href="/plans"
                  className="text-sm text-gray-400 hover:text-gray-300 transition-colors"
                >
                  <motion.span
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    Pricing
                  </motion.span>
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  href="/#features"
                  className="text-sm text-gray-400 hover:text-gray-300 transition-colors"
                >
                  <motion.span
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    features
                  </motion.span>
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  href="/#contact"
                  className="text-sm text-gray-400 hover:text-gray-300 transition-colors"
                >
                  <motion.span
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    Contact
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              className="flex flex-col space-y-5"
              variants={itemVariants}
            >
              <motion.h3 
                className="font-medium text-white"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Socials
              </motion.h3>
              <motion.div variants={itemVariants}>
                <Link
                  href="https://github.com/mk016"
                  className="text-sm text-gray-400 hover:text-gray-300 transition-colors"
                >
                  <motion.span
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    GitHub
                  </motion.span>
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  href="https://x.com/Mk__0168"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                >
                  <motion.div
                    variants={linkVariants}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  href="https://www.linkedin.com/in/mahendra-kumawat-59911a253/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                >
                  <motion.div
                    variants={linkVariants}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Linkedin className="h-5 w-5" />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              className="flex flex-col space-y-5"
              variants={itemVariants}
            >
              <motion.h3 
                className="font-medium text-white"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Legal
              </motion.h3>
              <motion.div variants={itemVariants}>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-400 hover:text-gray-300 transition-colors"
                >
                  <motion.span
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    Privacy Policy
                  </motion.span>
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  href="/terms"
                  className="text-sm text-gray-400 hover:text-gray-300 transition-colors"
                >
                  <motion.span
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    Terms of Service
                  </motion.span>
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  href="/cookie"
                  className="text-sm text-gray-400 hover:text-gray-300 transition-colors"
                >
                  <motion.span
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    Cookie Policy
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
