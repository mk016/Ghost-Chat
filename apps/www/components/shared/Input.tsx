import { cn } from '@echo/utils'
import { AlertCircle, Eye, EyeClosed } from 'lucide-react'
import React, { useCallback, useState } from 'react'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const toggleIsPasswordVisible = useCallback(
      () => setIsPasswordVisible(!isPasswordVisible),
      [isPasswordVisible, setIsPasswordVisible]
    )

    return (
      <div className="w-full">
        <div className="relative flex w-full">
          <input
            type={isPasswordVisible ? 'text' : type}
            className={cn(
              'w-full flex-1 rounded-md border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm',
              props.error &&
                'border-red-500 focus:border-red-500 focus:ring-red-500',
              className
            )}
            ref={ref}
            {...props}
          />

          <div className="group">
            {props.error && (
              <div className="pointer-events-none absolute inset-y-0 right-0 flex flex-none items-center px-2.5">
                <AlertCircle
                  className={cn(
                    'size-5 text-white',
                    type === 'password' &&
                      'transition-opacity group-hover:opacity-0'
                  )}
                  fill="#ef4444"
                />
              </div>
            )}
            {type === 'password' && (
              <button
                className={cn(
                  'absolute inset-y-0 right-0 flex items-center px-3',
                  props.error &&
                    'opacity-0 transition-opacity group-hover:opacity-100'
                )}
                type="button"
                onClick={() => toggleIsPasswordVisible()}
                aria-label={
                  isPasswordVisible ? 'Hide password' : 'Show Password'
                }
              >
                {isPasswordVisible ? (
                  <EyeClosed
                    className="size-4 flex-none text-gray-500 transition hover:text-gray-700"
                    aria-hidden
                  />
                ) : (
                  <Eye
                    className="size-4 flex-none text-gray-500 transition hover:text-gray-700"
                    aria-hidden
                  />
                )}
              </button>
            )}
          </div>
        </div>

        {props.error && (
          <span
            className="mt-2 block w-full text-sm text-red-500"
            role="alert"
            aria-live="assertive"
          >
            {props.error}
          </span>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
