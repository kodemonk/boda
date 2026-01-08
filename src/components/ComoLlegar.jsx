import { useState } from 'react'

function ComoLlegar() {
  const [activeTab, setActiveTab] = useState('bilbao')

  const rutas = {
    bilbao: {
      titulo: "Desde Bilbao / Getxo",
      coche: {
        distancia: "420 km",
        tiempo: "3:50h - 4:15h",
        ruta: "Autovía A-8 dirección Santander → Oviedo → Ribadeo"
      },
      avion: null
    },
    madrid: {
      titulo: "Desde Madrid",
      coche: {
        distancia: "600 km",
        tiempo: "5:15h - 5:45h",
        ruta: "Autovía A-6 dirección A Coruña, luego A-8 dirección Vilalba/Ferrol/Oviedo"
      },
      avion: [
        {
          aeropuerto: "Aeropuerto de Asturias",
          vuelo: "50 min vuelo",
          distanciaFoz: "115 km",
          tiempoFoz: "1:10h"
        },
        {
          aeropuerto: "Aeropuerto de A Coruña",
          vuelo: "60 min vuelo",
          distanciaFoz: "145 km",
          tiempoFoz: "1:25h"
        }
      ]
    },
    cuenca: {
      titulo: "Desde Cuenca",
      coche: {
        distancia: "770 km",
        tiempo: "6:30h - 7:00h",
        ruta: "Vía Madrid: A-40 → A-6 dirección A Coruña → A-8"
      },
      avion: [
        {
          aeropuerto: "Aeropuerto de Asturias (vía Madrid)",
          vuelo: "50 min vuelo",
          distanciaFoz: "115 km",
          tiempoFoz: "1:10h"
        },
        {
          aeropuerto: "Aeropuerto de A Coruña (vía Madrid)",
          vuelo: "60 min vuelo",
          distanciaFoz: "145 km",
          tiempoFoz: "1:25h"
        }
      ]
    }
  }

  const rutaActiva = rutas[activeTab]

  return (
    <section id="como-llegar" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="section-title text-primary-800">
          ¿Cómo llegar al paraíso?
        </h2>

        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Como todo lo bonito y salvaje se mantiene alejado, aquí tenéis las formas
          más sencillas de llegar a Foz.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Object.entries(rutas).map(([key, ruta]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === key
                  ? 'bg-primary-600 text-white'
                  : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
              }`}
            >
              {ruta.titulo}
            </button>
          ))}
        </div>

        {/* Contenido */}
        <div className="bg-primary-50 rounded-2xl p-6 md:p-8">
          <h3 className="font-display text-xl text-primary-800 mb-6">{rutaActiva.titulo}</h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* En coche */}
            <div className="bg-white rounded-xl p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8m-8 5h8m-4 7v-3m-8 3h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-800">En coche</h4>
              </div>

              <div className="space-y-2 text-sm">
                <p className="flex justify-between">
                  <span className="text-gray-500">Distancia:</span>
                  <span className="font-medium text-gray-700">{rutaActiva.coche.distancia}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-500">Tiempo:</span>
                  <span className="font-medium text-gray-700">{rutaActiva.coche.tiempo}</span>
                </p>
                <p className="text-gray-600 mt-3 pt-3 border-t border-gray-100">
                  {rutaActiva.coche.ruta}
                </p>
              </div>
            </div>

            {/* En avión */}
            {rutaActiva.avion && (
              <div className="bg-white rounded-xl p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-gray-800">En avión</h4>
                </div>

                <div className="space-y-4">
                  {rutaActiva.avion.map((opcion, index) => (
                    <div key={index} className="text-sm">
                      <p className="font-medium text-gray-700 mb-1">{opcion.aeropuerto}</p>
                      <p className="text-gray-500">Vuelo: {opcion.vuelo}</p>
                      <p className="text-gray-500">A Foz: {opcion.distanciaFoz} ({opcion.tiempoFoz} en coche)</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {!rutaActiva.avion && (
              <div className="bg-white rounded-xl p-5 flex items-center justify-center">
                <p className="text-gray-500 text-sm text-center">
                  Desde Bilbao/Getxo lo más práctico es ir en coche por la A-8 bordeando la costa.
                  ¡El paisaje merece la pena!
                </p>
              </div>
            )}
          </div>

          {/* Recomendación */}
          {rutaActiva.avion && (
            <div className="mt-6 bg-primary-100 rounded-xl p-4 text-center">
              <p className="text-primary-700 text-sm">
                <strong>Recomendación:</strong> Alquiler de coche en el aeropuerto o BlaBlaCar a Foz.
                <br />
                ¡Reservando vuelos con antelación hay muy buenos precios!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ComoLlegar
