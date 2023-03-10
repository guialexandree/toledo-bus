import React from 'react'
import { RecoilRoot } from 'recoil'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { setCurrentAccountAdapter, getCurrentAccountAdapter } from '@/main/adapters'
import { makeHome, makeSignIn, makeSplash } from '@/main/factories'
import { currentAccountState } from '@/presentation/components'

const Router: React.FC = () => {
  const state = {
    setCurrentAccount: setCurrentAccountAdapter,
    getCurrentAccount: getCurrentAccountAdapter
  }

  return (
    <RecoilRoot initializeState={({ set }) => { set(currentAccountState, state) }}>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={makeSplash} />
          <Route path='/signin' exact component={makeSignIn} />
          <Route path='/home' exact component={makeHome} />
        </Switch>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default Router
