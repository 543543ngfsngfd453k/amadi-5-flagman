"use client"

import Image from "next/image"
import { Check, Copy } from "lucide-react"
import { useState } from "react"

export default function SponsorsSection() {
  const [copySuccess, setCopySuccess] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText("HELLBOY").then(() => {
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 2000)
    })
  }

  return (
    <section className="py-16 bg-black/50" id="casinos">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-white">
          Moje{" "}
          <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Rekomendacje
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* NV Casino */}
          <div className="relative group">
            <div className="relative bg-black rounded-3xl p-8 border-2 border-pink-500/30 hover:border-pink-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] overflow-hidden flex flex-col min-h-[520px]">
              {/* Background image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/halftone-gradient-bg.jpg"
                  alt="Background"
                  fill
                  className="object-cover opacity-20"
                />
              </div>

              <div className="text-center mb-6 relative z-10">
                <div className="h-20 flex items-center justify-center mb-4">
                  <Image
                    src="/images/nv-casino-v-logo.png"
                    alt="NV Casino"
                    width={160}
                    height={160}
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-2xl p-5 mb-6 relative z-10 flex-grow flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-center mb-4">
                  <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    80 FREE SPINÓW
                  </span>
                </h3>

                {/* Copyable code section */}
                <div className="text-center mb-4 relative">
                  <p className="text-gray-300 text-sm mb-2">Z kodem:</p>
                  <div
                    onClick={copyToClipboard}
                    className="relative inline-flex items-center gap-1 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-bold py-1 px-3 rounded cursor-pointer transition-all hover:scale-105 shadow-md border border-pink-400/50 hover:border-pink-300 mb-2"
                  >
                    <span className="text-sm tracking-wide">HELLBOY</span>
                    <Copy size={12} className="text-white" />
                  </div>
                  {copySuccess && (
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs px-2 py-1 rounded z-50">
                      Skopiowano!
                    </div>
                  )}
                </div>

                <div className="space-y-2 text-center">
                  <div className="flex items-center justify-center text-white">
                    <Check className="w-4 h-4 text-pink-400 mr-2" />
                    <span className="text-sm">Natychmiastowa aktywacja bonusu</span>
                  </div>
                  <div className="flex items-center justify-center text-white">
                    <Check className="w-4 h-4 text-pink-400 mr-2" />
                    <span className="text-sm">Premium wybór slotów</span>
                  </div>
                  <div className="flex items-center justify-center text-white">
                    <Check className="w-4 h-4 text-pink-400 mr-2" />
                    <span className="text-sm">VIP obsługa klienta</span>
                  </div>
                </div>
              </div>

              <div className="text-center relative z-10 mt-auto">
                <a
                  href="https://longwant.com/22904/29327?lp=00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-6 rounded-full text-base transition-all hover:scale-105 shadow-xl group"
                >
                  <span className="relative z-10">Odbierz Bonus</span>
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                  <span className="absolute -top-10 -right-10 w-20 h-20 bg-white/10 rotate-45 transform translate-x-12 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-700"></span>
                </a>
              </div>
            </div>
          </div>

          {/* VAVADA */}
          <div className="relative group">
            <div className="relative bg-black rounded-3xl p-8 border-2 border-red-500/30 hover:border-red-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] overflow-hidden flex flex-col min-h-[520px]">
              {/* Background image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/halftone-gradient-bg.jpg"
                  alt="Background"
                  fill
                  className="object-cover opacity-20"
                />
              </div>

              <div className="text-center mb-6 relative z-10">
                <div className="h-20 flex items-center justify-center mb-4">
                  <Image
                    src="/images/vavada-logo-transparent.webp"
                    alt="VAVADA"
                    width={160}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-2xl p-5 mb-6 relative z-10 flex-grow flex flex-col">
                <div className="text-center mb-10 pt-0 mt-[5px]">
                  <h3 className="text-2xl font-bold mb-1">
                    <span className="bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">
                      100% BONUS + 100 FS
                    </span>
                  </h3>
                  <p className="text-gray-300 text-sm pb-4">Pakiet powitalny</p>
                </div>

                <div className="space-y-2 text-center mt-[15px]">
                  <div className="flex items-center justify-center text-white">
                    <Check className="w-4 h-4 text-red-400 mr-2" />
                    <span className="text-sm">100% bonusu od pierwszego depozytu</span>
                  </div>
                  <div className="flex items-center justify-center text-white">
                    <Check className="w-4 h-4 text-red-400 mr-2" />
                    <span className="text-sm">100 darmowych spinów na The Dog House</span>
                  </div>
                  <div className="flex items-center justify-center text-white">
                    <Check className="w-4 h-4 text-red-400 mr-2" />
                    <span className="text-sm">Tygodniowy cashback do 10%</span>
                  </div>
                </div>
              </div>

              <div className="text-center relative z-10 mt-auto">
                <a
                  href="https://standarttrack.com/?promo=b27c6ac2-5243-474b-b2ff-6aaee56b6a33&target=register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden inline-block bg-gradient-to-r from-red-500 to-red-600 text-white font-bold py-3 px-6 rounded-full text-base transition-all hover:scale-105 shadow-xl group"
                >
                  <span className="relative z-10">Odbierz Bonus</span>
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                  <span className="absolute -top-10 -right-10 w-20 h-20 bg-white/10 rotate-45 transform translate-x-12 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-700"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
