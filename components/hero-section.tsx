'use client'

import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function HeroSection() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start('visible')
  }, [controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <motion.div
          className="w-full lg:w-1/2 text-white z-10"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 mt-28 leading-tight"
            variants={itemVariants}
          >
            Découvrez la <span className="text-[#d4792a]">Poésie</span> dans Vos Chansons Préférées
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8"
            variants={itemVariants}
          >
            Plongez dans un monde de paroles, découvrez des significations cachées et connectez-vous avec les mots qui vous touchent.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button 
              size="lg" 
              className="bg-[#d4792a] hover:bg-[#c36a1f] text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <Search className="mr-2 h-5 w-5" /> Commencez Votre Voyage Lyrique
            </Button>
          </motion.div>
        </motion.div>
        
        <div className="w-full lg:w-1/2 relative h-[500px] mt-12 lg:mt-0">
          <motion.div
            className="absolute top-0 right-0 w-3/4 h-3/4 floating"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Image
              src="/img.jpg"
              alt="Image musicale 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
          <motion.div
            className="absolute bottom-0 left-0 w-2/3 h-2/3 floating"
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <Image
              src="/img2.jpg"
              alt="Image musicale 2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
      
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#541563] to-[#1472a6] opacity-30"></div>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </motion.div>
    </section>
  )
}