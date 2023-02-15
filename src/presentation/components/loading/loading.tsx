import React from 'react'
import { Spinner } from '@/presentation/components'
import S from './loading-styles.scss'

const Loading: React.FC = () => {
  return (
    <section data-testid="loading" className={S.loadingWrap}>
      <section className={S.loading}>
        <span>Aguarde...</span>
        <Spinner isNegative />
      </section>
    </section>
  )
}

export default Loading
