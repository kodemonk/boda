function Alojamientos() {
  const alojamientos = [
    {
      nombre: "Malates Slow Boutique Hotel",
      estrellas: 3,
      imagen: "/images/malates.jpg",
      descripcion: "Alojamiento en una antigua zona de astilleros de ribera a pie de Ría donde los paisajes cambiantes unen mar y tierra en un entorno mágico.",
      detalle: "14 habitaciones con encanto",
      descuento: "15% de descuento",
      codigo: "1team1dream",
      comoReservar: "Usar código al reservar",
      web: "https://malatesboutiquehotel.com",
      destacado: true
    },
    {
      nombre: "Oca Playa Foz Hotel y Spa",
      estrellas: 4,
      imagen: "/images/oca.jpg",
      descripcion: "Hotel ubicado frente a la Playa Rapadoira, con acceso directo al arenal y al paseo costero. Dispone de Spa para relajarse.",
      detalle: "Frente a la playa",
      descuento: "15% de descuento",
      codigo: null,
      comoReservar: "Llamar al hotel y mencionar la boda de Elvira y Alejandro",
      web: "https://www.ocahotels.com/hotel-playa-foz",
      destacado: false
    },
    {
      nombre: "Apartagal",
      estrellas: null,
      imagen: "/images/apartagal.jpg",
      descripcion: "La opción perfecta si buscáis espacio, independencia y sentiros como en casa en Foz. Apartamentos y casas para todos los gustos.",
      detalle: "Apartamentos y casas",
      descuento: "15% de descuento",
      codigo: "1team1dream",
      comoReservar: "Usar código al reservar",
      web: "https://www.apartagal.com",
      destacado: false
    }
  ]

  return (
    <section id="alojamiento" className="py-20 bg-primary-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title text-primary-800">
          Alojamientos
        </h2>

        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Hemos conseguido descuentos especiales para vosotros en estos alojamientos.
          ¡Reservad con tiempo!
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {alojamientos.map((aloj, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col ${
                aloj.destacado ? 'ring-2 ring-primary-500' : ''
              }`}
            >
              {aloj.destacado && (
                <div className="bg-primary-500 text-white text-center py-2 text-sm font-medium">
                  Sede del Banquete
                </div>
              )}

              {/* Imagen */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={aloj.imagen}
                  alt={aloj.nombre}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 flex-grow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-lg text-gray-800">{aloj.nombre}</h3>
                  {aloj.estrellas && (
                    <div className="flex flex-shrink-0 ml-2">
                      {[...Array(aloj.estrellas)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  )}
                </div>

                <p className="text-primary-600 text-sm font-medium mb-3">{aloj.detalle}</p>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {aloj.descripcion}
                </p>

                <div className="bg-green-50 rounded-lg p-3 mb-4">
                  <p className="text-green-700 font-medium text-sm">{aloj.descuento}</p>
                  {aloj.codigo && (
                    <p className="text-green-600 text-xs mt-1">
                      Código: <span className="font-mono font-bold">{aloj.codigo}</span>
                    </p>
                  )}
                  <p className="text-green-600 text-xs mt-1">{aloj.comoReservar}</p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href={aloj.web}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
                >
                  Ver alojamiento
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Alojamientos
