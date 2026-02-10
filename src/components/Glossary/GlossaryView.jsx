import { useState, useMemo } from 'react'
import { glossary } from '../../content/glossary'

export default function GlossaryView() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = useMemo(() => {
    const cats = [...new Set(glossary.terms.map(t => t.category))]
    return cats.sort()
  }, [])

  const filteredTerms = useMemo(() => {
    return glossary.terms
      .filter(term => {
        const matchesSearch =
          term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
          term.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          term.definition.toLowerCase().includes(searchTerm.toLowerCase())

        const matchesCategory = selectedCategory === 'all' || term.category === selectedCategory

        return matchesSearch && matchesCategory
      })
      .sort((a, b) => a.term.localeCompare(b.term))
  }, [searchTerm, selectedCategory])

  const categoryLabels = {
    infrastructuur: 'Infrastructuur',
    bekostiging: 'Bekostiging',
    wetgeving: 'Wetgeving',
    standaarden: 'Standaarden',
    toezicht: 'Toezicht',
    zorglandschap: 'Zorglandschap'
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Begrippenlijst</h1>
        <p className="text-gray-600">
          Alle belangrijke termen uit de zorgtechnologie op een rijtje.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex-1">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Zoek begrip..."
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-zorg-500 focus:border-transparent outline-none transition"
          />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-zorg-500 focus:border-transparent outline-none transition bg-white"
        >
          <option value="all">Alle categorieën</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {categoryLabels[cat] || cat}
            </option>
          ))}
        </select>
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-500 mb-4">
        {filteredTerms.length} begrippen gevonden
      </p>

      {/* Terms grid */}
      <div className="grid gap-4">
        {filteredTerms.map((term) => (
          <div
            key={term.term}
            className="bg-white rounded-xl border border-gray-200 p-6 hover:border-zorg-200 transition"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h2 className="text-xl font-bold text-gray-900">{term.term}</h2>
                {term.fullName && (
                  <p className="text-zorg-600">{term.fullName}</p>
                )}
              </div>
              <span className={`text-xs px-3 py-1 rounded-full ${
                term.category === 'infrastructuur' ? 'bg-blue-100 text-blue-700' :
                term.category === 'bekostiging' ? 'bg-green-100 text-green-700' :
                term.category === 'wetgeving' ? 'bg-purple-100 text-purple-700' :
                term.category === 'standaarden' ? 'bg-orange-100 text-orange-700' :
                term.category === 'toezicht' ? 'bg-red-100 text-red-700' :
                'bg-gray-100 text-gray-700'
              }`}>
                {categoryLabels[term.category] || term.category}
              </span>
            </div>

            <p className="text-gray-700 mb-4">{term.definition}</p>

            {term.relatedTerms && term.relatedTerms.length > 0 && (
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-gray-500">Gerelateerd:</span>
                {term.relatedTerms.map(related => (
                  <button
                    key={related}
                    onClick={() => setSearchTerm(related)}
                    className="text-sm text-zorg-600 hover:text-zorg-800 hover:underline"
                  >
                    {related}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredTerms.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-xl">
          <p className="text-gray-600">Geen begrippen gevonden.</p>
          <button
            onClick={() => {
              setSearchTerm('')
              setSelectedCategory('all')
            }}
            className="text-zorg-600 hover:underline mt-2"
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  )
}
