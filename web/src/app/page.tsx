'use client'

import { useSession } from 'next-auth/react'

export default function Home() {
  const session = useSession()

  return (
    <div className={'p-4'}>
      <pre className={'bg-gray-100 px-3 py-2 rounded'}>
        <code>{JSON.stringify(session, null, 2)}</code>
      </pre>
    </div>
  )
}
