"use client"

import { useState } from "react"
import { Copy, Check, Gift } from "lucide-react"
import Image from "next/image"
import { toast } from "@/hooks/use-toast"

export default function RecommendationsSection() {
  const [copiedCasino, setCopiedCasino] = useState<string | null>(null)

  const copyToClipboard = (code: string, casinoId: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCasino(casinoId)

    // Show toast notification
    toast({
      title: "Kod skopiowany!",
      description: `Kod "${code}" został skopiowany do schowka.`,
      duration: 2000,
    })

    setTimeout(() => setCopiedCasino(null), 2000)
  }

  const casinos = [
    {
      id: "casino1",
      name: "VAVADA CASINO",
      badge: "OFERTA #1",
      code: "KRAKEN",
      bonus: "100% BONUS + 100 FS",
      freeSpins: "przy pierwszym depozycie",
      features: [
        "100% bonus od pierwszego depozytu",
        "100 darmowych spinów w zestawie",
        "Cotygodniowy cashback do 10%",
      ],
      colors: "from-[#fa888e] to-[#fa888e]",
      link: "https://partnervada.com/?promo=c13173d1-d532-4273-b323-f04eb4393139&target=register",
      logo: "/images/vavada-logo.png",
      icon: <Gift className="w-6 h-6" />,
    },
  ]

  return (
    <section id="recommendations" className="py-16 pt-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f1a] to-[#1a1a2e]"></div>

      {/* Gradient fade-in at top for smooth transition */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0f0f1a] to-transparent z-10"></div>

      {/* Black & White Slot Machine Background Image with 0.05 opacity */}
      <div className="absolute inset-0 z-5">
        <Image
          src="/images/slot-machine-bw.png"
          alt="Casino Slot Machine Black and White"
          fill
          className="object-cover opacity-5"
          sizes="100vw"
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#fa888e]/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#fa888e]/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 pt-2 md:pt-0">
          <h2 className="text-3xl md:text-5xl font-black mb-6 font-montserrat">
            <span className="text-white">GDZIE WARTO </span>
            <span className="text-[#fa888e]">GRAĆ</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Sprawdzone kasyna z najlepszymi bonusami i promocjami specjalnie dla moich obserwatorów
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Featured Casino - Large Card */}
          <div className="mb-10" id="stake-casino">
            <div className="relative bg-gradient-to-r from-[#fa888e]/10 to-[#fa888e]/10 rounded-3xl p-1 group">
              <div className="bg-[#0f0f1a] rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 relative overflow-hidden transition-all duration-500 group-hover:scale-[1.02] border-2 border-[#fa888e]/30 hover:border-[#fa888e]/60">
                {/* Pink background with reduced opacity */}
                <div
                  className="absolute inset-0 opacity-10 rounded-3xl transition-opacity duration-500 group-hover:opacity-15"
                  style={{
                    backgroundImage: "url('/images/pink-background.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>

                {/* Badge - Hidden on mobile */}
                <div className="absolute top-6 right-6 bg-gradient-to-r from-[#fa888e] to-[#fa888e] text-white px-4 py-2 rounded-full text-sm font-bold z-10 transition-transform duration-300 group-hover:scale-110 pr-6 hidden sm:block">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    {casinos[0].badge}
                  </div>
                </div>

                <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 lg:gap-8 items-center relative z-10">
                  {/* Logo - Top on mobile, Left on desktop */}
                  <div className="flex items-center justify-center order-1 lg:order-1">
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      <Image
                        src={casinos[0].logo || "/placeholder.svg"}
                        alt={casinos[0].name}
                        width={200}
                        height={120}
                        className="object-contain w-auto h-14 sm:h-19 md:h-24 lg:h-28 max-w-full"
                      />
                    </div>
                  </div>

                  {/* Content - Middle on mobile and desktop */}
                  <div className="flex flex-col justify-center order-2 lg:order-2 text-center lg:text-center">
                    <div className="mb-4 lg:mb-6">
                      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#fa888e] mb-2 whitespace-nowrap">
                        {casinos[0].bonus}
                      </div>
                      <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{casinos[0].freeSpins}</div>
                    </div>

                    <div className="space-y-2 lg:space-y-3 mb-4 lg:mb-8">
                      {casinos[0].features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center text-gray-300 justify-center text-sm sm:text-base"
                        >
                          <Check size={16} className="text-[#fa888e] mr-2 lg:mr-3 flex-shrink-0" />
                          <span className="text-center">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Code and Button - Bottom on mobile, Right on desktop */}
                  <div className="text-center order-3 lg:order-3 w-full lg:pr-6">
                    {/* Code Section */}
                    <div className="mb-4 lg:mb-8">
                      <p className="text-white mb-2 lg:mb-3 text-sm lg:text-base">Użyj kodu:</p>
                      <div
                        onClick={() => copyToClipboard(casinos[0].code, casinos[0].id)}
                        className="stake-code-button inline-flex items-center gap-2 lg:gap-3 bg-gradient-to-r from-[#fa888e]/20 to-[#fa888e]/10 backdrop-blur-sm border-2 border-[#fa888e]/50 text-white font-bold py-2 lg:py-3 px-4 lg:px-6 rounded-xl lg:rounded-2xl cursor-pointer transition-all hover:scale-105 hover:border-[#fa888e]/80 hover:shadow-lg hover:shadow-[#fa888e]/20 text-sm lg:text-lg"
                      >
                        <span className="tracking-wider">{casinos[0].code}</span>
                        {copiedCasino === casinos[0].id ? (
                          <Check size={16} className="text-green-400" />
                        ) : (
                          <Copy size={16} className="text-white/70" />
                        )}
                      </div>
                    </div>

                    {/* Button */}
                    <a
                      href={casinos[0].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="stake-bonus-button relative overflow-hidden inline-block bg-gradient-to-r from-[#fa888e] to-[#fa888e]/80 hover:from-[#fa888e]/90 hover:to-[#fa888e] text-white font-black py-3 lg:py-4 px-6 lg:px-10 rounded-xl lg:rounded-2xl text-sm lg:text-base transition-all hover:scale-105 group w-full sm:w-auto"
                    >
                      <span className="relative z-10">ODBIERZ BONUS</span>
                      {/* Animated background overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      {/* Corner highlights */}
                      <div className="absolute top-0 right-0 w-4 h-4 bg-white/30 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 w-4 h-4 bg-white/30 rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mr Punter Casino - Large Card (copied from Vavada) */}
          <div className="mb-10">
            <div className="relative bg-gradient-to-r from-[#fa888e]/10 to-[#fa888e]/10 rounded-3xl p-1 group">
              <div className="bg-[#0f0f1a] rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 relative overflow-hidden transition-all duration-500 group-hover:scale-[1.02] border-2 border-[#fa888e]/30 hover:border-[#fa888e]/60">
                {/* Pink background with reduced opacity */}
                <div
                  className="absolute inset-0 opacity-10 rounded-3xl transition-opacity duration-500 group-hover:opacity-15"
                  style={{
                    backgroundImage: "url('/images/pink-background.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>

                {/* Badge - Hidden on mobile */}
                <div className="absolute top-6 right-6 bg-gradient-to-r from-[#fa888e] to-[#fa888e] text-white px-4 py-2 rounded-full text-sm font-bold z-10 transition-transform duration-300 group-hover:scale-110 pr-6 hidden sm:block">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    OFERTA #2
                  </div>
                </div>

                <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 lg:gap-8 items-center relative z-10">
                  {/* Logo - Top on mobile, Left on desktop */}
                  <div className="flex items-center justify-center order-1 lg:order-1">
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      <Image
                        src="/images/Mr-Punter-logo.png"
                        alt="MR PUNTER"
                        width={180}
                        height={180}
                        className="object-contain w-auto h-14 sm:h-19 md:h-24 lg:h-28 max-w-full"
                      />
                    </div>
                  </div>

                  {/* Content - Middle on mobile and desktop */}
                  <div className="flex flex-col justify-center order-2 lg:order-2 text-center lg:text-center">
                    <div className="mb-4 lg:mb-6">
                      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#fa888e] mb-2 whitespace-nowrap">
                        100% BONUS + 200 FS
                      </div>
                      <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                        przy pierwszym depozycie
                      </div>
                    </div>

                    <div className="space-y-2 lg:space-y-3 mb-4 lg:mb-8">
                      <div className="flex items-center text-gray-300 justify-center text-sm sm:text-base">
                        <Check size={16} className="text-[#fa888e] mr-2 lg:mr-3 flex-shrink-0" />
                        <span className="text-center">100% bonus od pierwszego depozytu</span>
                      </div>
                      <div className="flex items-center text-gray-300 justify-center text-sm sm:text-base">
                        <Check size={16} className="text-[#fa888e] mr-2 lg:mr-3 flex-shrink-0" />
                        <span className="text-center">200 darmowych spinów na start</span>
                      </div>
                      <div className="flex items-center text-gray-300 justify-center text-sm sm:text-base">
                        <Check size={16} className="text-[#fa888e] mr-2 lg:mr-3 flex-shrink-0" />
                        <span className="text-center">Premium wybór slotów</span>
                      </div>
                    </div>
                  </div>

                  {/* Code and Button - Bottom on mobile, Right on desktop */}
                  <div className="text-center order-3 lg:order-3 w-full lg:pr-6">
                    {/* Code Section */}
                    <div className="mb-4 lg:mb-8">
                      <p className="text-white mb-2 lg:mb-3 text-sm lg:text-base">Użyj kodu:</p>
                      <div
                        onClick={() => copyToClipboard("KRAKEN", "casino3")}
                        className="mrpunter-code-button inline-flex items-center gap-2 lg:gap-3 bg-gradient-to-r from-[#fa888e]/20 to-[#fa888e]/10 backdrop-blur-sm border-2 border-[#fa888e]/50 text-white font-bold py-2 lg:py-3 px-4 lg:px-6 rounded-xl lg:rounded-2xl cursor-pointer transition-all hover:scale-105 hover:border-[#fa888e]/80 hover:shadow-lg hover:shadow-[#fa888e]/20 text-sm lg:text-lg"
                      >
                        <span className="tracking-wider">KRAKEN</span>
                        {copiedCasino === "casino3" ? (
                          <Check size={16} className="text-green-400" />
                        ) : (
                          <Copy size={16} className="text-white/70" />
                        )}
                      </div>
                    </div>

                    {/* Button */}
                    <a
                      href="https://mrp.fynkelto.com/?mid=279669_1642495"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mrpunter-bonus-button relative overflow-hidden inline-block bg-gradient-to-r from-[#fa888e] to-[#fa888e]/80 hover:from-[#fa888e]/90 hover:to-[#fa888e] text-white font-black py-3 lg:py-4 px-6 lg:px-10 rounded-xl lg:rounded-2xl text-sm lg:text-base transition-all hover:scale-105 group w-full sm:w-auto"
                    >
                      <span className="relative z-10">ODBIERZ BONUS</span>
                      {/* Animated background overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      {/* Corner highlights */}
                      <div className="absolute top-0 right-0 w-4 h-4 bg-white/30 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 w-4 h-4 bg-white/30 rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
