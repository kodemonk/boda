function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-50 to-white pt-16"
    >
      <div className="text-center px-4">
        <p className="text-primary-600 font-medium tracking-widest uppercase mb-4">
          Nos casamos
        </p>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-gray-800 mb-6">
          Alejandro
          <span className="block text-3xl md:text-4xl lg:text-5xl text-primary-500 my-4">
            &
          </span>
          Elvira
        </h1>

        <div className="w-24 h-px bg-primary-300 mx-auto mb-6"></div>

        <p className="text-xl md:text-2xl text-gray-600 font-light">
          12 de Septiembre de 2026
        </p>

        <a
          href="#confirmar"
          className="inline-block mt-8 btn-primary"
        >
          Confirmar asistencia
        </a>
      </div>
    </section>
  )
}

export default Hero
