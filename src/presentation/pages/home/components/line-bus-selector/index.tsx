import React, { useRef } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { SelectLineBusTrigger, LineBusSelectorList, linesBusState, isOpenSelectLineBusState, selectedLineBusState } from '@/presentation/pages/home/components'
import S from './styles.scss'

const LineBusSelector: React.FC = () => {
  const wrapRef = useRef(null)
  const linesBus = useRecoilValue(linesBusState)
  const [isOpen, setOpen] = useRecoilState(isOpenSelectLineBusState)
  const [selectedLineBus, setSelectedLineBus] = useRecoilState(selectedLineBusState)

  return (
    <section ref={wrapRef} className={S.containerWrap}>
      <SelectLineBusTrigger
        selectedLineBus={selectedLineBus}
        isOpen={isOpen}
        setOpen={open => { setOpen(open) }}
        onUnselected={() => { setSelectedLineBus(null) }}
      />

      <LineBusSelectorList
        list={linesBus}
        isOpen={isOpen}
        selectedLineBus={selectedLineBus}
        onSelect={lineBusSelected => {
          setSelectedLineBus(lineBusSelected)
          setOpen(false)
        }}
      />
    </section>
  )
}

export default LineBusSelector
