'use client'

import { createContext, useContext, useState } from 'react'

interface RegistryContextType {
  isRegistered: boolean
  setIsRegistered: (value: boolean) => void
  tempUserId: string | null
  setTempUserId: (value: string | null) => void
  tempUserEmail: string | null
  setTempUserEmail: (value: string | null) => void
  tempUserName: string | null
  setTempUserName: (value: string | null) => void
  tempUserAvatar: string | null
  setTempUserAvatar: (value: string | null) => void
}

const RegistryContext = createContext<RegistryContextType | undefined>(undefined)

export const useRegistry = () => {
  const context = useContext(RegistryContext)
  if (!context) {
    throw new Error('useRegistry must be used within a RegisterProvider')
  }
  return context
}

export const RegisterProvider: React.FC<{ children: any }> = ({
  children,
}) => {
  const [isRegistered, setIsRegistered] = useState(false)
  const [tempUserId, setTempUserId] = useState<string | null>(null)
  const [tempUserEmail, setTempUserEmail] = useState<string | null>(null)
  const [tempUserName, setTempUserName] = useState<string | null>(null)
  const [tempUserAvatar, setTempUserAvatar] = useState<string | null>(null)

  return (
    <RegistryContext.Provider
      value={{
        isRegistered,
        setIsRegistered,
        tempUserId,
        setTempUserId,
        tempUserEmail,
        setTempUserEmail,
        tempUserName,
        setTempUserName,
        tempUserAvatar,
        setTempUserAvatar,
      }}
    >
      {children}
    </RegistryContext.Provider>
  )
}
