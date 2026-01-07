import Header from './components/Header'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import Ubicacion from './components/Ubicacion'
import RSVP from './components/RSVP'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Countdown />
        {/* TODO: Añadir sección "Nuestra Historia" */}
        <Ubicacion />
        <RSVP />
      </main>
      <Footer />
    </div>
  )
}

export default App
