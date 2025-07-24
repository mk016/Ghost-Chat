'use client'

import GridPattern from '@echo/ui/components/ui/GridPattern'
import { cn } from '@echo/utils'
import { motion } from 'framer-motion'


import { PricingPlans } from '@/components/plansComponents/PricingPlans'

const page = () => {
  return (
    <div className="relative my-20 overflow-x-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute left-20 top-20 size-40 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute right-20 top-40 size-60 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute left-1/4 top-1/2 size-32 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        squares={Array.from(
          { length: Math.floor(Math.random() * 41) + 20 },
          (_) => [
            Math.floor(Math.random() * 41) + 0,
            Math.floor(Math.random() * 41) + 0,
          ]
        )}
        strokeDasharray={'4 2'}
        className={cn(
          '[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]'
        )}
      />
      
      <div className="relative z-10 flex w-full flex-col items-center gap-10 py-8">
        <motion.div
          className="my-5 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="mb-2 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Choose your{' '}
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              perfect plan
            </span>
          </motion.h1>
          <motion.p
            className="text-center text-lg text-gray-600 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Find a plan that fits your needs and scales with your growth
          </motion.p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <PricingPlans />
        </motion.div>
      </div>
    </div>
  )
}
export default page
