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
    const elements = []
    let elementKey = 0

    // First, split content by code blocks
    const codeBlockRegex = /```(\w*)\n([\s\S]*?)```/g
    const parts = []
    let lastIndex = 0
    let match

    while ((match = codeBlockRegex.exec(text)) !== null) {
      // Add text before code block
      if (match.index > lastIndex) {
        parts.push({ type: 'text', content: text.slice(lastIndex, match.index) })
      }
      // Add code block
      parts.push({ type: 'code', language: match[1], content: match[2] })
      lastIndex = match.index + match[0].length
    }
    // Add remaining text
    if (lastIndex < text.length) {
      parts.push({ type: 'text', content: text.slice(lastIndex) })
    }

    // Process each part
    parts.forEach((part) => {
      if (part.type === 'code') {
        // Render code block with preserved whitespace
        elements.push(
          <pre
            key={`code-${elementKey++}`}
            className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 text-sm font-mono leading-relaxed"
          >
            <code>{part.content.trim()}</code>
          </pre>
        )
      } else {
        // Process regular text
        const lines = part.content.split('\n')
        let currentList = []
        let inTable = false
        let tableRows = []

        const flushList = () => {
          if (currentList.length > 0) {
            elements.push(
              <ul key={`list-${elementKey++}`} className="list-disc list-inside mb-4 space-y-2 text-gray-700">
                {currentList.map((item, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') }} />
                ))}
              </ul>
            )
            currentList = []
          }
        }

        const flushTable = () => {
          if (tableRows.length > 0) {
            const headerRow = tableRows[0]
            const dataRows = tableRows.slice(2) // Skip separator row
            elements.push(
              <div key={`table-${elementKey++}`} className="overflow-x-auto mb-6">
                <table className="min-w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      {headerRow.map((cell, i) => (
                        <th key={i} className="border border-gray-300 px-3 py-2 text-left font-semibold text-gray-800">
                          {cell.trim()}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {dataRows.map((row, rowIndex) => (
                      <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className="border border-gray-300 px-3 py-2 text-gray-700">
                            {cell.trim()}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
            tableRows = []
            inTable = false
          }
        }

        lines.forEach((line) => {
          const trimmed = line.trim()

          // Detect table rows (start with |)
          if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
            flushList()
            inTable = true
            const cells = trimmed.slice(1, -1).split('|')
            // Skip separator rows (contain only dashes and pipes)
            if (!trimmed.match(/^\|[-:\s|]+\|$/)) {
              tableRows.push(cells)
            } else if (tableRows.length === 1) {
              // This is the separator after header
              tableRows.push(cells) // Keep as marker
            }
            return
          } else if (inTable) {
            flushTable()
          }

          if (trimmed.startsWith('## ')) {
            flushList()
            elements.push(
              <h2 key={`h2-${elementKey++}`} className="text-2xl font-bold mt-8 mb-4 text-zorg-800">
                {trimmed.replace('## ', '')}
              </h2>
            )
          } else if (trimmed.startsWith('### ')) {
            flushList()
            elements.push(
              <h3 key={`h3-${elementKey++}`} className="text-xl font-semibold mt-6 mb-3 text-zorg-700">
                {trimmed.replace('### ', '')}
              </h3>
            )
          } else if (trimmed.startsWith('- **')) {
            // Definition list item
            const defMatch = trimmed.match(/- \*\*(.+?)\*\*:?\s*(.*)/)
            if (defMatch) {
              flushList()
              elements.push(
                <div key={`def-${elementKey++}`} className="mb-3 pl-4 border-l-2 border-zorg-200">
                  <span className="font-semibold text-gray-900">{defMatch[1]}</span>
                  {defMatch[2] && <span className="text-gray-700">: {defMatch[2]}</span>}
                </div>
              )
            }
          } else if (trimmed.startsWith('- ')) {
            currentList.push(trimmed.replace('- ', ''))
          } else if (trimmed.match(/^\d+\.\s/)) {
            flushList()
            const numText = trimmed.replace(/^\d+\.\s/, '')
            const num = trimmed.match(/^\d+/)[0]
            elements.push(
              <div key={`num-${elementKey++}`} className="mb-2 pl-4 text-gray-700">
                <span className="font-medium text-zorg-600 mr-2">{num}.</span>
                <span dangerouslySetInnerHTML={{ __html: numText.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') }} />
              </div>
            )
          } else if (trimmed === '') {
            flushList()
          } else {
            flushList()
            // Parse bold text and inline code
            let parsed = trimmed
              .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
              .replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-zorg-700">$1</code>')
            elements.push(
              <p
                key={`p-${elementKey++}`}
                className="mb-4 text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: parsed }}
              />
            )
          }
        })

        flushList()
        flushTable()
      }
    })

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
