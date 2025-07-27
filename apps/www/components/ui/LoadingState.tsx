'use client'

import { GridPattern } from '@echo/ui'
import { cn } from '@echo/utils'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState, useMemo } from 'react'

import { EchoLoading } from './EchoLoading'

interface LoadingStateProps {
  fullScreen?: boolean
}

export const LoadingState = ({ fullScreen = false }: LoadingStateProps) => {
  const [loadingMessage, setLoadingMessage] = useState('Initializing...')

  useEffect(() => {
    const messages = [
      { message: 'Establishing connection...', delay: 1500 },
      { message: 'Connecting to server...', delay: 3000 },
      { message: 'Joining room...', delay: 4000 },
      { message: 'Almost there...', delay: 6000 },
    ]

    const timeouts: NodeJS.Timeout[] = []

    messages.forEach(({ message, delay }) => {
      const timeout = setTimeout(() => {
        setLoadingMessage(message)
      }, delay)
      timeouts.push(timeout)
    })

    return () => {
      timeouts.forEach(clearTimeout)
    }
  }, [])

  // Use deterministic squares to avoid hydration mismatch
  const squares = useMemo(
    () => [
      [30, 0],
      [31, 1],
      [32, 2],
      [33, 3],
      [34, 4],
      [35, 5],
      [36, 6],
      [37, 7],
      [38, 8],
      [39, 9],
      [40, 10],
      [41, 11],
      [42, 12],
      [43, 13],
      [44, 14],
    ] as [number, number][],
    []
  )

  return (
    <div
      className={cn(
        'relative flex flex-col items-center justify-center bg-gradient-to-b from-white to-neutral-50',
        fullScreen && 'h-screen'
      )}
    >
      <GridPattern
        width={40}
        height={40}
        className="absolute inset-0 size-full opacity-70 [mask-image:linear-gradient(to_top_left,white,transparent_70%)]"
        strokeDasharray="4 4"
        squares={squares}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center gap-8 rounded-2xl p-8"
      >
        <EchoLoading className="scale-110" />
        <AnimatePresence mode="wait">
          <motion.div
            key={loadingMessage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col items-center gap-2"
          >
            <p className="text-lg font-medium text-neutral-600">
              {loadingMessage}
            </p>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
