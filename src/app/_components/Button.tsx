import { ComponentPropsWithoutRef } from 'react'

type Props = ComponentPropsWithoutRef<'button'>

export const Button = (props: Props) => {
  return (
    <button
      className={'bg-black py-1.5 px-3 rounded text-white text-sm font-medium'}
      {...props}
    />
  )
}
