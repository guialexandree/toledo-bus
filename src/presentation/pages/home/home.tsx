import React, { useEffect } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { GetLines, GetLinesSearched } from '@/domain/usecases'
import { AppBar, FormBase, Header, SubmitButtonBase } from '@/presentation/components'
import { LineBusSelector, LastLineBusSearchs, isLoadingGetLinesState, isLoadingGetLinesSearchsState, linesBusState, linesBusSearchsState, DayFilterLineBus } from '@/presentation/pages/home/components'
import { Calendar } from 'phosphor-react'
import S from './home-styles.scss'

type HomeProps = {
  getLines: GetLines
  getLinesSearched: GetLinesSearched
}

const Home: React.FC<HomeProps> = ({ getLines, getLinesSearched }) => {
  const setLines = useSetRecoilState(linesBusState)
  const setLinesBusSearchs = useSetRecoilState(linesBusSearchsState)
  const setLoadingGetLines = useSetRecoilState(isLoadingGetLinesState)
  const [isLoadingGetLinesSearchs, setLoadingGetLinesSearchs] = useRecoilState(isLoadingGetLinesSearchsState)

  useEffect(() => {
    Promise.all([
      getLines
        .getAll()
        .then(setLines)
        .catch(console.error)
        .finally(() => { setLoadingGetLines(false) }),
      getLinesSearched
        .getLatest()
        .then(setLinesBusSearchs)
        .catch(console.error)
        .finally(() => { setLoadingGetLinesSearchs(false) })
    ])
  }, [])

  return (
    <section className={S.homeWrap}>
      <AppBar className={S.appBarWrap}>
        <Header />
        <FormBase className={S.filtersSearch} >
          <LineBusSelector />

          <fieldset data-list>
            <DayFilterLineBus name='today' label='hoje' />
            <DayFilterLineBus name='tomorrow' label='amanhã' />
            <DayFilterLineBus name='period' label='data' icon={<Calendar size={16} />} />
          </fieldset>

          <fieldset>
            <SubmitButtonBase text='visualizar horários' />
          </fieldset>
        </FormBase>
      </AppBar>

      <LastLineBusSearchs isLoading={isLoadingGetLinesSearchs} />
    </section>
  )
}

export default Home
