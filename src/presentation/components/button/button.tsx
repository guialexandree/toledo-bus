import React from 'react'
import S from './button-styles.scss'
import { IconProps } from 'phosphor-react'

export type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  label: string
  icon?: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>
  size?: number
}

const Button: React.FC<ButtonProps> = ({
  label,
  size = 26,
  icon: Icon,
  ...props
}) => {
  return (
    <button
      type="button"
      className={S.buttonWrap}
      {...props}
    >
      {Icon && <Icon size={size} />}
      {label}
    </button>
  )
}

export default Button
