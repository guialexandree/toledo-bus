import React from 'react'
import S from './splash-styles.scss'
import { Icon, IconName, Logo } from '@/presentation/components'

const Splash: React.FC = () => {
  return (
    <section className={S.splashWrap}>
      <Logo />
      <Icon iconName={IconName.busLogin} />
    </section>
  )
}

export default Splash