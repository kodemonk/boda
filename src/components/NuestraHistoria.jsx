function NuestraHistoria() {
  return (
    <section id="historia" className="py-20 bg-primary-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="section-title text-primary-800">
          Nuestra Historia
        </h2>

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
