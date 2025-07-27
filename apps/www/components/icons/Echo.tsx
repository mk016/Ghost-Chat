import * as React from 'react'
import { SVGProps } from 'react'

const Echo = ({ animate = false, ...props }: SVGProps<SVGSVGElement> & { animate?: any }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={120}
    viewBox="0 0 120 40"
    height={40}
    fill="none"
    {...props}
  >
    <text
      x="10"
      y="28"
      fontSize="38"
      fontWeight="bold"
      fill="currentColor"
      fontFamily="system-ui, -apple-system, sans-serif"
    >
      Ghost
    </text>
  </svg>
)

export default Echo
