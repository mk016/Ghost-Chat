'use client'
import { createRoomSchema } from '@echo/lib'
import { Input as Input2 } from '@echo/ui/components/ui/input'
import { Switch } from '@echo/ui/components/ui/switch'
import { zodResolver } from '@hookform/resolvers/zod'
import { ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useAction } from 'next-safe-action/hooks'
import { useState } from 'react'
import { Button, Group, Input, Label, NumberField } from 'react-aria-components'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button as Button2 } from '@/components/shared/Button'
import { ResponsiveModal } from '@/components/ui/responsive-modal'
import { createRooms } from '@/lib/actions/RoomActions'
import { UserStats } from '@/types'

type CreateRoomInput = z.infer<typeof createRoomSchema>

function CreateRoomContent({
  onSubmit,
  form,
  status,
  limits,
  savedRooms,
}: {
  onSubmit: (data: CreateRoomInput) => Promise<void>
  form: ReturnType<typeof useForm<CreateRoomInput>>
  status: string
  limits: UserStats['limits']
  savedRooms: UserStats['savedRooms']
}) {
  return (
    <>
      <div className="mb-6 text-2xl font-semibold md:mb-10 md:text-3xl">
        Create Room
      </div>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 md:space-y-6"
      >
        <div className="space-y-2">
          <Label
            className="text-foreground text-sm font-medium"
            htmlFor="room-name"
          >
            Room Name
          </Label>
          <Input2
            id="room-name"
            placeholder="Enter room name"
            type="text"
            {...form.register('name')}
            required
          />
        </div>

        <NumberField
          value={form.watch('maxUsers')}
          onChange={(value) => form.setValue('maxUsers', value)}
          minValue={1}
          maxValue={limits?.maxUsers ?? 100}
        >
          <div className="space-y-2">
            <Label className="text-foreground text-sm font-medium">
              Total Participants
            </Label>
            <Group className="border-input ring-offset-background data-[focus-within]:border-ring data-[focus-within]:ring-ring/30 relative inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-lg border text-sm shadow-sm shadow-black/5 transition-shadow data-[disabled]:opacity-50 data-[focus-within]:outline-none data-[focus-within]:ring-2 data-[focus-within]:ring-offset-2">
              <Button
                slot="decrement"
                className="border-input bg-background text-muted-foreground/80 ring-offset-background hover:bg-accent hover:text-foreground -ms-px flex aspect-square h-[inherit] items-center justify-center rounded-s-lg border text-sm transition-shadow disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Minus size={16} strokeWidth={2} aria-hidden="true" />
              </Button>
              <Input className="bg-background text-foreground w-full grow px-3 py-2 text-center tabular-nums focus:outline-none" />
              <Button
                slot="increment"
                className="border-input bg-background text-muted-foreground/80 ring-offset-background hover:bg-accent hover:text-foreground -me-px flex aspect-square h-[inherit] items-center justify-center rounded-e-lg border text-sm transition-shadow disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Plus size={16} strokeWidth={2} aria-hidden="true" />
              </Button>
            </Group>
          </div>
        </NumberField>

        <NumberField
          value={form.watch('maxTimeLimit')}
          onChange={(value) => form.setValue('maxTimeLimit', value)}
          minValue={1}
          maxValue={limits?.maxTimeLimit ?? 200}
        >
          <div className="space-y-2">
            <Label className="text-foreground text-sm font-medium">
              Room Duration (minutes)
            </Label>
            <Group className="border-input ring-offset-background data-[focus-within]:border-ring data-[focus-within]:ring-ring/30 relative inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-lg border text-sm shadow-sm shadow-black/5 transition-shadow data-[disabled]:opacity-50 data-[focus-within]:outline-none data-[focus-within]:ring-2 data-[focus-within]:ring-offset-2">
              <Input className="bg-background text-foreground w-full grow px-3 py-2 text-center tabular-nums focus:outline-none" />
              <div className="flex h-[calc(100%+2px)] flex-col">
                <Button
                  slot="increment"
                  className="border-input bg-background text-muted-foreground/80 ring-offset-background hover:bg-accent hover:text-foreground -me-px flex h-1/2 w-6 flex-1 items-center justify-center border text-sm transition-shadow disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <ChevronUp size={12} strokeWidth={2} aria-hidden="true" />
                </Button>
                <Button
                  slot="decrement"
                  className="border-input bg-background text-muted-foreground/80 ring-offset-background hover:bg-accent hover:text-foreground -me-px -mt-px flex h-1/2 w-6 flex-1 items-center justify-center border text-sm transition-shadow disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <ChevronDown size={12} strokeWidth={2} aria-hidden="true" />
                </Button>
              </div>
            </Group>
          </div>
        </NumberField>

        <div className="border-input has-[[data-state=checked]]:border-ring relative flex w-full items-start gap-2 rounded-lg border p-3 shadow-sm shadow-black/5 md:p-4">
          <Switch
            id="save-history"
            disabled={
              savedRooms !== undefined &&
              limits.maxSavedRooms !== undefined &&
              savedRooms >= limits.maxSavedRooms
            }
            className="order-1 h-4 w-6 after:absolute after:inset-0 [&_span]:size-3 [&_span]:data-[state=checked]:translate-x-2 rtl:[&_span]:data-[state=checked]:-translate-x-2"
            aria-describedby="save-history-description"
            checked={!form.watch('isTemporary')}
            onCheckedChange={(checked) =>
              form.setValue('isTemporary', !checked)
            }
          />
          <div className="grid grow gap-1 md:gap-2">
            <Label htmlFor="save-history">
              Save Chat History{' '}
              <span className="text-muted-foreground text-xs font-normal leading-[inherit]">
                (Recommended)
              </span>
            </Label>
            <p
              id="save-history-description"
              className="text-muted-foreground text-xs"
            >
              Keep a record of this room&apos;s chat to review later
            </p>
          </div>
        </div>

        <Button2
          type="submit"
          disabled={status === 'executing' || !form.watch('name')}
          className="w-full"
          isLoading={status === 'executing'}
        >
          Create Room
        </Button2>
      </form>
    </>
  )
}

export default function CreateRoomButton({
  totalRooms,
  limits,
  showStats = true,
  savedRooms,
}: UserStats & { showStats?: boolean }) {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const form = useForm<CreateRoomInput>({
    resolver: zodResolver(createRoomSchema),
    defaultValues: {
      name: '',
      maxUsers: 2,
      maxTimeLimit: 10,
      isTemporary: true,
    },
  })

  const { executeAsync, status } = useAction(createRooms, {
    onSuccess: (result) => {
      if (result.data?.room) {
        toast.success('Room created successfully')
        router.push(`/room/${result.data.room.id}`)
        setOpen(false)
      }
    },
    onError: (error) => {
      console.error('Failed to create room:', error)
      toast.error('Failed to create room')
    },
  })

  const onSubmit = async (data: CreateRoomInput) => {
    await executeAsync({
      name: data.name,
      maxUsers: data.maxUsers,
      maxTimeLimit: data.maxTimeLimit,
      isTemporary: data.isTemporary,
    })
  }

  const trigger = (
    <Button2
      className="w-full md:w-auto"
      disabled={
        totalRooms && limits.maxRooms ? totalRooms >= limits.maxRooms : false
      }
      onClick={() => setOpen(true)}
    >
      Create room
      {showStats &&
        totalRooms !== undefined &&
        limits.maxRooms !== undefined && (
          <span className="border-primary-foreground/30 text-primary-foreground/60 -me-1 ms-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium">
            {totalRooms}/{limits.maxRooms}
          </span>
        )}
    </Button2>
  )

  return (
    <>
      {trigger}
      <ResponsiveModal title="Create Room" onOpenChange={setOpen} open={open}>
        <CreateRoomContent
          onSubmit={onSubmit}
          form={form}
          status={status}
          limits={limits}
          savedRooms={savedRooms}
        />
      </ResponsiveModal>
    </>
  )
}
