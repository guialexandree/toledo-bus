import React from 'react'
import { useRecoilValue } from 'recoil'
import { homeState } from './atoms'
import { SubmitButtonBase } from '@/presentation/components'

type Props = {
  text
}

const SubmitButton: React.FC<Props> = ({
  text
}) => {
  const state = useRecoilValue(homeState)

  return (
    <fieldset>
      <SubmitButtonBase text={text} state={state} />
    </fieldset>
  )
}

export default SubmitButton
