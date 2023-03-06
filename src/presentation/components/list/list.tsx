import React from 'react'
import { Subtitle } from '@/presentation/components'
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
      <Subtitle text={title} />
      <ul>
        {children}
      </ul>
    </section>
  )
}

export default List
