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
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 8v4l3 3" />
      <path d="M3.05 11a9 9 0 1 1 5.17 8.36L12 22l3.83-2.64A9 9 0 0 1 3.05 11z" />
    </motion.svg>
  )
}

export { History }
