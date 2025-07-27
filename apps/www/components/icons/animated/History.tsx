'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

interface HistoryProps {
  animate?: boolean
  className?: string
}

const History = ({ animate = false, className = '' }: HistoryProps) => {
  const controls = useAnimation()

  useEffect(() => {
    if (animate) {
      controls.start('animate')
    } else {
      controls.start('normal')
    }
  }, [animate, controls])

  return (
    <div className="hover:bg-accent flex cursor-pointer select-none items-center justify-center rounded-md transition-colors duration-200">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M3 3v5h5" />
        <path d="M3 8c0 6.075 4.925 11 11 11s11-4.925 11-11" />
        <motion.path
          d="M9 12l2 2 4-4"
          variants={{
            normal: { pathLength: 1, opacity: 1 },
            animate: {
              pathLength: [0, 1],
              opacity: [0, 1],
              transition: {
                duration: 0.5,
              },
            },
          }}
          animate={controls}
        />
        <motion.path
          d="M12 6v6l4 2"
          variants={{
            normal: { pathLength: 1, opacity: 1 },
            animate: {
              pathLength: [0, 1],
              opacity: [0, 1],
              transition: {
                duration: 0.8,
                delay: 0.2,
              },
            },
          }}
          animate={controls}
        />
      </motion.svg>
    </div>
  )
}

export { History }
