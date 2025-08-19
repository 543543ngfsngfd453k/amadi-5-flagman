"use client"

import { Instagram, MonitorPlay, Twitter } from "lucide-react"
import Image from "next/image"

export default function SocialSection() {
  return (
    <section
      id="social"
      className="py-4 md:py-12 relative min-h-[35vh] md:min-h-[52vh] flex items-center justify-center"
    >
      {/* Strong black gradient overlay at top of sociale-grafika image */}
      <div className="absolute top-0 left-0 right-0 h-20 md:h-40 bg-gradient-to-b from-black via-black/80 to-transparent z-5"></div>

      {/* New background image with original opacity, no overlays - covers full section */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/sociale-grafika.png" alt="Hell Background" fill className="object-cover" />
      </div>

      <div className="container mx-auto px-4-social relative z-10 w-full flex flex-col items-center justify-center h-full">
        {/* Increased text size on desktop */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-8 font-montserrat text-center">
          <span className="text-white">OBSERWUJ </span>
          <span className="text-red-500">MNIE</span>
        </h2>

        {/* Centered container with increased desktop sizing */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 lg:gap-8 w-fit">
            {/* Kick */}
            <a href="https://kick.com/tvtrans" target="_blank" rel="noopener noreferrer" className="group block">
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 hover:border-red-500/50 rounded-lg md:rounded-2xl transition-all duration-300 hover:scale-105 hover:bg-white/10 w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center">
                <div className="transition-transform duration-300 group-hover:scale-110">
                  <MonitorPlay
                    size={20}
                    className="text-white group-hover:text-red-500 transition-colors duration-300 md:w-10 md:h-10 lg:w-12 lg:h-12"
                  />
                </div>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/amadeusznolove"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 hover:border-red-500/50 rounded-lg md:rounded-2xl transition-all duration-300 hover:scale-105 hover:bg-white/10 w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center">
                <div className="transition-transform duration-300 group-hover:scale-110">
                  <Instagram
                    size={20}
                    className="text-white group-hover:text-red-500 transition-colors duration-300 md:w-10 md:h-10 lg:w-12 lg:h-12"
                  />
                </div>
              </div>
            </a>

            {/* Twitter/X */}
            <a href="https://x.com/FerrariAmadeusz" target="_blank" rel="noopener noreferrer" className="group block">
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 hover:border-red-500/50 rounded-lg md:rounded-2xl transition-all duration-300 hover:scale-105 hover:bg-white/10 w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center">
                <div className="transition-transform duration-300 group-hover:scale-110">
                  <Twitter
                    size={20}
                    className="text-white group-hover:text-red-500 transition-colors duration-300 md:w-10 md:h-10 lg:w-12 lg:h-12"
                  />
                </div>
              </div>
            </a>

            {/* Discord */}
            <a href="https://discord.me/transtv" target="_blank" rel="noopener noreferrer" className="group block">
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 hover:border-red-500/50 rounded-lg md:rounded-2xl transition-all duration-300 hover:scale-105 hover:bg-white/10 w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center">
                <div className="transition-transform duration-300 group-hover:scale-110">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white group-hover:text-red-500 transition-colors duration-300 md:w-10 md:h-10 lg:w-12 lg:h-12"
                  >
                    <path
                      d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a .074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a .076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.30.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay for potential future sections */}
      <div className="absolute bottom-0 left-0 right-0 h-12 md:h-20 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-5"></div>
    </section>
  )
}
