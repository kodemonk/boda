function Ubicacion() {
  return (
    <section id="boda" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title text-primary-800">
          La Boda
        </h2>

        {/* Timeline de eventos */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Ceremonia */}
          <div className="bg-primary-50 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-xl text-primary-800">Ceremonia</h3>
                <p className="text-primary-600 font-medium">13:30 h</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>Basílica de San Martiño de Mondoñedo</strong>
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              La catedral más antigua de España, testigo de más de mil años de historia.
              Un templo románico único del siglo XI con frescos del siglo XII.
            </p>
          </div>

          {/* Celebración */}
          <div className="bg-primary-50 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-xl text-primary-800">Recepción y Celebración</h3>
                <p className="text-primary-600 font-medium">15:00 h</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>Malates Slow Boutique Hotel</strong>
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Una antigua zona de astilleros de ribera a pie de Ría donde los paisajes
              cambiantes unen mar y tierra en un entorno mágico.
            </p>
          </div>
        </div>

        {/* Dress Code y Autobuses */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Dress Code */}
          <div className="bg-white border-2 border-primary-200 rounded-2xl p-6 md:p-8">
            <h3 className="font-display text-xl text-primary-800 mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              Dress Code: Etiqueta de día
            </h3>

            <div className="space-y-4">
              <div>
                <p className="font-medium text-gray-800 mb-2">Para ellas:</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• ¡Tocados y sombreros súper bienvenidos!</li>
                  <li className="text-primary-600 font-medium">
                    • Importante: habrá césped → mejor cuñas o tacones anchos
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-gray-800 mb-2">Para ellos:</p>
                <ul className="text-gray-600 text-sm">
                  <li>• Traje / Chaqué</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Autobuses */}
          <div className="bg-white border-2 border-primary-200 rounded-2xl p-6 md:p-8">
            <h3 className="font-display text-xl text-primary-800 mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
              Autobuses a la Ceremonia
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="bg-primary-100 text-primary-700 font-medium px-3 py-1 rounded-full text-sm whitespace-nowrap">
                  12:45 h
                </span>
                <p className="text-gray-600 text-sm">
                  Salida desde <strong>Malates Slow Boutique Hotel</strong>
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="bg-primary-100 text-primary-700 font-medium px-3 py-1 rounded-full text-sm whitespace-nowrap">
                  13:00 h
                </span>
                <p className="text-gray-600 text-sm">
                  Salida desde <strong>Hotel Playa de Foz</strong>
                </p>
              </div>
            </div>

            <p className="text-gray-500 text-xs mt-4 italic">
              Indica en el formulario de confirmación si necesitas transporte
            </p>
          </div>
        </div>

        {/* Celebración solo adultos */}
        <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 md:p-8 mb-12 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center">
              <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <h3 className="font-display text-xl text-amber-800 mb-3">
            Celebración solo para adultos
          </h3>
          <p className="text-amber-700 max-w-lg mx-auto leading-relaxed">
            Queremos que todos disfrutéis al máximo de este día, por lo que hemos decidido que sea una
            <strong> celebración exclusivamente para adultos</strong>. Esperamos contar con vuestra comprensión.
          </p>
        </div>

        {/* Mapa */}
        <div className="bg-primary-50 rounded-2xl p-6 md:p-8">
          <h3 className="font-display text-xl text-primary-800 mb-6 text-center">
            Ubicación del Banquete
          </h3>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.5!2d-7.2597!3d43.5605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd31bbf3f3f3f3f3%3A0x1234567890abcdef!2sMalates%20Slow%20Boutique%20Hotel!5e0!3m2!1ses!2ses!4v1699999999999!5m2!1ses!2ses"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del Hotel Malates, Foz"
                className="w-full"
              />
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-800 mb-1">Malates Slow Boutique Hotel</h4>
                <p className="text-gray-600 text-sm">Rúa Asteleiros 7, 27780 Foz, Lugo</p>
              </div>

              <a
                href="https://www.google.com/maps/dir//Malates+Slow+Boutique+Hotel,+Rúa+Asteleiros+7,+27780+Foz,+Lugo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Cómo llegar
              </a>

              <p className="text-gray-600 text-sm leading-relaxed">
                Una antigua zona de astilleros de ribera a pie de Ría donde los paisajes
                cambiantes unen mar y tierra en un entorno mágico.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ubicacion
