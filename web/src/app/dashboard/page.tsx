'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const router = useRouter()

  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.replace('/')
    },
  })

  if (status === 'loading') {
    return (
      <div className={'p-4'}>
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className={'p-4'}>
      <p>Dashboard Page</p>
    </div>
  )
}
