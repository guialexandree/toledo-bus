import React, { memo } from 'react'
import { LineBusModel } from '@/domain/models'
import { LineBusSelectorItem } from '@/presentation/pages/home/components'
import S from './styles.scss'

type LineBusSelectorProps = {
  list: LineBusModel[]
  selectedLineBus: LineBusModel
  onSelect: (LineBusModel) => void
  isOpen: boolean
}

const LineBusSelector: React.FC<LineBusSelectorProps> = (props) => {
  return (
    <ul className={S.contentWrap} data-status={props.isOpen}>
      {props.list.map(line =>
        <LineBusSelectorItem
          key={line.id}
          id={line.id}
          text={line.name}
          checked={line.id === props.selectedLineBus?.id}
          onClick={() => { props.onSelect(line) }}
        />
      )}
    </ul>
  )
}

export default memo(LineBusSelector)
