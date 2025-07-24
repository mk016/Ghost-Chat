'use client'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useAction } from 'next-safe-action/hooks'
import { toast } from 'sonner'

import { useUser } from '@/hooks/useSession'
import {
  activateProPlanAction,
  activateFreePlanAction,
} from '@/lib/actions/plansActions'

import { Button } from '../shared/Button'

import { ProPlanDialog } from './ProPlanDialog'

interface PricingCardButtonProps {
  name: string
}

export function PricingCardButton({ name }: PricingCardButtonProps) {
  const { data, isLoading } = useUser()
  const router = useRouter()

  const action =
    name.toLowerCase() === 'pro'
      ? activateProPlanAction
      : activateFreePlanAction

  const { executeAsync, isExecuting } = useAction(action, {
    onSuccess: () => {
      toast.success(`Successfully activated ${name} plan`)
      router.push('/dashboard')
    },
    onError: () => {
      toast.error('Failed to activate plan')
    },
  })

  const isPro = !!data?.user?.subscription?.isPro
  const isSubscription = !!data?.user?.subscription

  const handleClick = () => {
    console.log('Button clicked, user data:', data)
    if (!data?.user) {
      toast.info('Please login first')
      console.log('No user found, redirecting to login')
    } else {
      console.log('User found, executing plan activation')
      executeAsync()
    }
  }

  if (name.toLowerCase() === 'pro') {
    return <ProPlanDialog isPro={isPro} isLoading={isLoading} />
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      <Button
        className="mt-3 w-full rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 shadow-sm transition-all duration-200 hover:from-gray-200 hover:to-gray-300 hover:shadow-md"
        onClick={handleClick}
        disabled={isExecuting || isSubscription || isLoading}
        isLoading={isExecuting}
      >
        Get Started
      </Button>
    </motion.div>
  )
}
