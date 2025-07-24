'use client'

import { motion } from 'framer-motion'
import React from 'react'

import { PricingPlan } from '@/types'

import { Badge } from './Badge'
import { Feature } from './Feature'
import { IconWrapper } from './IconWrapper'
import { PricingCardButton } from './PricingCardButton'

// Simple Card component
const Card = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={className} {...props}>
    {children}
  </div>
)

// Simple Separator component
const Separator = ({ className }: { className?: string }) => (
  <div className={`h-px bg-gray-200 ${className || ''}`} />
)

export function PricingCard({
  name,
  icon,
  description,
  price,
  badge,
  features,
}: PricingPlan) {
  const isPro = name.toLowerCase() === 'pro'

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <Card
        className={`relative w-[350px] overflow-hidden rounded-3xl border-2 p-6 shadow-xl transition-all duration-300 hover:shadow-2xl ${
          isPro
            ? 'border-purple-200 bg-gradient-to-br from-purple-50 via-white to-pink-50 shadow-purple-200/50 hover:shadow-purple-300/50'
            : 'border-gray-200 bg-white shadow-gray-200/50 hover:shadow-gray-300/50'
        }`}
      >
        {/* Animated background gradient */}
        <motion.div
          className={`absolute inset-0 rounded-3xl ${
            isPro
              ? 'bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-purple-500/5'
              : 'bg-gradient-to-br from-gray-500/5 via-blue-500/5 to-gray-500/5'
          }`}
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="relative z-10">
          <motion.div
            className="mb-6 flex items-center justify-between"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <IconWrapper icon={icon} size="md" />
            </motion.div>

            {badge && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge>{badge}</Badge>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.h2
              className={`text-2xl font-bold ${
                isPro ? 'text-gray-900' : 'text-gray-800'
              }`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {name}
            </motion.h2>
            <motion.p
              className="mb-4 text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {description}
            </motion.p>
            <motion.div
              className="flex items-baseline"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <span
                className={`text-4xl font-bold ${
                  isPro ? 'text-purple-600' : 'text-gray-800'
                }`}
              >
                ${price}
              </span>
              <span className="ml-2 text-gray-600">/month</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Separator className="mb-4" />
          </motion.div>

          <motion.div
            className="my-4 space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.8 + index * 0.1,
                }}
                whileHover={{ x: 5 }}
              >
                <Feature {...feature} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <Separator className="mb-4" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <PricingCardButton name={name} />
          </motion.div>
        </div>
      </Card>
    </motion.div>
  )
}
