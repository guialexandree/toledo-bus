import React from 'react'
import { CaretDown, X } from 'phosphor-react'
import Button from '../button/button'
import S from './select-trigger-styles.scss'

type SelectTriggerProps = {
  open: boolean
  setOpen: (isOpen: boolean) => void
  setCurrent: (current: number) => void
  current: number
  label: string
}

export const SelectTrigger: React.FC<SelectTriggerProps> = ({
  open,
  setOpen,
  setCurrent,
  current,
  label
}) => {
  const hasCurrent = current > -1

  const handleToggleOpen = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault()
    setOpen(!open)
  }

  return (
    <section data-status={open} className={S.selectTriggerWrap}>
      <Button
        onClick={handleToggleOpen}
        className={S.trigger}
        label={label}
        size={18}
      />
      {open || hasCurrent
        ? <X
          color='red'
          onClick={() => {
            open
              ? setOpen(false)
              : setCurrent(-1)
          }}
        />
        : <CaretDown />
      }
    </section>
  )
}
