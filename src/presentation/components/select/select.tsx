import React, { useRef, useState } from 'react'
import { CaretDown, X } from 'phosphor-react'
import { SelectItem } from '@/presentation/components/select-item/select-item'
import { SelectTrigger } from '@/presentation/components/select-trigger/select-trigger'
import S from './select-styles.scss'
import Button from '../button/button'

type SelectProps = {
  label: string
  items: string[]
}

const Select: React.FC<SelectProps> = ({
  label,
  items
}) => {
  const wrapRef = useRef(null)
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState<number>(-1)

  const handleToggleOpen = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault()
    setOpen(!open)
  }

  return (
    <section ref={wrapRef} className={S.selectWrap}>
      <SelectTrigger
        current={current}
        label={current > -1 ? items[current] : 'escolha a linha do ônibus'}
        setCurrent={setCurrent}
        open={open}
        setOpen={setOpen}
      />
      <ul className={S.portalWrap} data-status={open}>
        {items.length && items.map((item, index) =>
          <SelectItem
            id={index}
            key={item}
            label={item}
            checked={index === current}
            onSelect={(id: number) => {
              setCurrent(id)
              setOpen(false)
            }}
          />
        )}
      </ul>
    </section>
  )
}

export {
  Select,
  SelectItem
}
