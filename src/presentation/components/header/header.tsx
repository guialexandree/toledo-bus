import React, { memo } from 'react'
import { useRecoilValue } from 'recoil'
import S from './header-styles.scss'
import { currentAccountState, Logo } from '@/presentation/components'
import { useLogout } from '@/presentation/hooks'

const Header: React.FC = () => {
  const logout = useLogout()
  const { getCurrentAccount } = useRecoilValue(currentAccountState)

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
    event.preventDefault()
    logout()
  }

  return (
    <header className={S.headerWrap}>
      <section className={S.headerContent}>
        <Logo />
        <section className={S.logoutWrap}>
          <span data-testid="username">{getCurrentAccount().name}</span>
          <a data-testid="logout" href="#" onClick={handleClick}>Sair</a>
        </section>
      </section>
    </header>
  )
}

export default memo(Header)
