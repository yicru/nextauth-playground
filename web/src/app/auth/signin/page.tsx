'use client'

import { Button } from '@/app/_components/Button'
import { signIn, useSession } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'

export default function SignInPage() {
  const searchParams = useSearchParams()
  const { status } = useSession()

  const onSignIn = async (provider: string) => {
    await signIn(provider, {
      redirect: true,
      callbackUrl: searchParams.get('callbackUrl') || '/',
    })
  }

  return (
    <div className={'p-4'}>
      {status === 'authenticated' && (
        <div className={'mb-4'}>
          <p>You are authenticated</p>
        </div>
      )}
      <Button onClick={() => onSignIn('github')}>Sign in with GitHub</Button>
    </div>
  )
}
