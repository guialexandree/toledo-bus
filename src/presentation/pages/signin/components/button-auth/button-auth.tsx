import React from 'react'
import S from './button-auth-styles.scss'
import { IconProps } from 'phosphor-react/dist/lib'

type ButtonAuthProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  label: string
  icon?: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>
}

const ButtonAuth: React.FC<ButtonAuthProps> = ({
  label,
  icon: Icon,
  ...props
}) => {
  return (
    <button
      type="button"
      className={S.buttonAuthWrap}
      {...props}
    >
      {Icon && <Icon size={26} />}
      {label}
    </button>
  )
}

export default ButtonAuth
