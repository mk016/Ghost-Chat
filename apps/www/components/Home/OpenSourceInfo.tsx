import { CircleDot, Github, GitPullRequest, Star, Clock } from 'lucide-react'

import BlurFadeIn from '../ui/BlurFadeIn'
import LinkButton from '../ui/LinkButton'

import StripesBox from './StripesBox'

const ComingSoonDiagram = () => {
  return (
    <div className="flex-center relative -my-4 scale-[0.6] flex-col sm:-my-6 sm:scale-75">
      <div className="flex items-center justify-center gap-4 sm:gap-8">
        <div className="-translate-x-2 rounded-xl border-2 border-neutral-200 bg-white p-2 shadow-lg transition-transform hover:-translate-y-1">
          <Clock className="text-gray-600" />
        </div>
        <div className="rounded-xl border-2 border-neutral-200 bg-white p-2 shadow-lg transition-transform hover:-translate-y-1">
          <Star className="text-yellow-500" />
        </div>
        <div className="translate-x-2 rounded-xl border-2 border-neutral-200 bg-white p-2 shadow-lg transition-transform hover:-translate-y-1">
          <CircleDot className="text-blue-500" />
        </div>
      </div>
      <svg viewBox="0 0 128 55" className="">
        <path
          d="M64 0v25M8 0v8c0 8.837 7.163 16 16 16h24c8.837 0 16 7.163 16 16v15M120 0v8c0 8.837-7.163 16-16 16H80c-5.922 0-11.093 3.218-13.86 8"
          className="stroke-neutral-200"
          fill="none"
          strokeWidth="1.5"
          strokeDasharray="5,5"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="10;0"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
      <div className="rounded-xl border-2 border-neutral-200 bg-white p-2 shadow-lg transition-transform hover:-translate-y-1">
        <Github className="text-gray-800" />
      </div>
    </div>
  )
}

const OpenSourceInfo = () => {
  return (
    <StripesBox>
      <div className="flex flex-col items-center space-y-4 p-4 sm:space-y-5 sm:p-6 md:p-8 lg:p-10 xl:px-20">
        <BlurFadeIn delay={0.1} blur={true}>
          <ComingSoonDiagram />
        </BlurFadeIn>

        <BlurFadeIn delay={0.2} blur={true}>
          <h2 className="text-center text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Coming Soon
          </h2>
        </BlurFadeIn>

        <BlurFadeIn delay={0.3} blur={true}>
          <p className="px-2 text-center text-sm text-gray-600 sm:px-0 sm:text-base">
            We're working on making Ghost open source. Stay tuned for updates!
          </p>
        </BlurFadeIn>

        <BlurFadeIn delay={0.4} blur={true}>
          <div className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm text-gray-700">
            <Clock className="mr-2 size-4" />
            In Development
          </div>
        </BlurFadeIn>
      </div>
    </StripesBox>
  )
}

export default OpenSourceInfo
