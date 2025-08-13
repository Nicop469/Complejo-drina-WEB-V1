export function OwnerInfo() {
  return (
    <section className="py-16 bg-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl text-[#0F172A] mb-4">Conoce a los propietarios</h2>
          <p className="text-lg text-[#0F172A]">La familia detrás de Complejo Drina</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Owner 1 */}
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
              <img src="/ezequiel-picardo.jpeg" alt="Ezequiel Picardo" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-serif font-bold text-xl text-[#0F172A] mb-2">Ezequiel Picardo</h3>
            <p className="text-[#0F172A] leading-relaxed">
              Fue el encargado de remodelar y darle vida al complejo. Su visión y dedicación transformaron este lugar en
              el refugio perfecto para quienes buscan descanso y comodidad frente al mar. Esposo de Milena.
            </p>
          </div>

          {/* Owner 2 */}
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
              <img src="/milena-artero.jpeg" alt="Milena Artero" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-serif font-bold text-xl text-[#0F172A] mb-2">Milena Artero</h3>
            <p className="text-[#0F172A] leading-relaxed">
              Anfitriona del lugar y esposa de Ezequiel, se encarga de darle la mejor experiencia a los huéspedes con
              atención de primera clase. Su calidez y dedicación hacen que cada estadía sea memorable.
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-[#0F172A] italic">
            "Nuestro objetivo es simple: que vivas la mejor experiencia de vacaciones frente al mar, con la comodidad y
            calidez de un hogar."
          </p>
        </div>
      </div>
    </section>
  )
}
