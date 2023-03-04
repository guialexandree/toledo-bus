import React from 'react'
import S from './list-styles.scss'

type ListProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
  className?: string
  title: string
}

const List: React.FC<ListProps> = ({
  title,
  className,
  children
}) => {
  return (
    <section className={[S.listWrap, className].join(' ')}>
      <h2>{title}</h2>
      <ul>
        {children}
      </ul>
    </section>
  )
}

export default List
