'use client'

import { useSession } from 'next-auth/react'

export default function DashboardPage() {
  const { status } = useSession({
    required: true,
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
