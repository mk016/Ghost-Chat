'use client'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@echo/ui/components/ui/tooltip'

import Emoji from '../icons/animated/Emoji'

export const ReactionButton = ({ open }: { open: boolean }) => {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className={`transition-ease ${open ? 'opacity-100' : 'marker:'} rounded-full p-0.5 opacity-0 hover:bg-gray-100 group-hover:opacity-100`}
            aria-label="Add reaction"
          >
            <Emoji className="size-5 fill-gray-500" />
          </div>
        </TooltipTrigger>
        <TooltipContent className="flex gap-1 rounded-full bg-black p-1 px-2">
          add reaction
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
