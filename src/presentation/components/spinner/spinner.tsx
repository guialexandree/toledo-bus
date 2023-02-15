import React from 'react'
import S from './spinner-styles.scss'

type SpinnerProps = React.HTMLAttributes<HTMLElement> & {
  className?: string
  isNegative?: boolean
}

const Spinner: React.FC<SpinnerProps> = ({ className, isNegative, ...props }) => {
  const negativeClass = isNegative ? S.negative : ''
  return (
    <div data-testid='spinner' {...props} className={[S.spinner, negativeClass, className].join(' ')}>
      <div></div><div></div><div></div><div></div>
    </div>
  )
}

export default Spinner
