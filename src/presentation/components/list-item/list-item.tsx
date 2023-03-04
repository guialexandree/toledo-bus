import React from 'react'
import S from './list-item-styles.scss'

type ListItemProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
  className?: string
  title: string
  subtitle: string
  datetime: string
}

const ListItem: React.FC<ListItemProps> = ({
  title,
  datetime,
  subtitle,
  className
}) => {
  return (
    <li className={[S.listItemWrap, className].join(' ')}>
      <article className={S.titles}>
        <p className={S.title}>{title}</p>
        <span className={S.subtitle}>{subtitle}</span>
      </article>
      <span className={S.datetime}>{datetime}</span>
    </li>
  )
}

export default ListItem
