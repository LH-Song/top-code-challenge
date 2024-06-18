'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

export const SignInButton = () => {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <>...loading</>
  }

  if (status === 'authenticated') {
    return (
      <div className="flex items-center gap-2 rounded-3xl px-4 py-1 text-amber-500 ring-1 ring-amber-500 hover:bg-black hover:text-white">
        <button className="text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
            />
          </svg>
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
      login to save
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
