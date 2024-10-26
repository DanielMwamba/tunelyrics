'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

type SearchResultsProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  results: any[]
  query: string
}

export default function SearchResults({ results, query }: SearchResultsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6 bg-black bg-opacity-50 rounded-lg shadow-lg"
    >
      <h2 className="text-3xl font-bold mb-4 text-center text-[#d4792a]">Résultats de recherche</h2>
      <p className="text-xl mb-6 text-center">
        Vous avez recherché : <span className="italic text-[#1472a6]">{query}</span>
      </p>
      <div className="space-y-4">
        {results.map((result, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Link href={`/lyrics/${encodeURIComponent(result.result.artist_names)}/${encodeURIComponent(result.result.title)}`}>
              <div className="p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#d4792a]">{result.result.title}</h3>
                <p className="text-[#1472a6]">{result.result.artist_names}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}