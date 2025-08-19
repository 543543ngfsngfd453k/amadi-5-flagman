"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Copy, Wifi, Shield } from "lucide-react"
import { useState } from "react"

export default function InstructionsPage() {
  const [copySuccess, setCopySuccess] = useState<string | null>(null)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopySuccess(text)
        setTimeout(() => setCopySuccess(null), 2000)
      },
      (err) => {
        console.error("Could not copy text: ", err)
      },
    )
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0">
        <Image src="/images/gradient-bg.jpeg" alt="Background" fill className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-[#0f0f1a]/90"></div>
      </div>

      <div className="relative z-10 pt-20 pb-16">
        <div className="container mx-auto px-4 py-8 md:py-16 max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black mb-6 font-montserrat">
              <span className="gradient-text">INSTRUKCJE</span>
              <br />
              <span className="text-white">DOSTĘPU</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Jak Obejść Ograniczenia Dostawcy Internetu
            </p>
          </div>

          {/* Methods title */}
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 font-montserrat">
            Dwie Metody na <span className="gradient-text">Ominięcie</span> Ograniczeń
          </h2>

          {/* Two methods grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* DNS Method */}
            <div className="relative group">
              <div className="relative glass-effect rounded-3xl p-8 border-2 border-[#ff6b9d]/30 hover:border-[#ff6b9d]/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,107,157,0.3)] h-full">
                {/* Number indicator with icon */}
                <div className="absolute top-6 left-6 bg-gradient-to-r from-[#ff6b9d] to-[#9d7bff] text-white font-bold text-xl w-16 h-16 flex items-center justify-center rounded-full z-20">
                  <Wifi size={24} />
                </div>

                <div className="pt-20">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl md:text-4xl font-black mb-3 font-montserrat">
                      <span className="gradient-text">DNS</span>
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-[#ff6b9d] to-[#9d7bff] mx-auto rounded-full"></div>
                  </div>

                  <div>
                    <p className="text-gray-200 mb-4 text-base leading-relaxed">
                      Najprostszym rozwiązaniem w tej sytuacji jest zmiana domyślnych serwerów DNS na inne. Można to
                      zrobić bezpośrednio w ustawieniach routera – wtedy każde urządzenie podłączone do sieci
                      automatycznie skorzysta z nowego DNS – lub indywidualnie na wybranym urządzeniu.
                    </p>

                    <p className="text-gray-200 mb-6 text-base leading-relaxed">
                      Po takiej zmianie, w zdecydowanej większości przypadków, korzystanie z VPN nie będzie już
                      konieczne.
                    </p>

                    <div className="bg-[#0f0f1a]/80 backdrop-blur-sm rounded-xl p-5 border border-[#ff6b9d]/20">
                      <h4 className="text-white font-bold mb-3 text-base">Rekomendowane DNS (Cloudflare):</h4>
                      <div className="space-y-2">
                        <div
                          className="flex items-center justify-between cursor-pointer hover:bg-[#ff6b9d]/10 p-2 rounded-lg transition-colors group"
                          onClick={() => copyToClipboard("1.1.1.1")}
                        >
                          <span className="text-white font-mono text-base">1.1.1.1</span>
                          <div className="flex items-center">
                            <Copy size={16} className="text-[#ff6b9d] group-hover:scale-110 transition-transform" />
                            {copySuccess === "1.1.1.1" && (
                              <span className="text-green-400 ml-2 font-bold text-sm">Skopiowano!</span>
                            )}
                          </div>
                        </div>
                        <div
                          className="flex items-center justify-between cursor-pointer hover:bg-[#ff6b9d]/10 p-2 rounded-lg transition-colors group"
                          onClick={() => copyToClipboard("1.0.0.1")}
                        >
                          <span className="text-white font-mono text-base">1.0.0.1</span>
                          <div className="flex items-center">
                            <Copy size={16} className="text-[#ff6b9d] group-hover:scale-110 transition-transform" />
                            {copySuccess === "1.0.0.1" && (
                              <span className="text-green-400 ml-2 font-bold text-sm">Skopiowano!</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* VPN Method */}
            <div className="relative group">
              <div className="relative glass-effect rounded-3xl p-8 border-2 border-[#7bb8ff]/30 hover:border-[#7bb8ff]/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(123,184,255,0.3)] h-full">
                {/* Number indicator with icon */}
                <div className="absolute top-6 left-6 bg-gradient-to-r from-[#7bb8ff] to-[#7bffd9] text-[#0f0f1a] font-bold text-xl w-16 h-16 flex items-center justify-center rounded-full z-20">
                  <Shield size={24} />
                </div>

                <div className="pt-20">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl md:text-4xl font-black mb-3 font-montserrat">
                      <span className="gradient-text-alt">VPN</span>
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-[#7bb8ff] to-[#7bffd9] mx-auto rounded-full"></div>
                  </div>

                  <div>
                    <p className="text-gray-200 mb-4 text-base leading-relaxed">
                      Jeśli wolisz korzystać z VPN, jest to wygodniejszy sposób na dostęp do zablokowanych stron, to
                      także dobra opcja. VPN (Virtual Private Network) pozwala zmienić Twoją lokalizację IP, szyfruje
                      połączenia, dzięki czemu możesz ominąć blokady regionalne i zwiększyć swoją prywatność w
                      Internecie.
                    </p>

                    <p className="text-gray-200 mb-6 text-base leading-relaxed">
                      Wystarczy zainstalować aplikację wybranego dostawcy, zalogować się, wybrać kraj i połączyć – to
                      wszystko. VPN będzie szczególnie przydatny podczas korzystania z usług niedostępnych w Twoim
                      regionie.
                    </p>

                    <div className="bg-[#0f0f1a]/80 backdrop-blur-sm rounded-xl p-5 border border-[#7bb8ff]/20">
                      <h4 className="text-white font-bold mb-3 text-base">Popularne dostawcy VPN:</h4>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="text-[#7bb8ff] font-semibold text-sm p-2">• NordVPN</div>
                        <div className="text-[#7bb8ff] font-semibold text-sm p-2">• Surfshark</div>
                        <div className="text-[#7bb8ff] font-semibold text-sm p-2">• ProtonVPN</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b9d]/10 to-[#7bb8ff]/10 rounded-3xl blur-xl"></div>
            <div className="relative glass-effect rounded-3xl p-6 border border-white/20">
              <h3 className="text-lg font-bold mb-3 text-center gradient-text">Ważne Informacje</h3>
              <div className="text-gray-300 space-y-2 text-center text-sm">
                <p>
                  Ta strona internetowa prezentuje informacje o ekskluzywnych kasynach i zawiera linki afiliacyjne,
                  które są przeznaczone wyłącznie dla osób przebywających w regionach, w których hazard online jest
                  dozwolony przez prawo.
                </p>
                <p>
                  Użytkownicy są odpowiedzialni za zapewnienie, że ich aktywność jest zgodna z lokalnymi przepisami. Nie
                  zachęcamy ani nie wspieramy nielegalnych form hazardu.
                </p>
                <p>
                  Przed skorzystaniem z jakichkolwiek ofert prezentowanych na tej stronie, zdecydowanie zalecamy
                  sprawdzenie legalności hazardu online w Twojej lokalizacji.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Back button */}
        <div className="fixed bottom-8 right-8 z-30">
          <Link
            href="/"
            className="group relative overflow-hidden bg-gradient-to-r from-[#ff6b9d] to-[#9d7bff] hover:from-[#ff4d8c] hover:to-[#8a5fff] text-white font-bold px-6 py-3 rounded-full text-base transition-all hover:scale-105 shadow-xl flex items-center"
          >
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
            <span>Powrót</span>
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
          </Link>
        </div>
      </div>
    </div>
  )
}
