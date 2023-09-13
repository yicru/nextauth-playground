'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { Button } from '@/app/_components/Button'

const ROUTES = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
  },
]

export const Header = () => {
  const { status } = useSession()

  return (
    <header className={'flex justify-between items-center p-2 pr-4 border-b'}>
      <ul className="flex">
        {ROUTES.map((route) => (
          <li
            key={route.path}
            className={
              'text-sm font-medium hover:bg-gray-100 px-3 py-1.5 rounded'
            }
          >
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
      <div>
        {status === 'authenticated' && (
          <Button onClick={() => signOut()}>Sign out</Button>
        )}
      </div>
    </header>
  )
}
