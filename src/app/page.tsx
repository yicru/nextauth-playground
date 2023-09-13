'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import { Button } from '@/app/_components/Button'

export default function Home() {
  const session = useSession()

  return (
    <div className={'p-4'}>
      <pre className={'bg-gray-100 px-3 py-2 rounded'}>
        <code>{JSON.stringify(session, null, 2)}</code>
      </pre>

      <div className={'mt-4 space-x-4'}>
        <Button onClick={() => signIn('github')}>Sign in with GitHub</Button>
        <Button onClick={() => signOut()}>Sign out</Button>
      </div>
    </div>
  )
}
