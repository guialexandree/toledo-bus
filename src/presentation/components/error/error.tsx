import React from 'react'
import S from './error-styles.scss'

type Props = {
  error: string
  reload: () => void
}

const Error: React.FC<Props> = ({ error, reload }) => {
  return (
    <section className={S.errorWrap}>
      <span data-testid='error'>{error}</span>
      <button data-testid='reload' onClick={reload}>Tentar novamente</button>
    </section>
  )
}

export default Error
