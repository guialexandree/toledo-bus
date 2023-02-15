import React from 'react'
import S from './calendar-styles.scss'

type Props = {
  className?: string
  date: Date
}

const Calendar: React.FC<Props> = ({ date, className }) => {
  return (
    <time className={[S.calendarWrap, className].join(' ')}>
      <span data-testid='day' className={S.day}>
        {date.getDate().toString().padStart(2, '0')}
      </span>
      <span data-testid='month' className={S.month}>
        {date.toLocaleString('pt-BR', { month: 'short' }).replace('.', '')}
      </span>
      <span data-testid='year' className={S.year}>
        {date.getFullYear()}
      </span>
    </time>
  )
}

export default Calendar
