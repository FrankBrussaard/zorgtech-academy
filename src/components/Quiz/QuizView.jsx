import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { getQuiz } from '../../content/quizzes/index'
import { getModule } from '../../content/modules/index'
import { useProgress } from '../../hooks/useProgress'

export default function QuizView() {
  const { moduleId } = useParams()
  const quiz = getQuiz(moduleId)
  const module = getModule(moduleId)
  const { saveQuizScore, getQuizScore, markModuleComplete } = useProgress()

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResult, setShowResult] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const previousScore = getQuizScore(moduleId)

  if (!quiz || !module) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900">Quiz niet gevonden</h1>
        <p className="text-gray-600 mt-2">Er is nog geen quiz voor module {moduleId}.</p>
        <Link to={`/module/${moduleId}`} className="text-zorg-600 hover:underline mt-4 inline-block">
          Terug naar module
        </Link>
      </div>
    )
  }

  const question = quiz.questions[currentQuestion]

  const handleAnswer = (answer) => {
    setAnswers(prev => ({
      ...prev,
      [question.id]: answer
    }))
  }

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      setSubmitted(true)
      // Calculate score
      const score = quiz.questions.reduce((acc, q) => {
        const userAnswer = answers[q.id]
        return acc + (userAnswer === q.correct ? 1 : 0)
      }, 0)
      saveQuizScore(moduleId, score, quiz.questions.length)

      // Markeer module als voltooid bij 70% of hoger
      const percentage = Math.round((score / quiz.questions.length) * 100)
      if (percentage >= 70) {
        markModuleComplete(moduleId)
      }

      setShowResult(true)
    }
  }

  const handleRetry = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResult(false)
    setSubmitted(false)
  }

  const currentAnswer = answers[question?.id]
  const isAnswered = currentAnswer !== undefined

  if (showResult) {
    const score = quiz.questions.reduce((acc, q) => {
      const userAnswer = answers[q.id]
      return acc + (userAnswer === q.correct ? 1 : 0)
    }, 0)

    const percentage = Math.round((score / quiz.questions.length) * 100)
    const passed = percentage >= 70

    return (
      <div className="max-w-2xl mx-auto">
        <div className={`text-center p-8 rounded-2xl ${passed ? 'bg-green-50' : 'bg-orange-50'}`}>
          <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center text-4xl mb-4 ${
            passed ? 'bg-green-100' : 'bg-orange-100'
          }`}>
            {passed ? '🎉' : '📚'}
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {passed ? 'Goed gedaan!' : 'Nog even oefenen'}
          </h1>
          <p className="text-4xl font-bold text-gray-900 mb-4">
            {score} / {quiz.questions.length}
          </p>
          <p className="text-gray-600 mb-8">
            {passed
              ? 'Je hebt de quiz succesvol afgerond.'
              : 'Lees de module nog eens door en probeer het opnieuw.'}
          </p>
        </div>

        {/* Review answers */}
        <div className="mt-8 space-y-6">
          <h2 className="text-xl font-bold text-gray-900">Overzicht antwoorden</h2>
          {quiz.questions.map((q, index) => {
            const userAnswer = answers[q.id]
            const isCorrect = userAnswer === q.correct

            return (
              <div
                key={q.id}
                className={`p-4 rounded-lg border ${
                  isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className={`text-lg ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                    {isCorrect ? '✓' : '✗'}
                  </span>
                  <div>
                    <p className="font-medium text-gray-900">{q.question}</p>
                    <p className="text-sm text-gray-600 mt-2">{q.explanation}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-8 flex gap-4">
          <button
            onClick={handleRetry}
            className="px-6 py-3 bg-zorg-600 text-white rounded-lg hover:bg-zorg-700 transition font-medium"
          >
            Opnieuw proberen
          </button>
          <Link
            to={`/module/${moduleId}`}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium"
          >
            Terug naar module
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <Link
          to={`/module/${moduleId}`}
          className="text-zorg-600 hover:text-zorg-800 text-sm mb-4 inline-block"
        >
          ← Terug naar module
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Quiz: {module.title}</h1>
        {previousScore && (
          <p className="text-sm text-gray-500 mt-1">
            Vorige score: {previousScore.score}/{previousScore.total}
          </p>
        )}
      </div>

      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Vraag {currentQuestion + 1} van {quiz.questions.length}</span>
          <span>{Math.round(((currentQuestion + 1) / quiz.questions.length) * 100)}%</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-zorg-500 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">{question.question}</h2>

        {question.type === 'multiple-choice' && (
          <div className="space-y-3">
            {question.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleAnswer(option.id)}
                className={`w-full text-left p-4 rounded-lg border transition ${
                  currentAnswer === option.id
                    ? 'border-zorg-500 bg-zorg-50 text-zorg-800'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <span className="font-medium mr-2">{option.id.toUpperCase()}.</span>
                {option.text}
              </button>
            ))}
          </div>
        )}

        {question.type === 'true-false' && (
          <div className="flex gap-4">
            <button
              onClick={() => handleAnswer(true)}
              className={`flex-1 p-4 rounded-lg border transition ${
                currentAnswer === true
                  ? 'border-zorg-500 bg-zorg-50 text-zorg-800'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              Waar
            </button>
            <button
              onClick={() => handleAnswer(false)}
              className={`flex-1 p-4 rounded-lg border transition ${
                currentAnswer === false
                  ? 'border-zorg-500 bg-zorg-50 text-zorg-800'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              Niet waar
            </button>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="mt-6 flex justify-between">
        <button
          onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
          disabled={currentQuestion === 0}
          className="px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ← Vorige
        </button>
        <button
          onClick={handleNext}
          disabled={!isAnswered}
          className="px-6 py-2 bg-zorg-600 text-white rounded-lg hover:bg-zorg-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {currentQuestion === quiz.questions.length - 1 ? 'Afronden' : 'Volgende →'}
        </button>
      </div>
    </div>
  )
}
