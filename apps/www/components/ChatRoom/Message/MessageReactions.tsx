import { Badge } from '@echo/ui/components/ui/badge'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@echo/ui/components/ui/popover'
import { ScrollArea, ScrollBar } from '@echo/ui/components/ui/scroll-area'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@echo/ui/components/ui/tabs'
import { motion } from 'framer-motion'

import { useIdentityStore } from '@/lib/store/useIdentityStore'
import { Reaction } from '@/types'

import { MessageAvatar } from './MessageAvatar'

type MessageReactionsProps = {
  reactions: Reaction[]
  totalReactions: number
  side?: 'right' | 'left'
}

export const MessageReactions = ({
  reactions,
  totalReactions,
  side,
}: MessageReactionsProps) => {
  const { userId: participantId } = useIdentityStore()
  if (totalReactions === 0) return null

  const renderUsers = (users: Reaction['users'], emoji: string) =>
    users.map((user, index) => (
      <motion.div
        key={user.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        className="flex items-center justify-between"
      >
        <div className="flex items-center gap-2 md:gap-5">
          <MessageAvatar
            avatar={user.avatar}
            showAvatar={true}
            userName={user.id === participantId ? 'You' : user.name}
          />
          <p className="text-xs font-medium text-black/70 md:text-sm">
            {user.id === participantId ? 'You' : user.name}
          </p>
        </div>
        <p className="text-lg md:text-2xl">{emoji}</p>
      </motion.div>
    ))

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className={`absolute bottom-0 ${side === 'left' ? 'right-0' : 'left-0'} z-50 mx-1 w-fit translate-y-2/3 rounded-full border border-neutral-200 bg-white p-1 md:mx-2 md:p-1.5`}
        >
          <div className="flex items-center justify-center gap-0.5">
            {reactions.slice(0, 3).map((reaction) => (
              <span key={reaction.emoji} className="text-[10px] md:text-xs">
                {reaction.emoji}
              </span>
            ))}
            {totalReactions > 1 && (
              <div className="px-0.5 text-[10px] font-medium text-gray-600 md:px-1 md:text-xs">
                {totalReactions}
              </div>
            )}
          </div>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[280px] max-sm:-translate-y-5 max-sm:scale-75 md:w-[320px]">
        <div>
          <Tabs defaultValue="all">
            <ScrollArea>
              <TabsList className="border-border text-foreground mb-2 h-auto rounded-none bg-transparent px-0 py-0.5 md:mb-3 md:py-1">
                <TabsTrigger
                  value="all"
                  className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative px-1 after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none md:px-1.5"
                >
                  All{' '}
                  <Badge
                    className="bg-primary/15 hover:bg-primary/15 ms-1 min-w-4 px-1 md:ms-1.5 md:min-w-5 md:px-1.5"
                    variant="secondary"
                  >
                    {totalReactions}
                  </Badge>
                </TabsTrigger>
                {reactions.map((reaction) => (
                  <TabsTrigger
                    key={reaction.emoji}
                    value={reaction.emoji}
                    className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative px-1 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none md:px-1.5"
                  >
                    {reaction.emoji}
                    <Badge
                      className="bg-primary/15 hover:bg-primary/15 ms-1 min-w-4 px-1 md:ms-1.5 md:min-w-5 md:px-1.5"
                      variant="secondary"
                    >
                      {reaction.total}
                    </Badge>
                  </TabsTrigger>
                ))}
              </TabsList>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>

            <TabsContent value="all" className="space-y-1 md:space-y-2">
              {reactions.map((reaction, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.2 }}
                >
                  {renderUsers(reaction.users, reaction.emoji)}
                </motion.div>
              ))}
            </TabsContent>

            {reactions.map((reaction) => (
              <TabsContent
                key={reaction.emoji}
                value={reaction.emoji}
                className="space-y-1 md:space-y-2"
              >
                {renderUsers(reaction.users, reaction.emoji)}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </PopoverContent>
    </Popover>
  )
}
