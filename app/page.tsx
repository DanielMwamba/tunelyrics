'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import LyricsSearch from '@/components/lyrics-search'
import Footer from '@/components/footer'

export default function Home() {
  const [searchResults, setSearchResults] = useState<string | null>(null)

  const handleSearch = (artist: string, song: string) => {
    // TODO: Implement actual API call to fetch lyrics
    setSearchResults(`Recherche des paroles de "${song}" par ${artist}...`)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <motion.section 
          className="container mx-auto px-4 py-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Trouvez Vos Paroles Préférées</h2>
          <LyricsSearch onSearch={handleSearch} />
          {searchResults && (
            <motion.div 
              className="mt-8 p-4 bg-white bg-opacity-20 text-white rounded-lg max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p>{searchResults}</p>
            </motion.div>
          )}
        </motion.section>
        <motion.section 
          className="container mx-auto px-4 py-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Recherches Tendances</h2>
          {/* TODO: Ajouter une grille ou une liste de recherches de chansons tendances */}
        </motion.section>
      </main>
      <Footer />
    </div>
  )
}