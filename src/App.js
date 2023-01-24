import React from 'react'

import "./App.css"
import Header from "./components/Header/Header"
import About from './components/About/About';

const App = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <About />
      </main>
    </>
  )
}

export default App