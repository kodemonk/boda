import { useState } from 'react'

function RSVP() {
  const [submitted, setSubmitted] = useState(false)
  const [willAttend, setWillAttend] = useState(null)
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asistencia: '',
    acompanantes: '0',
    nombresAcompanantes: '',
    alergias: '',
    mensaje: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const form = e.target
    const data = new FormData(form)

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString()
      })
      setWillAttend(formData.asistencia === 'si')
      setSubmitted(true)
    } catch (error) {
      alert('Error al enviar. Por favor, inténtalo de nuevo.')
    }
  }

  if (submitted) {
    return (
      <section id="confirmar" className="py-20 bg-primary-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            {willAttend ? (
              <>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display text-gray-800 mb-4">
                  ¡Qué alegría!
                </h3>
                <p className="text-gray-600">
                  Hemos recibido tu confirmación. ¡Nos vemos el 12 de Septiembre!
                </p>
              </>
            ) : (
              <>
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display text-gray-800 mb-4">
                  ¡Qué pena que no puedas venir!
                </h3>
                <p className="text-gray-600">
                  Gracias por avisarnos. Te echaremos de menos en este día tan especial.
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="confirmar" className="py-20 bg-primary-50">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="section-title text-primary-800">
          Confirma tu asistencia
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Por favor, confirma antes del 1 de Agosto de 2026
        </p>

        <form
          name="confirmacion-boda"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-6 md:p-10 shadow-lg space-y-6"
        >
          {/* Hidden fields for Netlify */}
          <input type="hidden" name="form-name" value="confirmacion-boda" />
          <p className="hidden">
            <label>
              No rellenar: <input name="bot-field" />
            </label>
          </p>

          {/* Nombre */}
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
              Nombre completo *
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              value={formData.nombre}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
              placeholder="Tu nombre"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
              placeholder="tu@email.com"
            />
          </div>

          {/* Asistencia */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ¿Podrás asistir? *
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="asistencia"
                  value="si"
                  required
                  checked={formData.asistencia === 'si'}
                  onChange={handleChange}
                  className="w-4 h-4 text-primary-600 focus:ring-primary-500"
                />
                <span>Sí, ¡allí estaré!</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="asistencia"
                  value="no"
                  checked={formData.asistencia === 'no'}
                  onChange={handleChange}
                  className="w-4 h-4 text-primary-600 focus:ring-primary-500"
                />
                <span>No podré asistir</span>
              </label>
            </div>
          </div>

          {/* Campos adicionales si asiste */}
          {formData.asistencia === 'si' && (
            <>
              {/* Acompañantes */}
              <div>
                <label htmlFor="acompanantes" className="block text-sm font-medium text-gray-700 mb-2">
                  ¿Cuántos acompañantes llevarás?
                </label>
                <select
                  id="acompanantes"
                  name="acompanantes"
                  value={formData.acompanantes}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                >
                  <option value="0">Iré solo/a</option>
                  <option value="1">1 acompañante</option>
                  <option value="2">2 acompañantes</option>
                  <option value="3">3 acompañantes</option>
                  <option value="4">4 o más</option>
                </select>
              </div>

              {/* Nombres acompañantes */}
              {formData.acompanantes !== '0' && (
                <div>
                  <label htmlFor="nombresAcompanantes" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombres de los acompañantes
                  </label>
                  <input
                    type="text"
                    id="nombresAcompanantes"
                    name="nombresAcompanantes"
                    value={formData.nombresAcompanantes}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                    placeholder="Nombres separados por comas"
                  />
                </div>
              )}

              {/* Alergias */}
              <div>
                <label htmlFor="alergias" className="block text-sm font-medium text-gray-700 mb-2">
                  Alergias o restricciones alimentarias
                </label>
                <input
                  type="text"
                  id="alergias"
                  name="alergias"
                  value={formData.alergias}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                  placeholder="Celiaco, vegetariano, alergia a frutos secos..."
                />
              </div>
            </>
          )}

          {/* Mensaje */}
          <div>
            <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
              ¿Quieres dejarnos un mensaje?
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={3}
              value={formData.mensaje}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition resize-none"
              placeholder="Tu mensaje para los novios..."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full btn-primary text-lg py-4"
          >
            Enviar confirmación
          </button>
        </form>
      </div>
    </section>
  )
}

export default RSVP
