import React from 'react'
import { CheckCircle } from 'phosphor-react'
import S from './select-item-styles.scss'

type SelectItemProps = {
  id: number
  label: string
  onSelect: (id: number) => void
  checked: boolean
  className?: string
}

export const SelectItem: React.FC<SelectItemProps> = ({
  id,
  label,
  checked,
  onSelect,
  className
}) => {
  const handleClick = (event: React.MouseEvent<HTMLLIElement>): void => {
    event.preventDefault()
    onSelect(id)
  }

  return (
    <li
      className={[S.selectItemWrap, className].join(' ')}
      onClick={handleClick}
      data-status={checked}
    >
      <span>{label}</span>
      {checked && <CheckCircle size={24} />}
    </li>
  )
}
