import { Check } from "lucide-react"

interface RoomFeaturesProps {
  features: string[]
}

export function RoomFeatures({ features }: RoomFeaturesProps) {
  return (
    <div>
      <h2 className="font-serif font-bold text-2xl text-[#0F172A] mb-6">Características</h2>
      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <div className="flex-shrink-0 w-5 h-5 bg-[#14B8A6] rounded-full flex items-center justify-center mt-0.5 mr-3">
              <Check className="h-3 w-3 text-white" />
            </div>
            <span className="text-[#0F172A]">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
