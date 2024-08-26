import React, { memo } from 'react'
import { useRecoilState } from 'recoil'
import { dayFilterLineBusState } from '../atoms'
import { RadioButtonBase } from '@/presentation/components'

type Props = {
  name: 'today' | 'tomorrow' | 'period'
  label: string
  icon?: React.ReactNode
}

const RadioButton: React.FC<Props> = ({
  name,
  label,
  icon
}) => {
  const [dayFilterLineBus, setDayFilterLineBus] = useRecoilState(dayFilterLineBusState)

  const handleClick = (): void => {
    setDayFilterLineBus(name)
  }

  return (
    <RadioButtonBase
      name={name}
      label={label}
      group='dayFilter'
      icon={icon}
      checked={dayFilterLineBus === name}
      onClick={handleClick}
    />
  )
}

export default memo(RadioButton)
