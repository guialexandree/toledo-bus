import React, { useRef, useState } from 'react'
import { Button, Icon, IconName, Logo, RadioButton } from '@/presentation/components'
import S from './home-styles.scss'

type HomeProps = { }

type DayFilter = 'today' | 'tomorrow' | 'period'

const Home: React.FC<HomeProps> = () => {
  const [dayFilter, setDayFilter] = useState<DayFilter>('today')

  const handleDayFilter = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault()
    setDayFilter(event.target.id as DayFilter)
  }

  return (
    <section className={S.homeWrap}>
      <section className={S.appBar}>
        <header>
          <Icon className={S.iconWrap} iconName={IconName.busLogin} />
          <Logo />
          <section className={S.userWrap}></section>
        </header>
        <form className={S.filtersWrap} >
          <fieldset>
            <select name="filters" id="filters">
              <option value="*">escolha a linha de ônibus</option>
            </select>
          </fieldset>

          <fieldset className={S.dayFilters}>
            <RadioButton
              id='today'
              label='hoje'
              group='day'
              checked={dayFilter === 'today'}
              onChange={handleDayFilter}
            />
            <RadioButton
              id='tomorrow'
              label='amanhã'
              group='day'
              checked={dayFilter === 'tomorrow'}
              onChange={handleDayFilter}
            />
            <RadioButton
              id='period'
              label='data'
              group='day'
              icon={<Icon iconName={IconName.calendar} />}
              checked={dayFilter === 'period'}
              onChange={handleDayFilter}
            />
          </fieldset>
          <Button type="submit" className={S.submit} label="visualizar horários" />
        </form>
      </section>

      <section className={S.mapWrap}>

      </section>
    </section>
  )
}

export default Home
