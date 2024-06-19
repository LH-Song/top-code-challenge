'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { Button } from './ui/button'
import { SaveIcon } from './icon'

export const SignInButton = () => {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <>...loading</>
  }

  if (status === 'authenticated') {
    return (
      <div className="flex items-center gap-2 rounded-3xl px-4 py-1 text-amber-500 ring-1 ring-amber-500 hover:bg-black hover:text-white">
        <button className="flex flex-col items-center justify-center text-sm">
          <SaveIcon />
          <span className="text-xs">save</span>
        </button>
        <Image
          src={session.user?.image ?? ''}
          alt="profile image"
          width={28}
          height={28}
          className="rounded-full ring-1 ring-amber-900"
        />
      </div>
    )
  }

  return (
    <Button variant="outline" onClick={() => signIn()}>
      log in
    </Button>
  )
}

export const SignOutButton = () => {
  const { data: session, status } = useSession()

  if (status === 'authenticated') {
    return (
      <Button variant="secondary" onClick={() => signOut()}>
        Sign out
      </Button>
    )
  }

  return <></>
}
