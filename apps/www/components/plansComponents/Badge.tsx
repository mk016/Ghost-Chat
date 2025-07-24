'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface BadgeProps {
  children: React.ReactNode
}

export function Badge({ children }: BadgeProps) {
  return (
    <motion.span
      className="rounded-full border border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50 px-3 py-1 text-sm font-semibold text-purple-700 shadow-sm backdrop-blur-sm"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      {children}
    </motion.span>
  )
}
