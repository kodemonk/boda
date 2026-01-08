function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-50 to-white pt-16"
    >
      <div className="text-center px-4 max-w-3xl mx-auto">
        <p className="text-primary-600 font-medium tracking-widest uppercase mb-4">
          ¡Nos vamos de boda!
        </p>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-gray-800 mb-6">
          Elvira
          <span className="block text-3xl md:text-4xl lg:text-5xl text-primary-500 my-4">
            &
          </span>
          Alejandro
        </h1>

        <div className="w-24 h-px bg-primary-300 mx-auto mb-6"></div>

        <p className="text-xl md:text-2xl text-gray-600 font-light mb-2">
          12 de Septiembre de 2026
        </p>

        <p className="text-lg text-primary-600 font-medium mb-8">
          Foz, Galifornia
        </p>

        <p className="text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto">
          ¡Bienvenidos a nuestra web de boda! Aquí encontraréis toda la información
          sobre nuestro gran día. ¡En nada todos juntos!
        </p>

        <a
          href="#confirmar"
          className="inline-block btn-primary"
        >
          Confirmar asistencia
        </a>
      </div>
    </section>
  )
}

export default Hero
