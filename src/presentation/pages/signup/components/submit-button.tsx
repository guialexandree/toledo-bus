import React from 'react'
import { useRecoilValue } from 'recoil'
import { signUpState } from './atoms'
import { SubmitButtonBase } from '@/presentation/components'

type Props = {
  text
}

const SubmitButton: React.FC<Props> = ({
  text
}) => {
  const state = useRecoilValue(signUpState)

  return (
    <SubmitButtonBase text={text} state={state} />
  )
}

export default SubmitButton
