import React from 'react'
import { CaretDown, X } from 'phosphor-react'
import Button from '../button/button'
import S from './select-trigger-styles.scss'

type SelectTriggerProps = {
  name: string
  open: boolean
  setOpen: (isOpen: boolean) => void
  label: string
  state: any
  setState: any
}

export const SelectTrigger: React.FC<SelectTriggerProps> = ({
  name,
  open,
  setOpen,
  label,
  state,
  setState
}) => {
  const hasCurrent = state.current > -1

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
              : setState(old => ({ ...old, [name]: -1 }))
          }}
        />
        : <CaretDown />
      }
    </section>
  )
}
