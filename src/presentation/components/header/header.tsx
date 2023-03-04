import React from 'react'
import { Logo, Icon, IconName, Avatar } from '@/presentation/components'
import S from './header-styles.scss'

type HeaderProps = React.HTMLAttributes<HTMLElement> & {
  urlImage?: string
}

const mockImagemAvatar = 'https://user-images.githubusercontent.com/30730216/222916476-e4a686c6-55c7-4194-b739-6b6e552b133b.png'

const Header: React.FC<HeaderProps> = ({ urlImage = mockImagemAvatar, ...props }) => {
  return (
    <header {...props}>
      <section className={S.iconWrap}>
        <Icon height={50} className={S.icon} iconName={IconName.busLogin} />
      </section>
      <section className={S.logoWrap}>
        <Logo height={50} />
      </section>
      <Avatar
        size={50}
        image={urlImage}
      />
    </header>
  )
}

export default Header
