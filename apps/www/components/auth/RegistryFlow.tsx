'use client'

import { useRegistry } from '@/context/RegistryContext'

import SignupCard from './SignupCard'
import VerifyEmailCard from './VerifyEmailCard'

const RegistryFlow = () => {
  const { isRegistered } = useRegistry()

  return (
    <div className="flex-center w-full">
      {!isRegistered && <SignupCard />}
      {isRegistered && <VerifyEmailCard />}
    </div>
  )
}

export default RegistryFlow
