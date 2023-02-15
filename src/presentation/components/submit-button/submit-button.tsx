import React from 'react'
import S from './submit-button-styles.scss'

type SubmitButtonProps = {
  text: string
  state: any
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  text,
  state
}) => {
  return (
    <button data-testid="submit" disabled={state.isFormInvalid} className={S.submit} type="submit">{text}</button>
  )
}

export default SubmitButton
