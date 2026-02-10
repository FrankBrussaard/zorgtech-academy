import { useParams, Link } from 'react-router-dom'
import { getTrack } from '../../content/modules/index'
import { useProgress } from '../../hooks/useProgress'

export default function TrackOverview() {
  const { trackId } = useParams()
  const track = getTrack(trackId)
  const { isModuleComplete, getQuizScore } = useProgress()

  if (!track) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900">Track niet gevonden</h1>
        <Link to="/" className="text-zorg-600 hover:underline mt-4 inline-block">
          Terug naar home
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <Link to="/" className="text-zorg-600 hover:text-zorg-800 text-sm mb-4 inline-block">
          ← Terug naar overzicht
        </Link>
        <div className="flex items-center gap-4 mb-4">
          <span className="text-4xl">{track.icon}</span>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Track {track.id}: {track.title}
            </h1>
            <p className="text-gray-600 mt-1">{track.description}</p>
          </div>
        </div>
      </div>

      {/* Modules List */}
      <div className="space-y-4">
        {track.modules.map((module, index) => {
          const completed = isModuleComplete(module.id)
          const quizScore = getQuizScore(module.id)

          return (
            <div
              key={module.id}
              className={`bg-white rounded-xl border p-6 transition ${
                completed ? 'border-green-200 bg-green-50/50' : 'border-gray-200 hover:border-zorg-300'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                    completed ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {completed ? '✓' : module.id}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {module.title}
                    </h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                      <span>{module.duration} min leestijd</span>
                      {quizScore && (
                        <span className="text-green-600">
                          Quiz: {quizScore.score}/{quizScore.total}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {module.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link
                    to={`/module/${module.id}`}
                    className="px-4 py-2 bg-zorg-600 text-white rounded-lg hover:bg-zorg-700 transition text-sm font-medium"
                  >
                    {completed ? 'Herlezen' : 'Starten'}
                  </Link>
                  <Link
                    to={`/quiz/${module.id}`}
                    className="px-4 py-2 border border-zorg-600 text-zorg-600 rounded-lg hover:bg-zorg-50 transition text-sm font-medium"
                  >
                    Quiz
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
