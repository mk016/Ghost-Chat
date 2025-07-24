'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@echo/ui/components/ui/dialog.tsx'
import { motion } from 'framer-motion'
import { Mail, Twitter } from 'lucide-react'
import Link from 'next/link'

import { Button } from '../shared/Button'

interface ProPlanDialogProps {
  isPro: boolean
  isLoading: boolean
}

export function ProPlanDialog({ isPro, isLoading }: ProPlanDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
        >
          <Button
            className="mt-3 w-full rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transition-all duration-200 hover:from-purple-700 hover:to-pink-700 hover:shadow-xl"
            disabled={isPro || isLoading}
          >
            Get Pro Access
          </Button>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <DialogHeader>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <DialogTitle className="text-xl font-bold text-gray-900">
                Get Pro Plan For Free!
              </DialogTitle>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <DialogDescription className="space-y-4 pt-4">
                <motion.p
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Great news! I&apos;m giving away my Pro plan completely FREE to my first 50 members! Here&apos;s how to get it:
                </motion.p>
                <motion.ol
                  className="space-y-2 pl-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="flex items-center space-x-2"
                  >
                    <span>🔄</span>
                    <span>First, activate the free trial</span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    className="flex items-center space-x-2"
                  >
                    <span>📨</span>
                    <span>Then reach out to me through X or email</span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                    className="flex items-center space-x-2"
                  >
                    <span>🎉</span>
                    <span>I&apos;ll upgrade your account to Pro for free!</span>
                  </motion.li>
                </motion.ol>
                <motion.div
                  className="flex gap-4 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1"
                  >
                    <Link
                      href="https://x.com/intent/follow?screen_name=Mk__0168"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="w-full bg-blue-500 hover:bg-blue-600">
                        <Twitter className="mr-2 size-4" />
                        Connect on X
                      </Button>
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1"
                  >
                    <Link
                      href="mailto:mahendrakumawat80224@gmail.com"
                      className="block"
                    >
                      <Button className="w-full bg-gray-600 hover:bg-gray-700">
                        <Mail className="mr-2 size-4" />
                        Contact Me
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>
              </DialogDescription>
            </motion.div>
          </DialogHeader>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}
