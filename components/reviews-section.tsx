import { Star } from "lucide-react"

const reviews = [
  {
    name: "Pablo Andrés",
    rating: 5,
    date: "Febrero 2025",
    comment: "Excelente lugar y con una muy buena atención, todo hermoso y con precios muy accesibles.",
  },
  {
    name: "Lucio Nievas",
    rating: 5,
    date: "Marzo 2025",
    comment: "Nos encantó. La calidez de Milena le suma mil puntos. Vamos a volver.",
  },
  {
    name: "Cátedra Desiderio",
    rating: 5,
    date: "Enero 2025",
    comment: "Todo excelente y la atención muy cálida!!!!",
  },
  {
    name: "Flor Abraham",
    rating: 5,
    date: "Enero 2024",
    comment: "Excelente en todos los aspectos, todo muy lindo, hermosa atención y excelente ubicación! Gracias ❤️",
  },
  {
    name: "Gustavo Castro",
    rating: 5,
    date: "Febrero 2024",
    comment:
      "Muy buen lugar, destacamos la atención de Milena, predispuesta a dar calidad. Un lugar tranquilo y ordenado.",
  },
  {
    name: "María Verónica",
    rating: 5,
    date: "Enero 2024",
    comment:
      "Excelente atención de Milena y su esposo! Lugar tranquilo, totalmente renovado, el personal que les colabora, muy atentos y serviciales! Volveremos!!",
  },
]

export function ReviewsSection() {
  const averageRating = 4.6

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#0F172A] mb-4">Reseñas reales</h2>

          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-[#14B8A6] text-[#14B8A6]" />
              ))}
            </div>
            <span className="ml-2 text-2xl font-bold text-[#0F172A]">{averageRating}</span>
            <span className="ml-1 text-[#0F172A]">/ 5</span>
          </div>

          <p className="text-lg text-[#0F172A]">Basado en más de 50 reseñas verificadas</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-slate-100 p-6 rounded-2xl cozy-card">
              <div className="flex items-center mb-3">
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#14B8A6] text-[#14B8A6]" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-[#0F172A]">{review.date}</span>
              </div>

              <p className="text-[#0F172A] mb-3 italic">"{review.comment}"</p>

              <p className="font-medium text-[#0F172A]">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
