import React from 'react'
import S from './button-styles.scss'
import { IconProps } from 'phosphor-react'

export type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  label: string
  icon?: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>
  size?: number
  className?: string
}

const Button: React.FC<ButtonProps> = ({
  label,
  size = 26,
  icon: Icon,
  className,
  ...props
}) => {
  return (
    <button
      type="button"
      className={[S.buttonWrap, className].join(' ')}
      {...props}
    >
      {Icon && <Icon size={size} />}
      {label}
    </button>
  )
}

export default Button
