import { useState, useEffect } from 'react'

function NuestraHistoria() {
  // Añade más fotos aquí simplemente agregando números al array
  const fotos = [1, 2, 3, 4, 5, 6]
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % fotos.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [fotos.length])

  const goTo = (index) => setCurrentIndex(index)
  const prev = () => setCurrentIndex((currentIndex - 1 + fotos.length) % fotos.length)
  const next = () => setCurrentIndex((currentIndex + 1) % fotos.length)

  return (
    <section id="historia" className="py-20 bg-primary-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="section-title text-primary-800">
          Nuestra Historia
        </h2>

        {/* Carrusel de fotos */}
        <div className="relative mb-10 rounded-2xl overflow-hidden shadow-lg bg-primary-100">
          <div className="relative h-64 md:h-96">
            {fotos.map((num, index) => (
              <img
                key={num}
                src={`/images/historia/${num}.jpg`}
                alt={`Foto ${num}`}
                className={`absolute inset-0 w-full h-full object-cover md:object-contain transition-opacity duration-500 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>

          {/* Flechas navegación */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors"
            aria-label="Anterior"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors"
            aria-label="Siguiente"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicadores */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {fotos.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Ir a foto ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Texto de la historia */}
        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
                <span className="font-display text-2xl text-primary-700">E</span>
              </div>
              <svg className="w-8 h-8 text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
                <span className="font-display text-2xl text-primary-700">A</span>
              </div>
            </div>
          </div>

          <p className="text-center text-primary-600 font-medium mb-6">
            Octubre 2018 - Bicai
          </p>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Todo comenzó en su querido <strong>Bicai</strong> (octubre 2018), donde una inocente
              estudiante y un veterano cazador de sonrisas empezaron, sin saberlo, lo que sería
              toda una aventura juntos.
            </p>

            <p>
              Como muy bien sabéis, ambos tienen personalidades muy distintas: ella es una cabra
              loca, alegre, optimista, insaciable a la hora de hacer planes; y él es más tranquilo,
              aunque intenso y apasionado de sus ideas y gustos, hogareño, lector empedernido...
            </p>

            <p>
              Ellos creen que la clave de quererse tanto es conservar ese <em>"niño"</em> que llevan
              dentro y que no deberíamos perder nunca, la admiración que sienten el uno por el otro
              y el equilibrio que conforman ambas personalidades juntas.
            </p>

            <p>
              Tras estos <strong>7 años</strong> son muchas las vivencias, crecimientos personales
              y aprendizajes que han compartido con las personas que más quieren: <strong>vosotros</strong>.
            </p>

            <div className="bg-primary-50 rounded-xl p-6 text-center mt-8">
              <p className="text-primary-800 font-display text-xl mb-4">
                ¡¡Por ello id cogiendo fuerzas con tiempo, nos queda mucha vida por disfrutar
                juntos y un bodorrio que celebrar!!
              </p>
              <p className="text-primary-600">
                Gracias por estar siempre ahí
              </p>
              <p className="text-primary-700 font-medium text-lg mt-2">
                ¡Os queremos!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NuestraHistoria
