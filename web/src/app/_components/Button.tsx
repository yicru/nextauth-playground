import { ComponentPropsWithoutRef } from 'react'
import clsx from 'clsx'

type Props = ComponentPropsWithoutRef<'button'>

export const Button = (props: Props) => {
  return (
    <button
      className={clsx(
        'bg-black py-1.5 px-3 rounded text-white text-sm font-medium',
        props.className,
      )}
      {...props}
    />
  )
}
