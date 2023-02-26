import React from 'react'
import S from './radio-button-styles.scss'

type RadioButtonProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  id: string
  label: string
  checked?: boolean
  group?: string
  icon?: React.ReactNode
}

const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  label,
  checked = false,
  group,
  icon,
  ...props
}) => {
  return (
    <section className={S.radioButtonWrap}>
      <label htmlFor={id} data-status={checked}>
        {icon}
        {label}
        <input
          type="radio"
          id={id}
          name={group || id}
          {...props}
        />
      </label>
    </section>
  )
}

export default RadioButton
