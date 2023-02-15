import React, { memo } from 'react'
import S from './footer-styles.scss'

type FooterProps = { }

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={S.footer}></footer>
  )
}

export default memo(Footer)
