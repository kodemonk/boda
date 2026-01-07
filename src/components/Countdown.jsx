import { useState, useEffect } from 'react'

function Countdown() {
  const weddingDate = new Date('2026-09-12T12:00:00')

  const calculateTimeLeft = () => {
    const difference = weddingDate - new Date()

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const timeUnits = [
    { value: timeLeft.days, label: 'Días' },
    { value: timeLeft.hours, label: 'Horas' },
    { value: timeLeft.minutes, label: 'Minutos' },
    { value: timeLeft.seconds, label: 'Segundos' },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="section-title text-primary-800">
          Cuenta atrás
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {timeUnits.map((unit) => (
            <div
              key={unit.label}
              className="bg-primary-50 rounded-lg p-6 text-center"
            >
              <span className="block text-4xl md:text-5xl font-display text-primary-700">
                {String(unit.value).padStart(2, '0')}
              </span>
              <span className="text-sm text-gray-600 uppercase tracking-wider mt-2 block">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Countdown
