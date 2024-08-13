import './App.css'
import { Header } from './components/header/Header'
import { Main } from './components/main/Main'
import { Footer } from './components/footer/Footer'
import { Background } from './components/background/Background'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Contact } from './pages/Contact'
import { About } from './pages/About'
import { useState } from 'react'
function App() {
  const [userEmail, setUserEmail] = useState('')
  const [userPass, setUserPass] = useState('')
  return (
    <div className='app'>
      <Header
        userEmail={userEmail} setUserEmail={setUserEmail}
        userPass={userPass} setUserPass={setUserPass}
      />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Main>
      <Footer />
      <Background />
    </div>
  )
}

export default App
