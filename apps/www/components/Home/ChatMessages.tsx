'use client'

import { cn } from '@echo/utils'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'

type MessageProps = {
  content: string
  isSent: boolean
  delay: number
  reactions?: string[]
}

const Message = ({
  content,
  isSent,
  delay,
  reactions,
}: MessageProps) => {
  // Correct usage of useRef and useInView
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      className="mb-4 flex items-end gap-2 px-2 md:px-4"
      ref={ref}
      initial={{ opacity: 0, x: isSent ? 30 : -30, y: 20, filter: 'blur(8px)' }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
              filter: 'blur(0px)',
            }
          : {}
      }
      transition={{
        duration: 0.8,
        delay,
        type: 'spring',
        stiffness: 80,
        damping: 20,
        ease: 'easeOut',
      }}
      whileHover={{
        scale: 1.02,
        filter: 'blur(0px)',
        transition: { duration: 0.3, ease: 'easeInOut' },
      }}
    >
      {isInView && (
        <>
          {!isSent && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.6,
                rotate: -15,
                filter: 'blur(4px)',
              }}
              animate={{ opacity: 1, scale: 1, rotate: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 0.7,
                delay: delay + 0.2,
                type: 'spring',
                stiffness: 150,
                damping: 15,
                ease: 'easeOut',
              }}
              whileHover={{
                scale: 1.15,
                rotate: 8,
                filter: 'blur(0px)',
                transition: { duration: 0.4, ease: 'easeInOut' },
              }}
              className="size-6 shrink-0 overflow-hidden rounded-full shadow-lg ring-2 ring-gray-300 backdrop-blur-sm md:size-8"
            >
              <Image
                src="/images/mahendra1.png"
                alt="Avatar"
                width={50}
                height={50}
                className="size-full object-cover"
              />
            </motion.div>
          )}
          <div className="relative w-full">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.8, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              transition={{
                duration: 0.9,
                delay: delay + 0.3,
                type: 'spring',
                stiffness: 60,
                damping: 15,
                ease: 'easeOut',
              }}
              whileHover={{
                y: -4,
                scale: 1.03,
                filter: 'blur(0px)',
                transition: { duration: 0.4, ease: 'easeInOut' },
              }}
              className={cn(
                'w-fit max-w-[85%] rounded-2xl border px-3 py-1.5 text-sm shadow-xl backdrop-blur-sm transition-all duration-300 md:max-w-[80%] md:px-4 md:py-2 md:text-base',
                isSent
                  ? 'ml-auto rounded-br-none border-gray-200 bg-white/90 text-gray-900'
                  : 'rounded-bl-none border-gray-200 bg-white/90 text-gray-900'
              )}
            >
              <motion.span
                initial={{ opacity: 0, filter: 'blur(2px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{
                  duration: 0.6,
                  delay: delay + 1.0,
                  ease: 'easeOut',
                }}
              >
                {content}
              </motion.span>
            </motion.div>
            {reactions && (
              <motion.div
                initial={{ opacity: 0, scale: 0.3, y: 15, filter: 'blur(4px)' }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  duration: 0.6,
                  delay: delay + 1.8,
                  type: 'spring',
                  stiffness: 250,
                  damping: 12,
                  ease: 'easeOut',
                }}
                whileHover={{
                  scale: 1.25,
                  rotate: 8,
                  filter: 'blur(0px)',
                  transition: { duration: 0.3, ease: 'easeInOut' },
                }}
                className="flex-center absolute left-1 top-[40%] mt-2 size-5 rounded-full border border-gray-300 bg-white/95 shadow-lg backdrop-blur-sm md:left-2 md:size-6"
              >
                {reactions.map((reaction, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.3, filter: 'blur(2px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    transition={{
                      duration: 0.5,
                      delay: delay + 2.1 + index * 0.15,
                      type: 'spring',
                      stiffness: 350,
                      damping: 10,
                      ease: 'easeOut',
                    }}
                    whileHover={{
                      scale: 1.4,
                      rotate: 360,
                      filter: 'blur(0px)',
                      transition: { duration: 0.4, ease: 'easeInOut' },
                    }}
                    className="size-3 text-[10px] md:size-4 md:text-xs"
                  >
                    {reaction}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </div>
          {isSent && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.6,
                rotate: 15,
                filter: 'blur(4px)',
              }}
              animate={{ opacity: 1, scale: 1, rotate: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 0.7,
                delay: delay + 0.2,
                type: 'spring',
                stiffness: 150,
                damping: 15,
                ease: 'easeOut',
              }}
              whileHover={{
                scale: 1.15,
                rotate: -8,
                filter: 'blur(0px)',
                transition: { duration: 0.4, ease: 'easeInOut' },
              }}
              className="size-6 shrink-0 overflow-hidden rounded-full shadow-lg ring-2 ring-gray-300 backdrop-blur-sm md:size-8"
            >
              <Image
                src="/images/ghost.png"
                alt="Avatar"
                width={50}
                height={50}
                className="size-full object-cover"
              />
            </motion.div>
          )}
        </>
      )}
    </motion.div>
  )
}

const messages = [
  {
    content: "Hey, who's there?",
    isSent: false,
  },
  {
    content: "Guess what? I'm your ghost chat 👻",
    isSent: true,
  },
  {
    content: 'No way! Prove it.',
    isSent: false,
  },
  {
    content: 'Boo! Still here. Always online.',
    isSent: true,
  },
  {
    content: 'Haha, you got me! 😂',
    isSent: false,
    reactions: ['👻'],
  },
  {
    content: 'Ready for some spooky fun?',
    isSent: true,
  },
]

const ChatMessages = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9, filter: 'blur(10px)' }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      transition={{
        duration: 1.0,
        delay: 0.4,
        type: 'spring',
        stiffness: 50,
        damping: 20,
        ease: 'easeOut',
      }}
      whileHover={{
        scale: 1.02,
        filter: 'blur(0px)',
        transition: { duration: 0.4, ease: 'easeInOut' },
      }}
      className="relative z-10 rounded-2xl border border-gray-200/50 bg-gradient-to-br from-gray-50/80 to-white/90 p-6 shadow-2xl backdrop-blur-md"
    >
      {messages.map((message, index) => (
        <Message
          key={index}
          content={message.content}
          isSent={message.isSent}
          delay={index * 0.25 + 0.2}
          reactions={message.reactions}
        />
      ))}
    </motion.div>
  )
}

export default ChatMessages
