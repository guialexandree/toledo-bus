import React from 'react'
import { useRecoilState } from 'recoil'
import { homeState } from './atoms'
import { RadioButtonBase } from '@/presentation/components'

type Props = {
  name: string
  label: string
  icon?: React.ReactNode
}

const RadioButton: React.FC<Props> = ({
  name,
  label,
  icon
}) => {
  const [state, setState] = useRecoilState(homeState)

  return (
    <RadioButtonBase
      name={name}
      label={label}
      group='dayFilter'
      icon={icon}
      checked={state.dayFilter === name}
      setState={setState}
    />
  )
}

export default RadioButton
