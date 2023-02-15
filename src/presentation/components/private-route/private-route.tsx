import React from 'react'
import { Redirect, RouteProps, Route } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { currentAccountState } from '@/presentation/components'

const PrivateRoute: React.FC<RouteProps> = (props: RouteProps) => {
  const { getCurrentAccount } = useRecoilValue(currentAccountState)

  return getCurrentAccount()?.accessToken
    ? <Route {...props} />
    : <Route {...props} component={() => <Redirect to='/login' />} />
}

export default PrivateRoute
