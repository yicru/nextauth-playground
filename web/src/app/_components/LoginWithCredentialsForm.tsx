'use client'

import clsx from 'clsx'
import { Button } from '@/app/_components/Button'
import { FormField } from '@/app/_components/FormField'
import { FormEvent } from 'react'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'

type Props = {
  className?: string
}

export const LoginWithCredentialsForm = ({ className }: Props) => {
  const searchParams = useSearchParams()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget

    await signIn('credentials', {
      email: form.email.value,
      password: form.password.value,
      redirect: true,
      callbackUrl: searchParams.get('callbackUrl') || '/',
    })
  }

  return (
    <form className={clsx('space-y-6', className)} onSubmit={handleSubmit}>
      <FormField
        label={'email'}
        input={{
          id: 'email',
          name: 'email',
          type: 'email',
          required: true,
        }}
      />

      <FormField
        label={'password'}
        input={{
          id: 'password',
          name: 'password',
          type: 'password',
          required: true,
        }}
      />

      <Button className={'w-full'} type="submit">
        Sign in with Credentials
      </Button>
    </form>
  )
}
