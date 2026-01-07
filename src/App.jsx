import Header from './components/Header'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Countdown />
        {/* Aquí irán más secciones: Info, Ubicación, Confirmación, etc. */}
      </main>
      <Footer />
    </div>
  )
}

export default App
