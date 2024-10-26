'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { BsMusicNote } from 'react-icons/bs'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header 
      className="bg-black bg-opacity-50 text-white fixed w-full z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <BsMusicNote className="h-8 w-8 text-[#d4792a]" />
            <span className="text-2xl font-bold">TuneLyrics</span>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><Link href="/about" className="hover:text-[#d4792a] transition-colors">À propos</Link></li>
              <li><Link href="/contribute" className="hover:text-[#d4792a] transition-colors">Contribuer</Link></li>
            </ul>
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <motion.nav 
          className="md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li><Link href="/about" className="hover:text-[#d4792a] transition-colors">À propos</Link></li>
            <li><Link href="/contribute" className="hover:text-[#d4792a] transition-colors">Contribuer</Link></li>
          </ul>
        </motion.nav>
      )}
    </motion.header>
  )
}