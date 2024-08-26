import React from 'react'
import { CaretDown, X } from 'phosphor-react'
import { useRecoilState } from 'recoil'
import { ButtonBase } from '@/presentation/components'
import { isOpenSelectLineBusState, selectedLineBusState } from '@/presentation/pages/home/components'
import S from './styles.scss'

const LineBusSeletorTrigger: React.FC = () => {
  const [selectedLineBus, setSelectedLineBus] = useRecoilState(selectedLineBusState)
  const [isOpen, setOpen] = useRecoilState(isOpenSelectLineBusState)
  const hasCurrent = selectedLineBus?.id > 0

  const handleClose = (): void => {
    isOpen
      ? setOpen(false)
      : setSelectedLineBus(null)
  }

  return (
    <section data-open={open} className={S.selectTriggerWrap}>
      <ButtonBase
        onClick={() => { setOpen(currentState => !currentState) }}
        className={S.trigger}
        label={selectedLineBus?.name || 'escolha a linha do ônibus'}
        size={18}
      />
      {isOpen || hasCurrent
        ? <X
          color='red'
          size={20}
          onClick={handleClose}
        />
        : <CaretDown size={20} />
      }
    </section>
  )
}

export default LineBusSeletorTrigger
