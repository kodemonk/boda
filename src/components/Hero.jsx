function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative pt-16"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero-pareja.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative text-center px-4 max-w-3xl mx-auto text-white">
        <p className="text-white/90 font-medium tracking-widest uppercase mb-4 text-sm md:text-base">
          ¡Nos vamos de boda!
        </p>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-6 drop-shadow-lg">
          Elvira
          <span className="block text-3xl md:text-4xl lg:text-5xl my-4 text-white/80">
            &
          </span>
          Alejandro
        </h1>

        <div className="w-24 h-px bg-white/50 mx-auto mb-6"></div>

        <p className="text-xl md:text-2xl font-light mb-2 drop-shadow">
          12 de Septiembre de 2026
        </p>

        <p className="text-lg text-white/90 font-medium mb-8">
          Foz, Galifornia
        </p>

        <p className="text-white/80 leading-relaxed mb-8 max-w-xl mx-auto text-sm md:text-base">
          ¡Bienvenidos a nuestra web de boda! Aquí encontraréis toda la información
          sobre nuestro gran día. ¡En nada todos juntos!
        </p>

        <a
          href="#confirmar"
          className="inline-block px-8 py-4 bg-white text-primary-700 rounded-lg font-medium hover:bg-white/90 transition-colors shadow-lg"
        >
          Confirmar asistencia
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
