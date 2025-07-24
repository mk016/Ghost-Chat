'use client'

import { cn } from '@echo/utils/src'

interface EchoLoadingProps {
  className?: string
  duration?: number // not used anymore, but kept for API compatibility
}

const EchoLoading = ({ className }: EchoLoadingProps) => {
  return (
    <div className={cn('flex items-center justify-center', className)}>
      <img
        src="/bgremoveghost.gif"
        alt="Loading..."
        width={50}
        height={50}
        className="object-contain"
      />
    </div>
  )
}

export { EchoLoading }
