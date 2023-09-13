'use client'

import { Button } from '@/app/_components/Button'
import { signIn, useSession } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { LoginWithCredentialsForm } from '@/app/_components/LoginWithCredentialsForm'

export default function SignInPage() {
  const searchParams = useSearchParams()
  const { data: session, status } = useSession()

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
          <p>Hello, {session?.user?.name}.</p>
        </div>
      )}
      <div className={'max-w-lg'}>
        <LoginWithCredentialsForm />
        <hr className={'my-4'} />
        <Button className={'w-full'} onClick={() => onSignIn('github')}>
          Sign in with GitHub
        </Button>
      </div>
    </div>
  )
}
