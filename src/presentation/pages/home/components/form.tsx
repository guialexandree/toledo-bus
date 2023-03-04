import React from 'react'
import { FormBase } from '@/presentation/components'
import { Calendar } from 'phosphor-react'
import * as C from './'

type Props = {
  className: string
}

const FormLines: React.FC<Props> = ({ className }) => {
  return (
    <FormBase className={className} >
      <C.FormSelect label='escolha a linha do ônibus' />
      <fieldset data-list>
        <C.RadioButton name='today' label='hoje' />
        <C.RadioButton name='tomorrow' label='amanhã' />
        <C.RadioButton name='period' label='data' icon={<Calendar size={16} />} />
      </fieldset>
      <C.SubmitButton text='visualizar horários' />
      <C.FormStatus />
    </FormBase>
  )
}

export default FormLines
