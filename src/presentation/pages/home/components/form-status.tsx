import React from 'react'
import { useRecoilValue } from 'recoil'
import { homeState } from './atoms'
import { FormStatusBase } from '@/presentation/components'

const FormStatus: React.FC = () => {
  const state = useRecoilValue(homeState)

  return (
    <FormStatusBase state={state} />
  )
}

export default FormStatus
