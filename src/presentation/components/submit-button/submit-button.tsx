import React from 'react'
import S from './submit-button-styles.scss'

type SubmitButtonProps = {
  text: string
}

const SubmitButton: React.FC<SubmitButtonProps> = (props) => {
  return (
    <button className={S.submit} type="submit">
      {props.text}
    </button>
  )
}

export default SubmitButton
