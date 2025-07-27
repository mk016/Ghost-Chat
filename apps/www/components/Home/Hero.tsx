'use client'

import { GridPattern } from '@echo/ui'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { FlaskIcon } from '../icons/animated/Flask'
import { Button } from '../shared/Button'

import DemoChatAnimated from './DemoChatAnimated'

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative mt-16 space-y-6 overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-black to-gray-800 p-2 py-10 shadow-2xl sm:mt-20 sm:space-y-10 sm:p-10 sm:py-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-1/2 left-1/4 h-32 w-32 rounded-full bg-gradient-to-r from-yellow-500/10 to-orange-500/10 blur-2xl"
        />
      </div>

      <div className="relative p-3 sm:p-5">
        <GridPattern
          width={40}
          height={40}
          className="absolute inset-0 stroke-gray-600 opacity-30 [mask-image:radial-gradient(900px_circle_at_center,transparent,white)]"
        />
        <div className="relative z-10 mx-auto max-w-4xl px-2 sm:px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mx-auto mb-4 flex justify-center sm:mb-5"
            >
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="flex-center gap-2 rounded-full border border-gray-700 bg-gradient-to-b from-gray-800 via-gray-900 to-black px-3 py-1 text-xs font-medium text-white shadow-lg backdrop-blur-sm sm:px-5 sm:text-sm"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <FlaskIcon />
                </motion.div>
                <motion.p
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, #ffffff, #facc15, #ffffff)',
                    backgroundSize: '200% 100%',
                    backgroundPosition: '0% 0%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 0%'],
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 3,
                    ease: 'linear',
                  }}
                >
                  Beta Now Live
                </motion.p>
              </motion.span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="font-sans text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Real-Time
              <span className="relative whitespace-nowrap">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 273 31"
                  fill="none"
                  className="absolute left-3 top-[67%] h-[0.58em] w-full scale-75"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 1.25,
                      ease: 'easeInOut',
                      delay: 0.5,
                    }}
                    stroke="#facc15"
                    strokeWidth={'3'}
                    d="M1 20.5C108 -6.50001 137.5 0.500026 134.5 6.50009C131.5 12.5001 107.5 25 102 27.0001C96.5 37.0001 211.036 14.8961 272 27.0001"
                  />
                </svg>
                <span className="relative bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent"> Chat Rooms </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mx-auto mt-6 max-w-2xl px-1 text-base text-gray-300 sm:mt-10 sm:px-4 sm:text-lg"
            >
              Create instant chat rooms for quick collaboration and easy
              sharing. No signup needed - just seamless communication on demand.
            </motion.p>

            <motion.div
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 flex flex-col items-center justify-center gap-4 px-4 sm:mt-10 sm:flex-row sm:gap-6"
            >
              <Link href="/register" className="w-full sm:w-auto">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-gray-800 via-black to-gray-900 px-4 py-2 font-normal text-white hover:shadow-2xl hover:shadow-purple-500/25 sm:px-6 sm:py-3 border border-gray-700">
                    <span className="relative z-10">Get started</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"
                      initial={{ x: '100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                    />
                  </Button>
                </motion.div>
              </Link>
              <Link href="/room/public" className="w-full sm:w-auto">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="group relative w-full overflow-hidden rounded-full border-2 border-gray-600 bg-gradient-to-r from-gray-800/50 to-gray-900/50 px-4 py-2 font-normal text-white transition-all hover:border-gray-500 hover:bg-gray-800/70 hover:shadow-2xl hover:shadow-blue-500/25 sm:px-6 sm:py-3 backdrop-blur-sm">
                    <span className="relative z-10">Join public</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="bg-gradient-radial absolute left-1/2 top-1/4 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full from-purple-500/10 via-transparent to-transparent opacity-20 blur-3xl sm:size-[1000px]" />
          <div className="bg-gradient-radial absolute bottom-0 right-1/2 size-[400px] translate-x-1/2 translate-y-1/2 rounded-full from-blue-500/10 via-transparent to-transparent opacity-20 blur-3xl sm:size-[800px]" />
        </div>
      </div>
      <div className="flex-center w-full">
        <DemoChatAnimated />
      </div>
    </section>
  )
}
