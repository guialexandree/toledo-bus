import React, { memo } from 'react'
import S from './radio-button-styles.scss'

type RadioButtonProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  name: string
  label: string
  checked: boolean
  group: string
  icon?: React.ReactNode
  onClick: () => void
}

const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  label,
  checked = false,
  group,
  icon,
  onClick,
  ...props
}) => {
  const handleChecked = (event: React.MouseEvent<HTMLInputElement>): void => {
    event.preventDefault()
    onClick()
  }

  return (
    <section onClick={handleChecked} className={S.radioButtonWrap}>
      <label htmlFor={name} data-status={checked}>
        {icon}
        {label}
        <input
          type="radio"
          id={name}
          name={group}
          {...props}
        />
      </label>
    </section>
  )
}

export default memo(RadioButton)
