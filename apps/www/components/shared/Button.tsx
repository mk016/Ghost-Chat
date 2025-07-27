import { Button as Button2 } from '@echo/ui/components/ui/button'
import { LoadingSpinner } from '@echo/ui/icons/spinner'

interface ButtonProps {
  children: any
  isLoading?: boolean
  disabled?: boolean
  className?: string
  [key: string]: any
}

export const Button = ({
  children,
  isLoading = false,
  disabled,
  className = '',
  ...props
}: ButtonProps) => {
  return (
    <Button2
      {...props}
      disabled={isLoading || disabled}
      className={`${className} hover:ring-2 hover:ring-gray-200 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-800 ${
        isLoading
          ? 'cursor-not-allowed border border-gray-300 text-gray-400 outline-none'
          : ''
      }`}
    >
      {isLoading ? <LoadingSpinner /> : children}
    </Button2>
  )
}
