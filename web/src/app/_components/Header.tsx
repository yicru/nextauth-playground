'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { Button } from '@/app/_components/Button'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const ROUTES = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
  },
  {
    name: 'Sign In',
    path: '/auth/signin',
  },
]

export const Header = () => {
  const pathname = usePathname()
  const { status } = useSession()

  return (
    <header className={'flex justify-between items-center p-2 pr-4 border-b'}>
      <ul className="flex space-x-0.5">
        {ROUTES.map((route) => (
          <li
            key={route.path}
            className={clsx(
              'text-sm font-medium hover:bg-gray-100 px-3 py-1.5 rounded',
              {
                'bg-gray-100': pathname === route.path,
              },
            )}
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
