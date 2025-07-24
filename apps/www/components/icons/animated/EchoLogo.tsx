'use client'

import { motion, useAnimation } from 'framer-motion'
import Link from 'next/link'

import Echo from '../Echo'
import EchoWave from './EchoWave'

const EchoLogo = () => {
  const controls = useAnimation()
  return (
    <Link
      href={'/'}
      className="z-[60] flex items-center gap-2"
      onMouseEnter={() => controls.start('animate')}
      onMouseLeave={() => controls.start('normal')}
      aria-label="Ghost Home"
    >
      <div className="flex items-center gap-2">
        <Echo className="h-5 w-16" aria-hidden="true" />
        <EchoWave />  
      </div>
      <div>
        
      </div>
    </Link>
  )
}
export default EchoLogo
