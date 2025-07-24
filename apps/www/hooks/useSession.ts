'use client'

import { useQuery } from '@tanstack/react-query'

import { getSession } from '@/lib/actions/authActions'
import { User } from '@/types'

export function useUser() {
  return useQuery<{ user: User }, Error>({
    queryKey: ['user'],
    queryFn: async () => {
      console.log('Fetching session...')
      const session = await getSession()
      console.log('Session data:', session)
      if (!session) {
        throw new Error('Session fetch failed')
      }
      if (session?.data?.user) {
        console.log('User found in session:', session.data.user)
        return { user: session.data.user }
      } else {
        console.log('No user in session')
        throw new Error('Unauthorized')
      }
    },

    retry: (failureCount, error) => {
      return failureCount < 3 && error.message !== 'Unauthorized'
    },
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchInterval: (data) => (data ? 15 * 60 * 1000 : false),
  })
}
