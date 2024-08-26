import React, { memo } from 'react'
import { useRecoilValue } from 'recoil'
import { Subtitle } from '@/presentation/components'
import { LastLineBusSearchsItem, linesBusSearchsState } from '@/presentation/pages/home/components'
import { dateAdapterState } from '@/presentation/components/atoms'
import S from './styles.scss'

type LastLineBusSearchsProps = {
  isLoading: boolean
}

const LastLineBusSearchs: React.FC<LastLineBusSearchsProps> = (props) => {
  const linesBusSearchs = useRecoilValue(linesBusSearchsState)
  const dateAdapter = useRecoilValue(dateAdapterState)

  return (
    !props.isLoading && linesBusSearchs.length &&
    <section className={S.lastSearchsWrap}>
      <section className={[S.listWrap, S.listContent].join(' ')}>
        <Subtitle text='últimas buscas' />
        <ul>
          {linesBusSearchs.map(line => (
            <LastLineBusSearchsItem
              key={line.id}
              title={line.line}
              direction={line.dir}
              date={dateAdapter.formatRecent(line.timestamp)}
            />
          ))}
        </ul>
      </section>
    </section>
  )
}

export default memo(LastLineBusSearchs)
