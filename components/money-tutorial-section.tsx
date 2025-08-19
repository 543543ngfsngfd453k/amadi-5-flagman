"use client"

import { TrendingUp, Video, Gamepad2, Ticket, Star, Target, Lock } from "lucide-react"
import Image from "next/image"

export default function MoneyTutorialSection() {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      {/* Euro money background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/euro-money-background.jpeg"
          alt="Euro Money Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for content visibility - 80% opacity for darker effect */}
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16 px-4 pt-8 md:pt-0">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 lg:px-6 py-2 lg:py-3 mb-4 lg:mb-6 border border-white/20">
            <TrendingUp className="w-4 lg:w-5 h-4 lg:h-5 text-[#fa888e]" />
            <span className="text-white font-semibold text-sm lg:text-base">Zarabianie online</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 lg:mb-6 font-montserrat">
            <span className="text-white">JAK ZAROBIĆ</span>
            <br />
            <span className="text-[#fa888e]">PIENIĄDZE</span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Section 1: Zarabiaj za SHOTY */}
          <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/20 hover:border-[#fa888e]/50 transition-all duration-500">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-gradient-to-br from-[#fa888e]/20 to-transparent"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#fa888e] to-[#fa888e]/70 flex items-center justify-center shadow-xl">
                  <Video size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-1">💸 Zarabiaj razem ze mną</h3>
                  <p className="text-[#fa888e] font-semibold text-lg">Oficjalny Poradnik</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4 h-full flex flex-col">
                  <div className="bg-white/5 rounded-2xl p-8 border border-white/10 flex-grow flex flex-col justify-center">
                    <p className="text-white/90 leading-relaxed mb-6 text-base">
                      Każdego miesiąca wyróżniam kilka osób, które tworzą najlepsze shorty/edity związane z moją osobą –
                      mogą to być materiały z walk, konferencji, transmisji na żywo czy innych nagrań.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#fa888e] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white/90 text-base leading-relaxed">
                          Najlepsze edity (np. w stylu DARK, motywacyjne, zabawne – jak te z Jonesem, McGregorem,
                          Floydem) mogą zostać docenione finansowo
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#fa888e] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white/90 text-base leading-relaxed">
                          Wybrane materiały publikuję także na swoim Instagramie
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                    <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                      <Target size={16} className="text-[#fa888e]" />
                      Gdzie wrzucać?
                    </h4>
                    <p className="text-white/80 text-sm">
                      TikTok, YouTube Shorts, Instagram Reels, X (Twitter), Facebook.
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                    <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                      <Star size={16} className="text-[#fa888e]" />
                      Zasady udziału:
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">✅</span>
                        <span className="text-white/80">Korzystaj z moich materiałów</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">✅</span>
                        <span className="text-white/80">Przy shotach z live – oznacz mojego Kicka</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">✅</span>
                        <span className="text-white/80">
                          Edity powinny być dynamiczne, emocjonalne, dobrze zmontowane
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-500/10 to-green-400/5 border border-green-400/30 rounded-2xl p-4">
                    <p className="text-white/90 text-sm font-semibold">
                      🎯 Im lepsza jakość i storytelling – tym większa szansa na wyróżnienie.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Moje podejście do gry */}
          <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-500">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-xl">
                  <Gamepad2 size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-1">Moje podejście do gry</h3>
                  <p className="text-blue-400 font-semibold">Dzielę się moimi doświadczeniami</p>
                </div>
              </div>

              <p className="text-white/90 mb-6 leading-relaxed">
                Poniżej opisuję mój styl gry i to, co działało u mnie najlepiej. To nie jest porada ani zachęta do
                grania – po prostu dzielę się moimi doświadczeniami.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h4 className="text-white font-bold mb-4 text-lg">🎰 SLOTY:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-white/90 text-sm">Najlepsze wyniki osiągałem na slotach z bonusami</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-white/90 text-sm">Gdy trafiałem coś dużego – zmieniałem slota</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-white/90 text-sm">Gdy długo nic nie siadało – również zmieniałem</span>
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="bg-blue-500/10 rounded-xl p-3">
                      <p className="text-white/80 text-sm">
                        💡 Przy mniejszym budżecie zdarzało mi się grać pojedynczo na wyższych stawkach
                      </p>
                    </div>
                    <div className="bg-blue-500/10 rounded-xl p-3">
                      <p className="text-white/80 text-sm">💡 Przy większym – korzystałem z bonusów</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h4 className="text-white font-bold mb-4 text-lg">🎡 RULETKA:</h4>
                  <p className="text-white/90 text-sm mb-4">
                    Testowałem grę na numery, sekcje, sąsiadów – nie tylko na kolor.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">✅</span>
                      <span className="text-white/80 text-sm">Numer = potencjał x35</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">✅</span>
                      <span className="text-white/80 text-sm">Kolor = x2</span>
                    </div>
                  </div>

                  <p className="text-white/90 text-sm mt-4">Dla mnie to była ciekawsza opcja, choć ryzykowniejsza</p>

                  <div className="mt-4 bg-blue-500/10 rounded-xl p-3">
                    <p className="text-white/80 text-sm">
                      💡 Czasem grałem na różnych kontach, by przetestować różne strategie
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Future Methods & Important Info - Swapped positions */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Important Info - Now on the left */}
            <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl p-6 border border-white/20 hover:border-yellow-400/50 transition-all duration-500">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent"></div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                    <Ticket size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-black text-white">Tylko z kodem: Kraken</h3>
                </div>

                <p className="text-white/90 text-sm mb-4 leading-relaxed">
                  Jeśli korzystasz z platform, gdzie dostępne są bonusy, możesz użyć moich kodów promocyjnych, które
                  dają:
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✅</span>
                    <span className="text-white/80 text-sm">Bonusy do depozytów</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✅</span>
                    <span className="text-white/80 text-sm">Darmowe spiny</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✅</span>
                    <span className="text-white/80 text-sm">Dostęp do ekskluzywnych ofert i turniejów</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Future Methods - Now on the right */}
            <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-500">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent"></div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                    <Lock size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-black text-white">Wkrótce inne metody zarabiania</h3>
                </div>

                <p className="text-white/90 text-sm mb-4 leading-relaxed">
                  Pracuję nad dodatkowymi sposobami zarabiania, niezwiązanymi z grami – będą dostępne niedługo.
                </p>

                <div className="bg-gradient-to-r from-green-500/10 to-green-400/5 border border-green-400/30 rounded-xl p-3">
                  <p className="text-white font-bold text-sm">⏳ Wkrótce dostępne!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Disclaimer */}
          <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl p-6 border border-white/20">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent"></div>
            </div>

            <div className="relative z-10 text-center">
              <div className="space-y-3">
                <p className="text-white/90 text-sm leading-relaxed">
                  📝 <strong>To nie jest porada finansowa ani namowa do gry.</strong>
                  <br />
                  Graj odpowiedzialnie, tylko jeśli sam decydujesz się podjąć ryzyko.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
