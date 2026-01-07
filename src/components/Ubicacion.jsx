function Ubicacion() {
  return (
    <section id="boda" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title text-primary-800">
          La Boda
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Info de la ceremonia */}
          <div className="space-y-8">
            {/* Ceremonia */}
            <div className="bg-primary-50 rounded-2xl p-6 md:p-8">
              <h3 className="font-display text-2xl text-primary-800 mb-4">
                La Ceremonia
              </h3>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>
                    <strong>Basílica de San Martiño de Mondoñedo</strong><br />
                    Foz, Lugo (Galicia)
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>
                    <strong>12 de Septiembre de 2026</strong><br />
                    12:00 horas
                  </span>
                </p>
              </div>
            </div>

            {/* Sobre Foz */}
            <div>
              <h3 className="font-display text-xl text-primary-800 mb-3">
                Sobre Foz
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Foz es una encantadora villa marinera situada en la costa de la provincia de Lugo,
                en la comarca de A Mariña. Bañada por las aguas del Mar Cantábrico y en la
                desembocadura del río Masma, su historia se remonta a tiempos prerromanos.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Durante los siglos XVI y XVII, Foz albergó uno de los tres astilleros más importantes
                de Galicia, dedicándose sus marineros principalmente a la caza de ballenas. Hoy en día,
                sus playas de finas arenas blancas, como la famosa Rapadoira, y sus 25 km de litoral
                la convierten en un destino turístico muy apreciado.
              </p>
            </div>

            {/* Sobre la Basílica */}
            <div>
              <h3 className="font-display text-xl text-primary-800 mb-3">
                La Basílica de San Martiño
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                La Basílica de San Martiño de Mondoñedo está considerada <strong>la catedral más
                antigua de España</strong>. En el siglo IX fue sede episcopal, acogiendo a dos
                obispados del reino de Galicia que huían de las invasiones vikingas y musulmanas.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Aunque el templo actual data de finales del siglo XI, sus orígenes se remontan a un
                antiguo cenobio del siglo VI. Su arquitectura románico-lombarda es muy poco habitual
                en el noroeste peninsular, con tres naves y tres ábsides semicirculares decorados
                con arquillos ciegos.
              </p>
              <p className="text-gray-600 leading-relaxed">
                San Rosendo, uno de los santos más venerados de Galicia, fue obispo aquí entre
                los años 925 y 947. Durante su restauración en 2008 se descubrieron los frescos
                románicos más antiguos de Galicia, del siglo XII.
              </p>
            </div>
          </div>

          {/* Mapa */}
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.5!2d-7.2597!3d43.5605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd31bbf3f3f3f3f3%3A0x1234567890abcdef!2sMalates%20Slow%20Boutique%20Hotel!5e0!3m2!1ses!2ses!4v1699999999999!5m2!1ses!2ses"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del Hotel Malates, Foz"
                className="w-full"
              />
            </div>

            <a
              href="https://www.google.com/maps/dir//Malates+Slow+Boutique+Hotel,+Rúa+Asteleiros+7,+27780+Foz,+Lugo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Cómo llegar
            </a>

            {/* Imagen decorativa */}
            <div className="bg-primary-100 rounded-2xl p-6 text-center">
              <p className="text-primary-700 italic font-display text-lg">
                "La catedral más antigua de España, testigo de más de mil años de historia"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ubicacion
