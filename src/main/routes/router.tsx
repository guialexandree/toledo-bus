import React from 'react'
import { RecoilRoot } from 'recoil'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { setCurrentAccountAdapter, getCurrentAccountAdapter } from '@/main/adapters'
import { makeLogin, makeSignUp } from '@/main/factories'
import { currentAccountState, PrivateRoute } from '@/presentation/components'

const Router: React.FC = () => {
  const state = {
    setCurrentAccount: setCurrentAccountAdapter,
    getCurrentAccount: getCurrentAccountAdapter
  }

  return (
    <RecoilRoot initializeState={({ set }) => { set(currentAccountState, state) }}>
      <BrowserRouter>
        <Switch>
          <Route path='/login' exact component={makeLogin} />
          <Route path='/signup' exact component={makeSignUp} />
          <PrivateRoute path='/' exact component={null}/>
        </Switch>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default Router
