import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { getModule } from '../../content/modules/index'
import { getModuleContent } from '../../content/modules/content'
import { useProgress } from '../../hooks/useProgress'

export default function ModuleView() {
  const { moduleId } = useParams()
  const module = getModule(moduleId)
  const content = getModuleContent(moduleId)
  const { markModuleComplete, isModuleComplete } = useProgress()

  useEffect(() => {
    // Scroll naar boven bij laden
    window.scrollTo(0, 0)
  }, [moduleId])

  if (!module || !content) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900">Module niet gevonden</h1>
        <p className="text-gray-600 mt-2">Module {moduleId} bestaat nog niet of heeft geen content.</p>
        <Link to="/" className="text-zorg-600 hover:underline mt-4 inline-block">
          Terug naar home
        </Link>
      </div>
    )
  }

  const handleMarkComplete = () => {
    markModuleComplete(moduleId)
  }

  const completed = isModuleComplete(moduleId)

  // Simple markdown-ish parsing
  const renderContent = (text) => {
    const lines = text.trim().split('\n')
    const elements = []
    let currentList = []
    let listKey = 0

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`list-${listKey++}`} className="list-disc list-inside mb-4 space-y-2 text-gray-700">
            {currentList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )
        currentList = []
      }
    }

    lines.forEach((line, index) => {
      const trimmed = line.trim()

      if (trimmed.startsWith('## ')) {
        flushList()
        elements.push(
          <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-zorg-800">
            {trimmed.replace('## ', '')}
          </h2>
        )
      } else if (trimmed.startsWith('### ')) {
        flushList()
        elements.push(
          <h3 key={index} className="text-xl font-semibold mt-6 mb-3 text-zorg-700">
            {trimmed.replace('### ', '')}
          </h3>
        )
      } else if (trimmed.startsWith('- **')) {
        // Definition list item
        const match = trimmed.match(/- \*\*(.+?)\*\*:?\s*(.*)/)
        if (match) {
          flushList()
          elements.push(
            <div key={index} className="mb-3 pl-4 border-l-2 border-zorg-200">
              <span className="font-semibold text-gray-900">{match[1]}</span>
              {match[2] && <span className="text-gray-700">: {match[2]}</span>}
            </div>
          )
        }
      } else if (trimmed.startsWith('- ')) {
        currentList.push(trimmed.replace('- ', ''))
      } else if (trimmed.match(/^\d+\.\s/)) {
        flushList()
        const text = trimmed.replace(/^\d+\.\s/, '')
        elements.push(
          <div key={index} className="mb-2 pl-4 text-gray-700">
            <span className="font-medium text-zorg-600 mr-2">{trimmed.match(/^\d+/)[0]}.</span>
            {text}
          </div>
        )
      } else if (trimmed === '') {
        flushList()
      } else {
        flushList()
        // Parse bold text
        const parsed = trimmed.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        elements.push(
          <p
            key={index}
            className="mb-4 text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: parsed }}
          />
        )
      }
    })

    flushList()
    return elements
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Navigation */}
      <Link
        to={`/track/${module.track.id}`}
        className="text-zorg-600 hover:text-zorg-800 text-sm mb-6 inline-block"
      >
        ← Terug naar {module.track.title}
      </Link>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <span>Track {module.track.id}</span>
          <span>•</span>
          <span>Module {module.id}</span>
          <span>•</span>
          <span>{module.duration} min</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{content.title}</h1>
        <p className="text-lg text-gray-600 bg-zorg-50 p-4 rounded-lg border border-zorg-100">
          {content.summary}
        </p>
      </div>

      {/* Content */}
      <div className="prose-custom">
        {renderContent(content.content)}
      </div>

      {/* Sources */}
      {content.sources && content.sources.length > 0 && (
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Bronnen & Verder lezen</h2>
          <ul className="space-y-2">
            {content.sources.map((source, index) => (
              <li key={index}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zorg-600 hover:text-zorg-800 hover:underline"
                >
                  {source.name} →
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Actions */}
      <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap gap-4">
        {!completed ? (
          <button
            onClick={handleMarkComplete}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
          >
            ✓ Markeer als voltooid
          </button>
        ) : (
          <span className="px-6 py-3 bg-green-100 text-green-700 rounded-lg font-medium">
            ✓ Voltooid
          </span>
        )}
        <Link
          to={`/quiz/${moduleId}`}
          className="px-6 py-3 bg-zorg-600 text-white rounded-lg hover:bg-zorg-700 transition font-medium"
        >
          Maak de quiz →
        </Link>
      </div>
    </div>
  )
}
