import type { IconType } from "react-icons"
import { FaReact } from "react-icons/fa" // Added React icon import

type FleetSubSection = {
  title: string
  text: string
  icon?: IconType
}

type FleetProps = {
  fleet?: {
    heading: string
    subSections: FleetSubSection[]
  }
}

export default function FleetSection({ fleet }: any) {
  if (!fleet) return null

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg border border-gray-700">
              <FaReact className="w-8 h-8 text-[#e9ed01] animate-spin" style={{ animationDuration: "3s" }} />
            </div>
          </div>
          <div className="w-24 h-1 bg-[#e9ed01] mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {fleet.subSections.map((s: FleetSubSection, idx: number) => {
            const Icon = s.icon as IconType | undefined
            return (
              <div
                key={idx}
                className="group bg-gray-900 rounded-2xl shadow-2xl hover:shadow-[#e9ed01]/20 hover:shadow-2xl transition-all duration-500 p-8 border border-gray-800 hover:border-[#e9ed01]/50 hover:-translate-y-1"
              >
                {Icon && (
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-700 text-[#e9ed01] mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg border border-gray-600">
                    <Icon className="w-8 h-8" />
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#e9ed01] transition-colors duration-300">
                  {s.title}
                </h3>

                <p className="text-gray-300 leading-relaxed text-lg">{s.text}</p>

                <div className="mt-6 w-12 h-1 bg-[#e9ed01] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
