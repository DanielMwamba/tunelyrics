"use client"

import Link from 'next/link'
import { Facebook, Twitter, Instagram } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-black bg-opacity-50 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">TuneLyrics</h3>
            <p className="text-gray-300">Découvrez la poésie dans la musique avec TuneLyrics. Explorez les paroles, découvrez des artistes et connectez-vous avec les chansons qui définissent votre monde.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-[#d4792a] transition-colors">À Propos</Link></li>
              <li><Link href="/contribute" className="hover:text-[#d4792a] transition-colors">Contribuer</Link></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="text-xl font-semibold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#d4792a] transition-colors"><Facebook size={24} /></a>
              <a href="#" className="hover:text-[#d4792a] transition-colors"><Twitter size={24} /></a>
              <a href="#" className="hover:text-[#d4792a] transition-colors"><Instagram size={24} /></a>
            </div>
          </motion.div>
        </div>
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p>&copy; {new Date().getFullYear()} TuneLyrics. Tous droits réservés.</p>
        </motion.div>
      </div>
    </footer>
  )
}