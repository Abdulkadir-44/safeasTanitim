import React from 'react'
import TopMain from './TopMain'
import { MidMain } from './MidMain'
import BotMain from './BotMain'
import Cards from '../Cards/Cards'


const Main = () => {

  return (

    <main>
      <TopMain />
      <MidMain />
      <BotMain />
      <Cards/>
    </main>
  )
}

export default Main