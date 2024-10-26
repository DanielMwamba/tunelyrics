import { useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function LyricsSearch({ onSearch }: { onSearch: (artist: string, song: string) => void }) {
  const [artist, setArtist] = useState('')
  const [song, setSong] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(artist, song)
  }

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="space-y-4 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          type="text"
          placeholder="Nom de l'artiste"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          className="flex-1 bg-white bg-opacity-20 text-white border-[#d4792a] focus:border-[#1472a6]"
        />
        <Input
          type="text"
          placeholder="Titre de la chanson"
          value={song}
          onChange={(e) => setSong(e.target.value)}
          className="flex-1 bg-white bg-opacity-20 text-white border-[#d4792a] focus:border-[#1472a6]"
        />
      </div>
      <Button type="submit" className="w-full bg-[#d4792a] hover:bg-[#c36a1f] text-white transition-all duration-300 transform hover:scale-105">
        <Search className="mr-2 h-5 w-5" /> Découvrir les Paroles
      </Button>
    </motion.form>
  )
}