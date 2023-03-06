import React from 'react'
import S from './app-bar-styles.scss'

export type AppBarProps = {
  children: React.ReactNode
  className?: string
}

const AppBar: React.FC<AppBarProps> = ({ children, className }) => {
  return (
    <section className={[S.appBarWrap, className].join(' ')}>
      <section className={S.appBarContent}>
        {children}
      </section>
    </section>
  )
}

export default AppBar
