import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './components/Data'

export default function App() {
  const cardData = data.map(data => <Card key={data.id} {...data} />)
    return (
      <div>
        <Navbar />
        <Hero />
        <section className='cardContainer'>{cardData}</section>
      </div>
    )
}



