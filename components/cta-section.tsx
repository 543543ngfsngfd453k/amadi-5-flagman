import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-900 via-purple-900 to-red-900"></div>
      {/* Dark overlay to reduce brightness */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-500 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Instrukcje</span>
          <br />
          <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            i Informacje
          </span>
        </h2>

        <p className="text-base md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Dowiedz się jak ominąć blokady dostawcy internetu i uzyskać dostęp do najlepszych kasyn online. Znajdź
          szczegółowe instrukcje i przydatne wskazówki.
        </p>

        <div className="flex justify-center">
          <Link
            href="/instructions"
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all hover:scale-105 shadow-xl"
          >
            Więcej Informacji
          </Link>
        </div>
      </div>
    </section>
  )
}
