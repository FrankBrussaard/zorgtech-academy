import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Layout from './components/Layout/Layout'
import Home from './components/Layout/Home'
import TrackOverview from './components/Module/TrackOverview'
import ModuleView from './components/Module/ModuleView'
import QuizView from './components/Quiz/QuizView'
import GlossaryView from './components/Glossary/GlossaryView'
import SearchResults from './components/Search/SearchResults'
import AuthGate from './components/Auth/AuthGate'
import { ProgressProvider } from './hooks/useProgress'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const session = localStorage.getItem('zorgtech_session')
    if (session) {
      const { expiry } = JSON.parse(session)
      if (Date.now() < expiry) {
        setIsAuthenticated(true)
      } else {
        localStorage.removeItem('zorgtech_session')
      }
    }
  }, [])

  const handleLogin = () => {
    const expiry = Date.now() + 7 * 24 * 60 * 60 * 1000 // 7 dagen
    localStorage.setItem('zorgtech_session', JSON.stringify({ expiry }))
    setIsAuthenticated(true)
  }

  if (!isAuthenticated) {
    return <AuthGate onLogin={handleLogin} />
  }

  return (
    <ProgressProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/track/:trackId" element={<TrackOverview />} />
          <Route path="/module/:moduleId" element={<ModuleView />} />
          <Route path="/quiz/:moduleId" element={<QuizView />} />
          <Route path="/glossary" element={<GlossaryView />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </Layout>
    </ProgressProvider>
  )
}

export default App
