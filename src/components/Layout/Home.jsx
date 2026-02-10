import { Link } from 'react-router-dom'
import { useProgress } from '../../hooks/useProgress'
import { tracks } from '../../content/modules/index'

export default function Home() {
  const { progress, isModuleComplete } = useProgress()

  const getTrackProgress = (track) => {
    const completedCount = track.modules.filter(m => isModuleComplete(m.id)).length
    return {
      completed: completedCount,
      total: track.modules.length,
      percentage: Math.round((completedCount / track.modules.length) * 100)
    }
  }

  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="bg-gradient-to-r from-zorg-600 to-zorg-800 rounded-2xl p-8 text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Welkom bij ZorgTech Academy
        </h1>
        <p className="text-zorg-100 text-lg max-w-2xl">
          Leer alles over zorgtechnologie in Nederland. Van DBC's tot FHIR,
          van wet- en regelgeving tot AI in de zorg.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <div className="bg-white/20 rounded-lg px-4 py-2">
            <span className="text-2xl font-bold">{progress.completedModules.length}</span>
            <span className="text-zorg-100 ml-2">modules voltooid</span>
          </div>
          <div className="bg-white/20 rounded-lg px-4 py-2">
            <span className="text-2xl font-bold">{Object.keys(progress.quizScores).length}</span>
            <span className="text-zorg-100 ml-2">quizzes afgerond</span>
          </div>
        </div>
      </div>

      {/* Tracks Grid */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Leerpaden</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track) => {
            const progress = getTrackProgress(track)
            return (
              <Link
                key={track.id}
                to={`/track/${track.id}`}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-zorg-300 transition group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{track.icon}</span>
                  <span className="text-sm text-gray-500">
                    {track.modules.length} modules
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-zorg-600 transition mb-2">
                  Track {track.id}: {track.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {track.description}
                </p>

                {/* Progress bar */}
                <div className="mt-auto">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Voortgang</span>
                    <span className="font-medium text-zorg-600">{progress.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-zorg-500 rounded-full transition-all duration-500"
                      style={{ width: `${progress.percentage}%` }}
                    />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Quick Start */}
      {progress.lastVisited && (
        <div className="bg-zorg-50 border border-zorg-200 rounded-xl p-6">
          <h3 className="font-semibold text-zorg-800 mb-2">Verder waar je gebleven was</h3>
          <Link
            to={`/module/${progress.lastVisited}`}
            className="text-zorg-600 hover:text-zorg-800 underline"
          >
            Ga verder met module {progress.lastVisited}
          </Link>
        </div>
      )}
    </div>
  )
}
