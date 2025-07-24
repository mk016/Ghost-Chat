'use client'

import { motion } from 'framer-motion'
import React from 'react'

import { PricingFeature } from '@/types'

import { IconWrapper } from './IconWrapper'

export function Feature({ icon, title, description }: PricingFeature) {
  return (
    <motion.div
      className="flex items-center justify-start space-x-4 rounded-lg p-2 transition-all duration-200 hover:bg-gray-50/50"
      whileHover={{ scale: 1.02, x: 5 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <IconWrapper icon={icon} size="sm" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h3
          className="font-semibold text-gray-800"
          whileHover={{ color: '#6366f1' }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-sm text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  )
}
