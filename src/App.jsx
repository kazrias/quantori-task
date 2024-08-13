import './App.css'
import { Header } from './components/header/Header'
import { Main } from './components/main/Main'
import { Footer } from './components/footer/Footer'
import { Background } from './components/background/Background'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Contact } from './pages/Contact'
import { About } from './pages/About'
import { Error } from './components/error/error'
import { useState, useEffect } from 'react'
function App() {
  const [userName, setUserName] = useState('')
  const [userPass, setUserPass] = useState('')
  const [loginButtonClicked, setLoginButtonClicked] = useState(false)
  const [modalLoginClicked, setModalLoginClicked] = useState(false)
  const [token, setToken] = useState(null)
  const [user, setUser] = useState({})
  const [error, setError] = useState(false)
  function handleLogout() {
    setUser({})
    localStorage.removeItem('userToken');
  }
  useEffect(() => {
    const storedToken = localStorage.getItem('userToken');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    const getToken = async () => {
      try {
        const response = await fetch('https://dummyjson.com/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: userName,
            password: userPass,
            expiresInMins: 30, // optional, defaults to 60
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setToken(data.token);
        localStorage.setItem('userToken', data.token);
      } catch (err) {
        console.error('Error logging in:', err);
        setError(true)
      }
    };

    if (modalLoginClicked) {
      getToken();
    }
    setUserName('')
    setUserPass('')
    setModalLoginClicked(false)
  }, [modalLoginClicked]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/auth/me', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching user data:', err);
      }
    };

    if (token) {
      fetchUserData();
    }
  }, [token]);
  return (
    <div className='app'>
      <Header
        userName={userName} setUserName={setUserName}
        userPass={userPass} setUserPass={setUserPass}
        loginButtonClicked={loginButtonClicked}
        setLoginButtonClicked={setLoginButtonClicked}
        setModalLoginClicked={setModalLoginClicked}
        image={user.image}
        user={user}
        handleLogout={handleLogout}
      />
      <Main>
        <Routes>
          <Route path="/" element={<Home {...user} />} />
          <Route path="/contact" element={<Contact  {...user} />} />
          <Route path="/about" element={<About {...user} />} />
        </Routes>
      </Main>
      <Footer />
      <Background />
      {error && <Error setError={setError} />}
    </div>
  )
}

export default App
