import React, { memo } from 'react'
import { CheckCircle } from 'phosphor-react'
import S from './styles.scss'

type LineBusSelectorItemProps = {
  id: number
  text: string
  className?: string
  checked?: boolean
  onClick: () => void
}

const LineBusSelectorItem: React.FC<LineBusSelectorItemProps> = ({
  id,
  text,
  className,
  checked,
  onClick
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    onClick()
  }

  return (
    <button
      key={id}
      className={[S.selectItemWrap, className].join(' ')}
      onClick={handleClick}
      data-status={checked}
    >
      <span>{text}</span>
      {checked && <CheckCircle size={24} />}
    </button>
  )
}

export default memo(LineBusSelectorItem)
