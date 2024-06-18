'use client'

import React, { FC } from 'react'
import { SessionProvider } from 'next-auth/react'

type Props = {
  children: React.ReactNode
}

const AuthProvider: FC<Props> = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default AuthProvider
