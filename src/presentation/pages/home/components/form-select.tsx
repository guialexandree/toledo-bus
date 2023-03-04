import React from 'react'
import { useRecoilState } from 'recoil'
import { homeState } from './atoms'
import { SelectBase } from '@/presentation/components'

type Props = {
  label: string
  icon?: React.ReactNode
}

const FormSelect: React.FC<Props> = ({
  label,
  icon
}) => {
  const [state, setState] = useRecoilState(homeState)

  return (
    <fieldset>
      <SelectBase.Select
        name='current'
        state={state}
        setState={setState}
        items={state.lines}
        label='escolha a linha de ônibus'
      />
    </fieldset>
  )
}

export default FormSelect
