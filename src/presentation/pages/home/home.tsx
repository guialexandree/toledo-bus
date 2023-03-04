import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { Header, currentAccountState } from '@/presentation/components'
import { FormLines } from './components'
import S from './home-styles.scss'

type HomeProps = { }

const Home: React.FC<HomeProps> = () => {
  const [currentAccount, setCurrentAccount] = useRecoilState(currentAccountState)

  useEffect(() => {
    const account = currentAccount.getCurrentAccount()
  })

  return (
    <section className={S.homeWrap}>
      <section className={S.appBar}>
        <Header />
        <FormLines className={S.filtersSearch} />
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
