import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { AppBar, FormBase, Header, currentAccountState } from '@/presentation/components'
import { FormSelect, FormStatus, List, RadioButton, SubmitButton } from './components'
import { Calendar } from 'phosphor-react'
import S from './home-styles.scss'

type HomeProps = { }

const Home: React.FC<HomeProps> = () => {
  const [currentAccount, setCurrentAccount] = useRecoilState(currentAccountState)

  useEffect(() => {
    const account = currentAccount.getCurrentAccount()
  })

  return (
    <section className={S.homeWrap}>
      <AppBar className={S.appBarWrap}>
        <Header />
        <FormBase className={S.filtersSearch} >
          <FormSelect label='escolha a linha do ônibus' />
          <fieldset data-list>
            <RadioButton name='today' label='hoje' />
            <RadioButton name='tomorrow' label='amanhã' />
            <RadioButton name='period' label='data' icon={<Calendar size={16} />} />
          </fieldset>
          <SubmitButton text='visualizar horários' />
          <FormStatus />
        </FormBase>
      </AppBar>
      <section className={S.lastSearchsWrap}>
        <List className={S.listContent} />
      </section>
    </section>
  )
}

export default Home
