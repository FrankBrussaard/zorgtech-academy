import { createContext, useContext, useState, useEffect } from 'react'

const ProgressContext = createContext()

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('zorgtech_progress')
    return saved ? JSON.parse(saved) : {
      completedModules: [],
      quizScores: {},
      lastVisited: null
    }
  })

  useEffect(() => {
    localStorage.setItem('zorgtech_progress', JSON.stringify(progress))
  }, [progress])

  const markModuleComplete = (moduleId) => {
    setProgress(prev => ({
      ...prev,
      completedModules: [...new Set([...prev.completedModules, moduleId])],
      lastVisited: moduleId
    }))
  }

  const saveQuizScore = (moduleId, score, total) => {
    setProgress(prev => ({
      ...prev,
      quizScores: {
        ...prev.quizScores,
        [moduleId]: { score, total, date: new Date().toISOString() }
      }
    }))
  }

  const isModuleComplete = (moduleId) => {
    return progress.completedModules.includes(moduleId)
  }

  const getQuizScore = (moduleId) => {
    return progress.quizScores[moduleId]
  }

  return (
    <ProgressContext.Provider value={{
      progress,
      markModuleComplete,
      saveQuizScore,
      isModuleComplete,
      getQuizScore
    }}>
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgress() {
  const context = useContext(ProgressContext)
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider')
  }
  return context
}
