'use client'

import Image from 'next/image'

const EchoWave = () => {
  return (
    <Image
      src="/bgremoveghost.gif"
      alt="Ghost Animation"
      width={25}
      height={25}
      className="object-contain"
    />
  )
}

export default EchoWave
