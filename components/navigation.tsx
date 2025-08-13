"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0]">
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="font-bold text-2xl text-[#14B8A6] tracking-tight">
            Complejo Drina
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/" className="text-[#0F172A] hover:text-[#14B8A6] transition-colors font-medium">
              Inicio
            </Link>
            <Link
              href="/habitacion-4-personas"
              className="text-[#0F172A] hover:text-[#14B8A6] transition-colors font-medium"
            >
              4 personas
            </Link>
            <Link
              href="/habitacion-6-personas"
              className="text-[#0F172A] hover:text-[#14B8A6] transition-colors font-medium"
            >
              6 personas
            </Link>
            <Link href="/contacto" className="text-[#0F172A] hover:text-[#14B8A6] transition-colors font-medium">
              Contacto
            </Link>
            <button
              data-be-url="https://hotels.cloudbeds.com/reservation/S3GnS9"
              style={{
                backgroundColor: "#14B8A6",
                color: "white",
                fontWeight: "600",
                padding: "12px 32px",
                borderRadius: "16px",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#0f766e"
                e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#14B8A6"
                e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
              }}
            >
              Reservar
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 text-[#0F172A] rounded-2xl hover:bg-slate-100 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-[#E2E8F0] modern-surface rounded-t-none">
            <div className="flex flex-col space-y-6 px-2">
              <Link
                href="/"
                className="text-[#0F172A] hover:text-[#14B8A6] transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/habitacion-4-personas"
                className="text-[#0F172A] hover:text-[#14B8A6] transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                4 personas
              </Link>
              <Link
                href="/habitacion-6-personas"
                className="text-[#0F172A] hover:text-[#14B8A6] transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                6 personas
              </Link>
              <Link
                href="/contacto"
                className="text-[#0F172A] hover:text-[#14B8A6] transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
              <button
                data-be-url="https://hotels.cloudbeds.com/reservation/S3GnS9"
                style={{
                  backgroundColor: "#14B8A6",
                  color: "white",
                  fontWeight: "600",
                  padding: "16px",
                  borderRadius: "16px",
                  border: "none",
                  cursor: "pointer",
                  width: "100%",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
              >
                Reservar ahora
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
