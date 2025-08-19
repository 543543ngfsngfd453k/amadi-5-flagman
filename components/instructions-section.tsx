"use client"

import { Wifi, Shield, Info, Copy, Check, Rocket, Globe } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function InstructionsSection() {
  const [copiedDNS, setCopiedDNS] = useState<string | null>(null)

  const copyDNS = (dns: string) => {
    navigator.clipboard.writeText(dns).then(() => {
      setCopiedDNS(dns)
      setTimeout(() => setCopiedDNS(null), 2000)
    })
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* New gradient background */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/top-section-back.png" alt="Gradient Background" fill className="object-cover" priority />
        {/* Dark overlay for content visibility - 70% opacity */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12 lg:mb-16 px-4">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 lg:px-6 py-2 lg:py-3 mb-4 lg:mb-6 border border-white/20">
            <Rocket className="w-4 lg:w-5 h-4 lg:h-5 text-[#fa888e]" />
            <span className="text-white font-semibold text-sm lg:text-base">Dostęp bez ograniczeń</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 lg:mb-6 font-montserrat">
            <span className="text-white">INSTRUKCJE</span>
            <br />
            <span className="text-[#fa888e]">DOSTĘPU</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Omiń blokady dostawcy internetu i uzyskaj pełny dostęp do najlepszych kasyn online
          </p>
        </div>

        {/* Methods Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-4xl lg:max-w-6xl mx-auto mb-12 lg:mb-16 px-4">
          {/* DNS Method - Enhanced Design */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#fa888e]/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>

            <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl p-6 lg:p-8 border border-white/20 hover:border-[#fa888e]/50 transition-all duration-500 group-hover:transform group-hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#fa888e]/30">
              {/* Method Badge */}
              <div className="absolute -top-4 left-8">
                <div className="bg-gradient-to-r from-[#fa888e] to-[#fa888e]/80 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  <div className="flex items-center gap-2">
                    <Wifi size={16} />
                    <span>METODA #1</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#fa888e] to-[#fa888e]/70 flex items-center justify-center shadow-xl">
                    <Globe size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-white mb-1">DNS</h3>
                    <p className="text-[#fa888e] font-semibold">Zmiana serwerów DNS</p>
                  </div>
                </div>

                {/* Description */}
                <div className="bg-white/5 rounded-2xl p-6 mb-6 border border-white/10">
                  <p className="text-white/90 leading-relaxed mb-4">
                    Najprostsze rozwiązanie - zmień domyślne serwery DNS na Cloudflare. Możesz to zrobić w ustawieniach
                    routera lub indywidualnie na urządzeniu.
                  </p>
                  <div className="flex items-center gap-2 text-[#fa888e] text-sm font-semibold">
                    <Check size={16} />
                    <span>Szybkie i bezpłatne</span>
                  </div>
                </div>

                {/* DNS Servers */}
                <div className="space-y-3">
                  <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                    <Rocket size={16} className="text-[#fa888e]" />
                    Serwery Cloudflare:
                  </h4>

                  {["1.1.1.1", "1.0.0.1"].map((dns) => (
                    <div
                      key={dns}
                      onClick={() => copyDNS(dns)}
                      className="group/dns flex items-center justify-between bg-gradient-to-r from-white/10 to-white/5 hover:from-[#fa888e]/20 hover:to-[#fa888e]/10 p-4 rounded-xl cursor-pointer transition-all duration-300 border border-white/10 hover:border-[#fa888e]/30"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-[#fa888e] rounded-full animate-pulse"></div>
                        <span className="text-white font-mono text-lg font-bold">{dns}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        {copiedDNS === dns ? (
                          <>
                            <Check size={18} className="text-green-400" />
                            <span className="text-green-400 font-bold text-sm">Skopiowano!</span>
                          </>
                        ) : (
                          <>
                            <Copy
                              size={18}
                              className="text-white/70 group-hover/dns:text-[#fa888e] transition-colors"
                            />
                            <span className="text-white/70 group-hover/dns:text-white text-sm">Kopiuj</span>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* VPN Method - Enhanced Design */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>

            <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl p-6 lg:p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-500 group-hover:transform group-hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/30">
              {/* Method Badge */}
              <div className="absolute -top-4 left-8">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  <div className="flex items-center gap-2">
                    <Shield size={16} />
                    <span>METODA #2</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-xl">
                    <Shield size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-white mb-1">VPN</h3>
                    <p className="text-blue-400 font-semibold">Wirtualna sieć prywatna</p>
                  </div>
                </div>

                {/* Description */}
                <div className="bg-white/5 rounded-2xl p-6 mb-6 border border-white/10">
                  <p className="text-white/90 leading-relaxed mb-4">
                    VPN szyfruje połączenie i zmienia lokalizację IP, pozwalając ominąć blokady regionalne i zwiększyć
                    prywatność.
                  </p>
                  <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold">
                    <Check size={16} />
                    <span>Maksymalna prywatność</span>
                  </div>
                </div>

                {/* VPN Providers */}
                <div className="space-y-3">
                  <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                    <Rocket size={16} className="text-blue-400" />
                    Popularne dostawcy:
                  </h4>

                  {["NordVPN", "Surfshark", "ProtonVPN"].map((provider, index) => (
                    <div
                      key={provider}
                      className="flex items-center gap-3 bg-gradient-to-r from-white/10 to-white/5 p-4 rounded-xl border border-white/10"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <span className="text-white font-semibold">{provider}</span>
                      <div className="ml-auto">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info Section - Mobile centered, Desktop horizontal */}
        <div className="max-w-4xl lg:max-w-6xl mx-auto mt-16">
          {/* Mobile Layout - Centered */}
          <div className="flex flex-col items-center text-center md:hidden gap-4">
            <div className="flex items-center gap-4">
              <div className="w-[50.4px] h-[50.4px] rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <Info size={25.2} className="text-white" />
              </div>
              <h3 className="text-[21px] font-black text-white font-montserrat">WAŻNE INFORMACJE</h3>
            </div>
            <div className="space-y-2 max-w-lg">
              <p className="text-white/90 text-base leading-relaxed">
                Ta strona prezentuje informacje o ekskluzywnych kasynach i zawiera linki afiliacyjne przeznaczone
                wyłącznie dla osób w regionach, gdzie hazard online jest legalny.
              </p>
              <p className="text-white/90 text-base leading-relaxed">
                Użytkownicy są odpowiedzialni za zgodność z lokalnymi przepisami. Nie wspieramy nielegalnych form
                hazardu.
              </p>
            </div>
          </div>

          {/* Desktop Layout - Horizontal */}
          <div className="hidden md:flex flex-row items-start md:items-center gap-8">
            <div className="flex items-center gap-6 flex-shrink-0 mb-4 md:mb-0">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <Info size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-black text-white font-montserrat">WAŻNE INFORMACJE</h3>
            </div>
            <div className="space-y-2 flex-grow max-w-none pl-8">
              <p className="text-white/90 text-base leading-relaxed pr-0 md:pr-12">
                Ta strona prezentuje informacje o ekskluzywnych kasynach i zawiera linki afiliacyjne przeznaczone
                wyłącznie dla osób w regionach, gdzie hazard online jest legalny.
              </p>
              <p className="text-white/90 text-base leading-relaxed pr-0 md:pr-12">
                Użytkownicy są odpowiedzialni za zgodność z lokalnymi przepisami. Nie wspieramy nielegalnych form
                hazardu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
