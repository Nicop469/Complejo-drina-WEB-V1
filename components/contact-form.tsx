"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Clock } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    setIsSubmitting(false)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", message: "" })
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <div className="bg-slate-100 p-8 rounded-xl text-center">
        <div className="w-16 h-16 bg-[#14B8A6] rounded-full flex items-center justify-center mx-auto mb-4">
          <Clock className="h-8 w-8 text-white" />
        </div>
        <h3 className="font-serif font-bold text-xl text-[#14B8A6] mb-2">¡Mensaje enviado!</h3>
        <p className="text-[#0F172A]">Gracias por contactarnos. Respondemos en menos de 24 horas.</p>
      </div>
    )
  }

  return (
    <div>
      <h2 className="font-serif font-bold text-2xl text-[#14B8A6] mb-2">Envíanos un mensaje</h2>
      <div className="flex items-center text-sm text-[#0F172A] mb-6">
        <Clock className="h-4 w-4 mr-2 text-[#14B8A6]" />
        Respondemos en menos de 24 horas
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name" className="text-[#14B8A6] font-medium">
              Nombre *
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 border-slate-200 focus:border-[#14B8A6] focus:ring-[#14B8A6]"
              placeholder="Tu nombre completo"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-[#14B8A6] font-medium">
              Teléfono
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 border-slate-200 focus:border-[#14B8A6] focus:ring-[#14B8A6]"
              placeholder="+56 9 1234 5678"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="email" className="text-[#14B8A6] font-medium">
            Correo electrónico *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 border-slate-200 focus:border-[#14B8A6] focus:ring-[#14B8A6]"
            placeholder="tu@email.com"
          />
        </div>

        <div>
          <Label htmlFor="message" className="text-[#14B8A6] font-medium">
            Mensaje *
          </Label>
          <Textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="mt-1 border-slate-200 focus:border-[#14B8A6] focus:ring-[#14B8A6] resize-none"
            placeholder="Cuéntanos sobre tus fechas de viaje, número de huéspedes y cualquier pregunta que tengas..."
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full modern-cta font-medium py-3 transition-all duration-300 hover:scale-105 disabled:hover:scale-100"
        >
          {isSubmitting ? "Enviando..." : "Enviar mensaje"}
        </Button>
      </form>
    </div>
  )
}
