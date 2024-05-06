import { Route, Routes } from 'react-router-dom'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { Details } from './components/Details'
import { Error } from './components/Error'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/UserDetails" element={<Details />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </>
  )
}

export default App
