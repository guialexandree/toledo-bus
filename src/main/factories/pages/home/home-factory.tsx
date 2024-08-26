import React from 'react'
import { Home } from '@/presentation/pages'
import { makeGetLines, makeGetLinesSearched } from '@/main/factories/usecases'

export const makeHome: React.FC = () => {
  return <Home
    getLines={makeGetLines()}
    getLinesSearched={makeGetLinesSearched()}
  />
}
