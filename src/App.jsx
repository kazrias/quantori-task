import './App.css'
import { Header } from './components/header/Header'
import { Main } from './components/main/Main'
import { Footer } from './components/footer/Footer'
import { Background } from './components/background/Background'
function App() {
  return (
    <div className='app'>
      <Header />
      <Main />
      <Footer />
      <Background />
    </div>
  )
}

export default App
