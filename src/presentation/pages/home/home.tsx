import React, { useEffect, useState } from 'react'
import { Button, Header, RadioButton, Select, currentAccountState } from '@/presentation/components'
import { Calendar } from 'phosphor-react'
import S from './home-styles.scss'
import { useRecoilState } from 'recoil'
import { useMediaQuery } from '@/presentation/hooks'

type HomeProps = { }

type DayFilter = 'today' | 'tomorrow' | 'period'

const lines = [
  '006 - Novo Sarandi',
  '006 - Vila Nova',
  '006 - Novo Sobradinho',
  '007 - Ouro Preto',
  '007 - Boa Vista',
  '010 - Bom Principio',
  '010 - Gramado',
  '010 - São Luiz do Oeste',
  '011 - Dois Irmãos',
  '019 - Biopark',
  '020 - Santa Clara IV',
  '021 - Santa Clara II',
  '022 - JD. Concórdia',
  '023 - JD. Coopagro',
  '024 - JD. São Francisco',
  '025 - PUC',
  '026 - Operária',
  '027 - JD. Porto Alegre',
  '028 - Vila Industrial',
  '030 - Colonia',
  '031 - Pioneira',
  '032 - Europa Via Centro',
  '034 - Panorama',
  '048 - Metropolitano Toledo',
  '291 - Europa Via Concórdia'
]

const Home: React.FC<HomeProps> = () => {
  const [currentAccount, setCurrentAccount] = useRecoilState(currentAccountState)
  const [dayFilter, setDayFilter] = useState<DayFilter>('today')
  const { isMobile } = useMediaQuery()

  const handleDayFilter = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault()
    setDayFilter(event.target.id as DayFilter)
  }

  useEffect(() => {
    const account = currentAccount.getCurrentAccount()
    console.log('isMobile', isMobile())
  })

  return (
    <section className={S.homeWrap}>
      <section className={S.appBar}>
        <Header />
        <form className={S.filtersWrap} >
          <fieldset>
            <Select.Select
              items={lines}
              label='escolha a linha de ônibus'
            />
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
              icon={<Calendar size={16} />}
              checked={dayFilter === 'period'}
              onChange={handleDayFilter}
            />
          </fieldset>
          {/* <DataPicker /> */}
          <Button
            type="submit"
            className={S.submit}
            label="visualizar horários"
          />
        </form>
        <section className={S.lastSearchsWrap}>
          <h2>últimas buscas</h2>
          <ul className={S.listSearchs}>
            <li>
              <article className={S.search}>
                <p>Colonia</p>
                <span>sentido centro</span>
              </article>
              <span className={S.datetime}>hoje</span>
            </li>
            <li>
              <article className={S.search}>
                <p>Jardim Europa</p>
                <span>sentido centro</span>
              </article>
              <span className={S.datetime}>ontem</span>
            </li>
            <li>
              <article className={S.search}>
                <p>São Francisco via Parizotto</p>
                <span>sentido bairro</span>
              </article>
              <span className={S.datetime}>4 dias</span>
            </li>
          </ul>
        </section>
      </section>
      <section className={S.mapWrap}>
      </section>
    </section>
  )
}

export default Home
