'use client'

import { LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import React from 'react'

interface IconWrapperProps {
  icon: LucideIcon
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function IconWrapper({
  icon: Icon,
  size = 'md',
  className = '',
}: IconWrapperProps) {
  const sizeStyles = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-7 h-7',
  }

  return (
    <motion.div
      className={`rounded-full border-2 border-gray-200 bg-white/90 p-2 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-gray-300 hover:shadow-md ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      <Icon className={`${sizeStyles[size]} text-gray-700 transition-colors duration-200 hover:text-gray-900`} />
    </motion.div>
  )
}
