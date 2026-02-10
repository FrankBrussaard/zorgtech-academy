import { useSearchParams, Link } from 'react-router-dom'
import { useMemo } from 'react'
import Fuse from 'fuse.js'
import { tracks } from '../../content/modules/index'
import { moduleContent } from '../../content/modules/content'
import { glossary } from '../../content/glossary'

export default function SearchResults() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''

  const searchData = useMemo(() => {
    const data = []

    // Add modules
    tracks.forEach(track => {
      track.modules.forEach(module => {
        const content = moduleContent[module.id]
        data.push({
          type: 'module',
          id: module.id,
          title: module.title,
          content: content?.content || '',
          summary: content?.summary || '',
          tags: module.tags,
          track: track.title,
          trackId: track.id
        })
      })
    })

    // Add glossary terms
    glossary.terms.forEach(term => {
      data.push({
        type: 'glossary',
        id: term.term,
        title: term.term,
        fullName: term.fullName,
        content: term.definition,
        category: term.category
      })
    })

    return data
  }, [])

  const fuse = useMemo(() => {
    return new Fuse(searchData, {
      keys: [
        { name: 'title', weight: 0.4 },
        { name: 'fullName', weight: 0.3 },
        { name: 'content', weight: 0.2 },
        { name: 'tags', weight: 0.1 }
      ],
      threshold: 0.3,
      includeMatches: true,
      minMatchCharLength: 2
    })
  }, [searchData])

  const results = useMemo(() => {
    if (!query) return []
    return fuse.search(query).slice(0, 20)
  }, [fuse, query])

  const moduleResults = results.filter(r => r.item.type === 'module')
  const glossaryResults = results.filter(r => r.item.type === 'glossary')

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Zoekresultaten</h1>
      <p className="text-gray-600 mb-8">
        {results.length} resultaten voor "{query}"
      </p>

      {results.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-xl">
          <p className="text-gray-600">Geen resultaten gevonden.</p>
          <p className="text-gray-500 text-sm mt-2">
            Probeer andere zoektermen of bekijk de{' '}
            <Link to="/glossary" className="text-zorg-600 hover:underline">
              begrippenlijst
            </Link>
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Module results */}
          {moduleResults.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Modules</h2>
              <div className="space-y-4">
                {moduleResults.map(({ item }) => (
                  <Link
                    key={item.id}
                    to={`/module/${item.id}`}
                    className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-zorg-300 transition"
                  >
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                      <span>Track {item.trackId}</span>
                      <span>•</span>
                      <span>Module {item.id}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    {item.summary && (
                      <p className="text-gray-600 text-sm mt-1 line-clamp-2">{item.summary}</p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Glossary results */}
          {glossaryResults.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Begrippen</h2>
              <div className="space-y-4">
                {glossaryResults.map(({ item }) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg border border-gray-200 p-4"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        {item.fullName && (
                          <p className="text-zorg-600 text-sm">{item.fullName}</p>
                        )}
                      </div>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
