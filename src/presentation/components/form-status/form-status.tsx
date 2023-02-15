import React from 'react'
import S from './form-status-styles.scss'
import { Spinner } from '@/presentation/components'

type Props = {
  state: any
}

const FormStatus: React.FC<Props> = ({
  state
}: Props) => {
  const { isLoading, mainError } = state
  return (
    <section data-testid="error-wrap" className={S.errorWrap}>
      { isLoading && <Spinner className={S.spinner} /> }
      { mainError && <span data-testid="main-error" className={S.error}>{mainError}</span> }
    </section>
  )
}

export default FormStatus
