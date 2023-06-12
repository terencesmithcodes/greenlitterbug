import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import LandingPage from './pages/LandingPage'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/register" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
