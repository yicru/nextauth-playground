import { ComponentPropsWithoutRef } from 'react'

type Props = {
  label?: string
  input: ComponentPropsWithoutRef<'input'>
}

export const FormField = ({ label, input }: Props) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={input.id}
          className={'block text-sm font-medium leading-6 text-gray-900 mb-2'}
        >
          {label}
        </label>
      )}

      <input
        className={
          'block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
        }
        {...input}
      />
    </div>
  )
}
