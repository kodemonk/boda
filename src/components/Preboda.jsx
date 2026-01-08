function Preboda() {
  return (
    <section id="preboda" className="py-20 bg-gradient-to-b from-primary-100 to-primary-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="section-title text-primary-800">
          Pre-boda
        </h2>

        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg text-center">
          <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>

          <h3 className="font-display text-2xl text-primary-800 mb-4">
            Viernes 11 de Septiembre
          </h3>

          <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto">
            Tanto para los que venís desde País Vasco y llegáis al Aeropuerto de Asturias,
            de camino a Foz (20 minutos en coche) encontraréis <strong>Tapia de Casariego</strong>,
            el pueblo que os va a hacer conectar con vosotros mismos, la naturaleza y entre
            todos nosotros.
          </p>

          <div className="bg-primary-50 rounded-xl p-6 mb-6">
            <p className="text-primary-700 italic mb-2">
              No os desvelaremos más detalles... ¡así es sorpresa!
            </p>
          </div>

          <div className="inline-flex items-center gap-3 bg-primary-600 text-white px-6 py-4 rounded-xl">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div className="text-left">
              <p className="font-medium">¡Quedamos en el muelle de Tapia!</p>
              <p className="text-primary-200 text-sm">19:00 h</p>
            </div>
          </div>

          <p className="text-gray-500 text-sm mt-6">
            Tapia de Casariego, Asturias
          </p>
        </div>

        {/* Planes en A Mariña */}
        <div className="mt-12 bg-white rounded-2xl p-6 md:p-8 shadow-lg">
          <h3 className="font-display text-xl text-primary-800 mb-4 text-center">
            Planes en "A Mariña"
          </h3>

          <p className="text-gray-600 text-center mb-6">
            Si os planteáis venir unos días antes o quedaros después de la boda,
            ¡la zona tiene mucho que ofrecer!
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: "🏖️", titulo: "Playas", texto: "Rapadoira, As Catedrais, Arealonga..." },
              { icon: "🏛️", titulo: "Patrimonio", texto: "Castro de Fazouro, Mondoñedo, Ribadeo..." },
              { icon: "🍽️", titulo: "Gastronomía", texto: "Mariscos, empanadas, vinos de la tierra..." },
              { icon: "🚶", titulo: "Rutas", texto: "Camino de Santiago del Norte, senderos costeros..." },
              { icon: "🌊", titulo: "Surf", texto: "Playas con buenas olas para todos los niveles" },
              { icon: "📸", titulo: "Miradores", texto: "Vistas espectaculares al Cantábrico" }
            ].map((plan, index) => (
              <div key={index} className="bg-primary-50 rounded-xl p-4 text-center">
                <span className="text-2xl mb-2 block">{plan.icon}</span>
                <h4 className="font-medium text-gray-800 text-sm mb-1">{plan.titulo}</h4>
                <p className="text-gray-600 text-xs">{plan.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Preboda
