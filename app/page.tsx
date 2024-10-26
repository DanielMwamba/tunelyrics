import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import LyricsSearch from '@/components/lyrics-search'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Trouvez Vos Paroles Préférées</h2>
          <LyricsSearch />
        </section>
      </main>
      <Footer/>
    </div>
  )
}