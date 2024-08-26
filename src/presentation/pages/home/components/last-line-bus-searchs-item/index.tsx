import React, { memo } from 'react'
import { LineBusDirection } from '@/domain/models'
import S from './styles.scss'

type LastLineBusSearchsItemProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
  title: string
  direction: LineBusDirection
  date: string
}

const LastLineBusSearchsItem: React.FC<LastLineBusSearchsItemProps> = (props) => {
  const originLabel = props.direction === LineBusDirection.BAIRRO
    ? 'Bairro'
    : 'Terminal'
  const directionLabel = props.direction === LineBusDirection.BAIRRO
    ? 'Terminal'
    : 'Bairro'

  return (
    <li className={S.containerWrap}>
      <article className={S.titles}>
        <p className={S.title}>{props.title}</p>
        <span className={S.subtitle}>
          Saída do {originLabel}{' '}
          sentido {directionLabel}
        </span>
      </article>
      <span className={S.datetime}>{props.date}</span>
    </li>
  )
}

export default memo(LastLineBusSearchsItem)
