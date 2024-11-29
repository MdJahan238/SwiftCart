import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Shared/Header/Header'
import About from './component/About/about'
import Contact from './component/Contact/Contact'

function App() {
  return (
    <div>
      <Header></Header>
      <About></About>
      <Contact></Contact>
    </div>
  )
}

export default App
