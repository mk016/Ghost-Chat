'use client'

import { motion } from 'framer-motion'
import React from 'react'

import { plans } from '@/constants'

import { PricingCard } from './PricingCard'

export function PricingPlans() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <motion.div
      className="mx-auto grid w-full max-w-[90rem] grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-2 lg:gap-8 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {plans.map((plan, index) => (
        <motion.div
          key={plan.name}
          variants={cardVariants}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3, ease: 'easeInOut' },
          }}
        >
          <PricingCard {...plan} />
        </motion.div>
      ))}
    </motion.div>
  )
}
