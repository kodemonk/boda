import Header from './components/Header'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import NuestraHistoria from './components/NuestraHistoria'
import Ubicacion from './components/Ubicacion'
import Alojamientos from './components/Alojamientos'
import ComoLlegar from './components/ComoLlegar'
import Preboda from './components/Preboda'
import RSVP from './components/RSVP'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Countdown />
        <NuestraHistoria />
        <Ubicacion />
        <Alojamientos />
        <ComoLlegar />
        <Preboda />
        <RSVP />
      </main>
      <Footer />
    </div>
  )
}

export default App
