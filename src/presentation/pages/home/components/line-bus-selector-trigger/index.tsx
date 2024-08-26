import React, { memo } from 'react'
import { CaretDown, X } from 'phosphor-react'
import { LineBusModel } from '@/domain/models'
import { ButtonBase } from '@/presentation/components'
import S from './styles.scss'

type LineBusSeletorTriggerProps = {
  selectedLineBus: LineBusModel
  onUnselected: () => void
  isOpen: boolean
  setOpen: (open: boolean) => void
}

const LineBusSeletorTrigger: React.FC<LineBusSeletorTriggerProps> = (props) => {
  const hasCurrent = props.selectedLineBus?.id > 0

  const handleClose = (): void => {
    props.isOpen
      ? props.setOpen(false)
      : props.onUnselected()
  }

  return (
    <section data-open={open} className={S.selectTriggerWrap}>
      <ButtonBase
        onClick={() => { props.setOpen(!props.isOpen) }}
        className={S.trigger}
        label={props.selectedLineBus?.name || 'escolha a linha do ônibus'}
        size={18}
      />
      {props.isOpen || hasCurrent
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

export default memo(LineBusSeletorTrigger)
