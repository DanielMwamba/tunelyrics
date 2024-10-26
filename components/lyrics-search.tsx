'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function LyricsSearch() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search/${encodeURIComponent(query)}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          type="text"
          placeholder="Rechercher une chanson ou un artiste"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 bg-white bg-opacity-20 text-white border-[#d4792a] focus:border-[#1472a6]"
        />
        <Button type="submit" className="bg-[#d4792a] hover:bg-[#c36a1f] text-white transition-all duration-300 transform hover:scale-105">
          <Search className="mr-2 h-5 w-5" /> Rechercher
        </Button>
      </div>
    </form>
  )
}