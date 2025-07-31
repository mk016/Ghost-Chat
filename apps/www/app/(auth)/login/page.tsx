import type { Metadata } from 'next'

import LoginCard from '@/components/auth/LoginCard'
import GhostLogo from '@/components/icons/animated/EchoLogo'

export const metadata: Metadata = {
  title: 'Login',
  description:
    'Log in to your Ghost account to access real-time chat rooms and seamless communication.',
  keywords: ['login', 'chat', 'real-time', 'communication', 'Ghost'],
}

const ERROR_MESSAGES = {
  no_user_found: 'No user account was found. Please try logging in again.',
  something_went_wrong: 'Something went wrong. Please try again later.',
} as const

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { error } = (await searchParams) as { error?: string }

  const errorMessage = error
    ? ERROR_MESSAGES[error as keyof typeof ERROR_MESSAGES] ||
      'An error occurred. Please try again.'
    : undefined

  return (
    <div className="gridGradient min-h-screen w-full flex flex-col items-center justify-center px-4">
      <div className="mb-8">
        <GhostLogo />
      </div>
      <div className="w-full max-w-md">
        <LoginCard error={errorMessage} />
      </div>
    </div>
  )
}
