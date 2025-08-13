import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif font-bold text-xl text-[#14B8A6] mb-4">Complejo Drina</h3>
            <p className="text-[#B6D7F2] text-sm">Departamentos equipados frente al mar. Tu hogar lejos de casa.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">Enlaces rápidos</h4>
            <div className="space-y-2 text-sm">
              <Link href="/" className="block text-[#B6D7F2] hover:text-white transition-colors">
                Inicio
              </Link>
              <Link href="/habitacion-4-personas" className="block text-[#B6D7F2] hover:text-white transition-colors">
                Habitación 4 personas
              </Link>
              <Link href="/habitacion-6-personas" className="block text-[#B6D7F2] hover:text-white transition-colors">
                Habitación 6 personas
              </Link>
              <Link href="/contacto" className="block text-[#B6D7F2] hover:text-white transition-colors">
                Contacto
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-medium mb-4">Información legal</h4>
            <div className="space-y-2 text-sm">
              <Link href="#" className="block text-[#B6D7F2] hover:text-white transition-colors">
                Política de cancelación
              </Link>
              <Link href="#" className="block text-[#B6D7F2] hover:text-white transition-colors">
                Política de privacidad
              </Link>
              <Link href="#" className="block text-[#B6D7F2] hover:text-white transition-colors">
                Términos y condiciones
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-[#B6D7F2] border-opacity-30 mt-8 pt-8 text-center text-sm text-[#B6D7F2]">
          <p>&copy; 2024 Complejo Drina. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
