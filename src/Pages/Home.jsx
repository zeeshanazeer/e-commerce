import React from 'react'
import Page from '../component/page'
import AddCard from '../component/cards'
import List from '../component/list'
import Seacond from '../component/seacond'
import Isticar from '../component/isticar'
import ThirdCard from '../component/ThirdCard'
import Grid from '../component/Grid'
import Products from './Products'

function Home() {
  return (
    <div>
      <Page/>
      <AddCard/>
      <List/>
      <Seacond/>
      <Isticar/>
      <ThirdCard/>
      <Grid/>
    </div>
  )
}

export default Home
