import React, { memo } from 'react'
import S from './subtitle-styles.scss'

type SubtitleProps = {
  text: string
}

const Subtitle: React.FC<SubtitleProps> = ({ text }) => {
  return (
    <h2 className={S.subtitle}>{text}</h2>
  )
}

export default memo(Subtitle)
