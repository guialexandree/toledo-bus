import React, { useRef, useState } from 'react'
import { SelectItem } from '@/presentation/components/select-item/select-item'
import { SelectTrigger } from '@/presentation/components/select-trigger/select-trigger'
import S from './select-styles.scss'

type SelectProps = {
  name: string
  items: string[]
  label?: string
  state: any
  setState: any
}

const Select: React.FC<SelectProps> = ({
  name,
  label,
  items,
  state,
  setState
}) => {
  const wrapRef = useRef(null)
  const [open, setOpen] = useState(false)

  const getLabel = (): string => {
    return state.current > -1
      ? items[state.current]
      : (label || 'selecione uma opção')
  }

  const handleSelect = (id: number): void => {
    setState(old => ({ ...old, [name]: id }))
    setOpen(false)
  }

  return (
    <section ref={wrapRef} className={S.selectWrap}>
      <SelectTrigger
        name={name}
        state={state}
        setState={setState}
        label={getLabel()}
        open={open}
        setOpen={setOpen}
      />
      <ul className={S.portalWrap} data-status={open}>
        {items.length && items.map((item, index) =>
          <SelectItem
            id={index}
            key={item}
            label={item}
            checked={index === state.current}
            onSelect={handleSelect}
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
