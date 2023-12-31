import React from 'react'

import Header from '../../components/Header'
import LineChart from './LineChart'
export default function Line() {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl '>
      <Header category='Chart' title='Inflation rate' />
      <div>
      <LineChart/>
      </div>  
    </div>
  )
}
