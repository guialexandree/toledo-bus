import React from 'react'
import { useRecoilValue } from 'recoil'
import { homeState } from './atoms'
import { ListBase, ListItemBase } from '@/presentation/components'

const List: React.FC = () => {
  const state = useRecoilValue(homeState)

  return (
    <ListBase title='últimas buscas'>
      {state.lastSearchs?.map((search, index) => (
        <ListItemBase
          key={`search-${index}`}
          title={search.title}
          subtitle={search.subtitle}
          datetime={search.datetime}
        />
      ))}
    </ListBase>
  )
}

export default List
