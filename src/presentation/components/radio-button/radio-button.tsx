import React from 'react'
import S from './radio-button-styles.scss'

type RadioButtonProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  name: string
  label: string
  checked: boolean
  group: string
  icon?: React.ReactNode
  setState: any
}

const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  label,
  checked = false,
  group,
  icon,
  setState,
  ...props
}) => {
  const handleChecked = (event: React.MouseEvent<HTMLInputElement>): void => {
    event.preventDefault()
    setState(old => ({ ...old, [group]: name }))
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

export default RadioButton
