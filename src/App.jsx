import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import CocktailsPage from './components/CocktailsPage'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/cocktails" element={<CocktailsPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

