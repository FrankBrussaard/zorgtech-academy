import { useState } from 'react'

// Wachtwoord voor toegang
const PASSWORD = 'zorgtech2026'

export default function AuthGate({ onLogin }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password === PASSWORD) {
      onLogin()
    } else {
      setError('Onjuist wachtwoord')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zorg-600 to-zorg-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-zorg-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-zorg-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">ZorgTech Academy</h1>
          <p className="text-gray-600 mt-2">Trainingsplatform voor zorgtechnologie-adviseurs</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Wachtwoord
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zorg-500 focus:border-transparent outline-none transition"
              placeholder="Voer het wachtwoord in"
              required
            />
          </div>

          {error && (
            <p className="text-red-600 text-sm">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-zorg-600 hover:bg-zorg-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Inloggen
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          Vraag het wachtwoord aan bij je leidinggevende
        </p>
      </div>
    </div>
  )
}
