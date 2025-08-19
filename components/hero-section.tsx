"use client"

import Image from "next/image"
import { useEffect, useState, useRef } from "react"
import { Copy, Check, ChevronDown } from "lucide-react"

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [tiltAngle, setTiltAngle] = useState(0)
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [isSpinning, setIsSpinning] = useState(false)
  const [rotationDegrees, setRotationDegrees] = useState(0)
  const [wheelScale, setWheelScale] = useState(1)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const openingAudioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY
      setScrollY(newScrollY)

      // Calculate tilt angle based on scroll position
      const maxTilt = 15 // Maximum tilt angle in degrees
      const scrollFactor = Math.min(newScrollY / 500, 1) // Normalize scroll to 0-1
      setTiltAngle(scrollFactor * maxTilt)
    }

    const checkMobile = () => setIsMobile(window.innerWidth < 768)

    const calculateWheelScale = () => {
      const screenWidth = window.innerWidth
      const screenHeight = window.innerHeight

      // Base scale for screens 1920x1080 and below
      let scale = 1

      // Only apply scaling for screens wider than 1920px
      if (screenWidth > 1920) {
        // Calculate how many 10% increments to add based on width
        const widthIncrements = Math.floor((screenWidth - 1920) / 400) // Every 400px wider = 10% bigger
        scale = 1 + widthIncrements * 0.1
      }

      // Also consider height for very tall screens
      if (screenHeight > 1080) {
        const heightIncrements = Math.floor((screenHeight - 1080) / 300) // Every 300px taller = 5% bigger
        scale = Math.max(scale, 1 + heightIncrements * 0.05)
      }

      // Cap the maximum scale to prevent it from getting too large
      scale = Math.min(scale, 2.5)

      setWheelScale(scale)
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", checkMobile)
    window.addEventListener("resize", calculateWheelScale)

    // Initial checks
    checkMobile()
    calculateWheelScale()
    setIsLoaded(true)

    // Initialize wheel spin sound
    audioRef.current = new Audio("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/spin-232536-aJhV6toSl5ErC9yHPRsvfy3T7aZCbe.mp3")
    audioRef.current.preload = "auto"

    // Initialize opening sound with better settings
    openingAudioRef.current = new Audio("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sound-amadi-F9iFsYBReVbFAwOiy3RZpkt1S8iZHH.mp3")
    openingAudioRef.current.preload = "auto"
    openingAudioRef.current.volume = 0.7

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", checkMobile)
      window.removeEventListener("resize", calculateWheelScale)
    }
  }, [])

  const copyToClipboard = (code: string, containerId: string) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedCode(containerId)
      setTimeout(() => setCopiedCode(null), 2000)
    })
  }

  const handleWheelClick = () => {
    if (isSpinning) return // Prevent multiple clicks during animation

    setIsSpinning(true)

    // Play wheel spin sound effect
    if (audioRef.current) {
      audioRef.current.currentTime = 0 // Reset to start
      audioRef.current.play().catch((error) => {
        console.log("Wheel spin audio play failed:", error)
      })
    }

    // Generate random endpoint between 0-360 degrees
    const randomEndpoint = Math.floor(Math.random() * 360)

    // Calculate total rotation: at least 3 full spins + random endpoint
    const minSpins = 3 * 360 // Minimum 3 full rotations
    const totalRotation = rotationDegrees + minSpins + randomEndpoint

    setRotationDegrees(totalRotation)

    // Stop spinning after animation completes (exactly 3.5 seconds)
    setTimeout(() => {
      setIsSpinning(false)
    }, 3500) // Exactly 3.5 seconds
  }

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Container - Both images scale together */}
      <div className="absolute inset-0 z-0">
        {/* Mobile background - original without wheel */}
        <div className="block md:hidden w-full h-full">
          <Image
            src="/images/background-phones2.png"
            alt="Mobile Casino Background"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Desktop background container - both images together */}
        <div className="hidden md:block w-full h-full relative">
          {/* Main background */}
          <Image
            src="/images/amadi-background5.png"
            alt="Desktop Casino Background"
            fill
            className="object-cover"
            priority
          />

          {/* Bonus wheel container - clickable entire area with dynamic scaling */}
          <div
            className="absolute cursor-pointer group z-10"
            style={{
              top: "50%",
              left: "clamp(-15rem, -18vw, -11rem)", // Changed from -16rem, -20vw, -12rem
              transform: `translateY(-50%) scale(${wheelScale})`,
              transformOrigin: "center center",
              width: "clamp(24rem, 35vw, 40rem)", // Responsive sizing
              height: "clamp(24rem, 35vw, 40rem)", // Responsive sizing
            }}
            onClick={handleWheelClick}
          >
            {/* Pulsing pointer - much larger, thicker, moved right, and rotated */}
            <div
              className="absolute z-20"
              style={{
                top: "-10px", // Changed from "top-2" (8px) to -10px
                left: "55%", // Moved to the right from center
                transform: "translateX(-50%) rotate(15deg)", // Rotated 15 degrees to the right
              }}
            >
              <div className="animate-bounce">
                <ChevronDown
                  size={70} // Increased from 40 to 70
                  className="text-red-500 drop-shadow-lg filter brightness-125"
                  style={{
                    filter: "drop-shadow(0 0 8px rgba(239, 68, 68, 0.8))",
                    strokeWidth: "3", // Made thicker
                  }}
                />
              </div>
            </div>

            {/* Wheel image - with realistic deceleration animation (3.2 seconds) */}
            <div
              className="w-full h-full"
              style={{
                transform: `rotate(${rotationDegrees}deg)`,
                transition: isSpinning
                  ? "transform 3.5s cubic-bezier(0.25, 0.1, 0.25, 1)" // 3.2 seconds with realistic deceleration
                  : "transform 0.3s ease-in-out",
              }}
            >
              <Image
                src="/images/wheel9.png"
                alt="Bonus Wheel"
                fill
                className="object-contain"
                style={{
                  opacity: 0.9,
                }}
              />
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Floating logo particles with varied sizes and better distribution */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {/* Top left area - Mix of P1 and P2 */}
        <div
          className="absolute select-none seamless-float-1 opacity-25"
          style={{
            left: "8%",
            top: "12%",
            animationDelay: "0s",
          }}
        >
          <Image src="/images/p1-new.png" alt="Pray for Three" width={120} height={90} className="object-contain" />
        </div>

        <div
          className="absolute select-none seamless-float-3 opacity-18"
          style={{
            left: "18%",
            top: "25%",
            animationDelay: "3s",
          }}
        >
          <Image src="/images/p2-new.png" alt="666 Logo" width={55} height={55} className="object-contain" />
        </div>

        <div
          className="absolute select-none seamless-float-2 opacity-22"
          style={{
            left: "25%",
            top: "8%",
            animationDelay: "1.5s",
          }}
        >
          <Image src="/images/p1-new.png" alt="Pray for Three" width={95} height={71} className="object-contain" />
        </div>

        {/* Top right area - Mix of P2 and P1 */}
        <div
          className="absolute select-none seamless-float-4 opacity-20"
          style={{
            left: "70%",
            top: "15%",
            animationDelay: "2s",
          }}
        >
          <Image src="/images/p2-new.png" alt="666 Logo" width={80} height={80} className="object-contain" />
        </div>

        <div
          className="absolute select-none seamless-float-1 opacity-16"
          style={{
            left: "82%",
            top: "28%",
            animationDelay: "4s",
          }}
        >
          <Image src="/images/p1-new.png" alt="Pray for Three" width={75} height={56} className="object-contain" />
        </div>

        <div
          className="absolute select-none seamless-float-3 opacity-24"
          style={{
            left: "88%",
            top: "5%",
            animationDelay: "6s",
          }}
        >
          <Image src="/images/p2-new.png" alt="666 Logo" width={45} height={45} className="object-contain" />
        </div>

        {/* Middle left area */}
        <div
          className="absolute select-none seamless-float-2 opacity-19"
          style={{
            left: "5%",
            top: "45%",
            animationDelay: "2.5s",
          }}
        >
          <Image src="/images/p2-new.png" alt="666 Logo" width={65} height={65} className="object-contain" />
        </div>

        <div
          className="absolute select-none seamless-float-4 opacity-23"
          style={{
            left: "15%",
            top: "55%",
            animationDelay: "5s",
          }}
        >
          <Image src="/images/p1-new.png" alt="Pray for Three" width={110} height={82} className="object-contain" />
        </div>

        {/* Middle right area */}
        <div
          className="absolute select-none seamless-float-1 opacity-17"
          style={{
            left: "85%",
            top: "50%",
            animationDelay: "3.5s",
          }}
        >
          <Image src="/images/p1-new.png" alt="Pray for Three" width={85} height={64} className="object-contain" />
        </div>

        <div
          className="absolute select-none seamless-float-3 opacity-21"
          style={{
            left: "92%",
            top: "40%",
            animationDelay: "1s",
          }}
        >
          <Image src="/images/p2-new.png" alt="666 Logo" width={50} height={50} className="object-contain" />
        </div>

        {/* Bottom left area */}
        <div
          className="absolute select-none seamless-float-4 opacity-20"
          style={{
            left: "10%",
            top: "75%",
            animationDelay: "4.5s",
          }}
        >
          <Image src="/images/p1-new.png" alt="Pray for Three" width={100} height={75} className="object-contain" />
        </div>

        <div
          className="absolute select-none seamless-float-2 opacity-15"
          style={{
            left: "3%",
            top: "85%",
            animationDelay: "7s",
          }}
        >
          <Image src="/images/p2-new.png" alt="666 Logo" width={70} height={70} className="object-contain" />
        </div>

        <div
          className="absolute select-none seamless-float-1 opacity-26"
          style={{
            left: "22%",
            top: "82%",
            animationDelay: "2s",
          }}
        >
          <Image src="/images/p1-new.png" alt="Pray for Three" width={90} height={67} className="object-contain" />
        </div>

        {/* Bottom right area */}
        <div
          className="absolute select-none seamless-float-3 opacity-18"
          style={{
            left: "78%",
            top: "78%",
            animationDelay: "5.5s",
          }}
        >
          <Image src="/images/p2-new.png" alt="666 Logo" width={60} height={60} className="object-contain" />
        </div>

        <div
          className="absolute select-none seamless-float-4 opacity-22"
          style={{
            left: "88%",
            top: "88%",
            animationDelay: "1.5s",
          }}
        >
          <Image src="/images/p1-new.png" alt="Pray for Three" width={80} height={60} className="object-contain" />
        </div>

        <div
          className="absolute select-none seamless-float-2 opacity-19"
          style={{
            left: "70%",
            top: "92%",
            animationDelay: "6.5s",
          }}
        >
          <Image src="/images/p2-new.png" alt="666 Logo" width={75} height={75} className="object-contain" />
        </div>

        {/* Center area - sparse placement */}
        <div
          className="absolute select-none seamless-float-1 opacity-14"
          style={{
            left: "45%",
            top: "35%",
            animationDelay: "8s",
          }}
        >
          <Image src="/images/p1-new.png" alt="Pray for Three" width={130} height={97} className="object-contain" />
        </div>

        <div
          className="absolute select-none seamless-float-3 opacity-16"
          style={{
            left: "55%",
            top: "65%",
            animationDelay: "3s",
          }}
        >
          <Image src="/images/p2-new.png" alt="666 Logo" width={40} height={40} className="object-contain" />
        </div>

        {/* Additional scattered elements */}
        <div
          className="absolute select-none seamless-float-4 opacity-21"
          style={{
            left: "35%",
            top: "20%",
            animationDelay: "4s",
          }}
        >
          <Image src="/images/p2-new.png" alt="666 Logo" width={85} height={85} className="object-contain" />
        </div>

        <div
          className="absolute select-none seamless-float-2 opacity-17"
          style={{
            left: "60%",
            top: "25%",
            animationDelay: "7.5s",
          }}
        >
          <Image src="/images/p1-new.png" alt="Pray for Three" width={70} height={52} className="object-contain" />
        </div>

        <div
          className="absolute select-none seamless-float-1 opacity-23"
          style={{
            left: "30%",
            top: "70%",
            animationDelay: "0.5s",
          }}
        >
          <Image src="/images/p1-new.png" alt="Pray for Three" width={105} height={78} className="object-contain" />
        </div>

        <div
          className="absolute select-none seamless-float-3 opacity-20"
          style={{
            left: "65%",
            top: "85%",
            animationDelay: "5s",
          }}
        >
          <Image src="/images/p2-new.png" alt="666 Logo" width={55} height={55} className="object-contain" />
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen -mt-8 sm:-mt-10 md:-mt-16 lg:-mt-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            {/* Fully responsive mobile text with clamp for smooth scaling */}
            <h1 className="font-black mb-4 lg:mb-6 font-montserrat drop-shadow-2xl md:drop-shadow-none relative z-20 leading-tight md:leading-normal flex flex-col items-center justify-center min-h-[20vh] md:min-h-0 md:mt-8 lg:mt-4 pt-8 md:pt-0">
              <span className="relative inline-block text-center">
                {/* Subtle outer glow for modern effect */}
                <span className="absolute inset-0 text-red-500 blur-lg opacity-50 scale-105"></span>
                {/* Responsive text with clamp for smooth mobile scaling */}
                <span className="relative text-red-500 drop-shadow-[0_0_20px_rgba(220,38,38,0.8)] filter brightness-110 font-black block text-[clamp(1.8rem,8vw,2.6rem)] md:text-5xl lg:text-7xl">
                  REKOMENDACJE
                </span>
              </span>
              <span className="text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] md:drop-shadow-none block text-center text-[clamp(1.8rem,8vw,2.6rem)] md:text-5xl lg:text-7xl">
                AMADEUSZA
              </span>
            </h1>

            {/* Casino containers - now with 5 containers: 2-2-1 on mobile, 5 columns on desktop */}
            <div className="mt-6 lg:mt-4 mx-auto pt-4 sm:pt-3 md:pt-2 lg:pt-1 px-2 sm:px-4 md:px-4 relative z-20 mb-48 sm:mb-20 md:mb-12">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-3 lg:gap-4">
                {/* FLAGMAN Casino - NEW First container with TOP 1 CASINO badge, NEON FRAME, and PULSING CURSOR */}
                <div className="flagman-container relative group col-span-2 md:col-span-1">
                  <div className="relative bg-gradient-to-br from-blue-500/20 via-blue-600/10 to-transparent backdrop-blur-xl p-2 sm:p-3 lg:p-4 overflow-hidden transition-all duration-700 ease-out group-hover:scale-[1.02] rounded-xl sm:rounded-2xl lg:rounded-3xl h-[280px] sm:h-[320px] lg:h-[380px] shadow-2xl hover:shadow-blue-500/20 neon-frame-blue">
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl">
                      <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-blue-400/30 rounded-full blur-sm floating-orbs-bg"></div>
                      <div className="absolute top-3/4 right-1/3 w-6 h-6 bg-cyan-400/25 rounded-full blur-sm floating-orbs-bg-2"></div>
                      <div className="absolute bottom-1/4 left-1/2 w-10 h-10 bg-blue-300/20 rounded-full blur-sm floating-orbs-bg-3"></div>
                      <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-sky-400/35 rounded-full blur-sm floating-orbs-bg"></div>
                      <div className="absolute bottom-1/3 left-1/5 w-7 h-7 bg-blue-500/25 rounded-full blur-sm floating-orbs-bg-2"></div>
                    </div>

                    <div className="absolute inset-0 opacity-20 transition-all duration-700 ease-out group-hover:opacity-40 rounded-xl sm:rounded-2xl lg:rounded-3xl">
                      <Image
                        src="/images/flagman-pc2.png"
                        alt="Flagman Background"
                        fill
                        className="object-cover object-center rounded-xl sm:rounded-2xl lg:rounded-3xl transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-blue-600/5 to-blue-700/5 transition-all duration-700 ease-out group-hover:from-blue-500/25 group-hover:via-blue-600/15 group-hover:to-blue-700/10 rounded-xl sm:rounded-2xl lg:rounded-3xl"></div>

                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl">
                      <div className="neon-rays opacity-0 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-105"></div>
                    </div>

                    <div className="absolute top-2 right-2 md:top-3 md:right-3 z-20">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-sm opacity-80 animate-pulse"></div>
                        <div
                          className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full blur-md opacity-60 animate-pulse"
                          style={{ animationDelay: "0.5s" }}
                        ></div>
                        <div className="relative bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 text-black font-black text-[clamp(0.4rem,2vw,0.6rem)] md:text-[clamp(0.35rem,1.8vw,0.5rem)] px-2 py-1 md:px-2 md:py-1 rounded-full shadow-xl border border-yellow-200/50">
                          <div className="flex items-center gap-1 md:gap-1">
                            <svg
                              className="w-2.5 h-2.5 md:w-2 md:h-2 lg:w-2.5 lg:h-2.5 text-black animate-pulse"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              style={{ animationDuration: "1.5s" }}
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="tracking-wider whitespace-nowrap text-[clamp(0.4rem,2vw,0.6rem)] md:text-[clamp(0.35rem,1.8vw,0.5rem)]">
                              TOP 1 CASINO
                            </span>
                          </div>
                        </div>
                        <div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200/60 to-transparent -skew-x-12 animate-pulse opacity-80 rounded-full"
                          style={{ animationDuration: "2s" }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center text-center relative z-10 h-full justify-between">
                      {/* Logo */}
                      <div className="mb-2 sm:mb-3 mt-2 sm:mt-3 flex items-center justify-center h-10 sm:h-12 lg:h-16">
                        <div className="md:transition-all md:duration-700 md:ease-out md:group-hover:scale-110 md:group-hover:rotate-1 scale-150 md:scale-100">
                          <Image
                            src="/images/flagman-logo3.png"
                            alt="FLAGMAN"
                            width={120}
                            height={60}
                            className="object-contain w-auto drop-shadow-lg h-10 sm:h-10 lg:h-14 md:transition-all md:duration-700 md:ease-out md:group-hover:drop-shadow-2xl"
                          />
                        </div>
                      </div>

                      {/* Bonus Info */}
                      <div className="mb-2 sm:mb-3 flex-grow flex flex-col justify-center">
                        <div className="text-[clamp(1.3rem,4vw,1.1rem)] sm:text-base lg:text-lg font-black text-white mb-1 drop-shadow-lg leading-tight">
                          150% BONUS
                        </div>
                        <div className="text-[clamp(0.85rem,2.8vw,0.7rem)] sm:text-xs lg:text-sm font-bold text-white/90 mb-1 sm:mb-2">
                          od pierwszego depozytu
                        </div>
                      </div>

                      {/* Code and Button */}
                      <div className="w-full space-y-1 sm:space-y-2 mt-auto">
                        <div className="text-center">
                          <p className="text-white/80 mb-1 text-[clamp(0.7rem,2.3vw,0.6rem)] -translate-y-[3%] md:translate-y-0">
                            Użyj kodu:
                          </p>
                          <div
                            onClick={() => copyToClipboard("FERRARI", "flagman")}
                            className="inline-flex items-center gap-1 bg-white/10 backdrop-blur-sm border border-blue-400/50 text-white font-bold py-1 px-2 sm:px-3 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-blue-500/20 text-[clamp(0.85rem,2.8vw,0.7rem)] shadow-lg"
                          >
                            <span className="tracking-wider">FERRARI</span>
                            {copiedCode === "flagman" ? (
                              <Check size={10} className="text-green-400" />
                            ) : (
                              <Copy size={10} className="text-white/70" />
                            )}
                          </div>
                        </div>

                        {/* Button with Pulsing Cursor */}
                        <div className="relative inline-block w-full max-w-[140px] sm:max-w-[160px] mx-auto">
                          <a
                            href="https://flagman-route-four.com/c84c466cb"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative overflow-hidden inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg text-[clamp(0.85rem,2.8vw,0.7rem)] whitespace-nowrap transition-all hover:scale-105 group shadow-xl hover:shadow-blue-500/30 w-full"
                          >
                            <span className="relative z-10">ODBIERZ BONUS</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                          </a>

                          <div className="absolute -right-4 sm:-right-6 top-2 z-50 transition-all duration-700 ease-out group-hover:scale-110">
                            <div className="cursor-pulse-fast">
                              <Image
                                src="/images/cursorek.png"
                                alt="Click Cursor"
                                width={48}
                                height={48}
                                className="object-contain w-12 h-12 sm:w-12 sm:h-12 lg:w-12 lg:h-12 transform -rotate-[30deg]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* STARDA Casino - Second container (moved from first) */}
                <div className="starda-container relative group">
                  <div className="relative bg-gradient-to-br from-red-500/20 via-red-600/10 to-transparent backdrop-blur-xl p-2 sm:p-3 lg:p-4 overflow-hidden transition-all duration-500 group-hover:scale-[1.02] border border-red-500/30 hover:border-red-500/60 rounded-xl sm:rounded-2xl lg:rounded-3xl h-[280px] sm:h-[320px] lg:h-[380px] shadow-2xl hover:shadow-red-500/20">
                    {/* Background image - STARDA branded background */}
                    <div className="absolute inset-0 opacity-10 transition-opacity duration-500 group-hover:opacity-20 rounded-xl sm:rounded-2xl lg:rounded-3xl">
                      <Image
                        src="/images/4-starda.png"
                        alt="Background"
                        fill
                        className="object-cover object-center rounded-xl sm:rounded-2xl lg:rounded-3xl"
                      />
                    </div>

                    {/* Animated border glow */}
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-r from-red-500/0 via-red-500/50 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                    <div className="flex flex-col items-center text-center relative z-10 h-full justify-between">
                      {/* Logo */}
                      <div className="mb-2 sm:mb-3 mt-2 sm:mt-3 flex items-center justify-center h-10 sm:h-12 lg:h-16">
                        <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2 scale-110 sm:scale-100">
                          <Image
                            src="/images/starda-logo.webp"
                            alt="STARDA"
                            width={120}
                            height={60}
                            className="object-contain w-auto drop-shadow-lg h-8 sm:h-10 lg:h-14"
                          />
                        </div>
                      </div>

                      {/* Bonus Info */}
                      <div className="mb-2 sm:mb-3 flex-grow flex flex-col justify-center">
                        <div className="text-[clamp(0.8rem,4vw,1.1rem)] sm:text-base lg:text-lg font-black text-white mb-1 drop-shadow-lg leading-tight">
                          150% BONUS
                        </div>
                        <div className="text-[clamp(0.55rem,2.8vw,0.7rem)] sm:text-xs lg:text-sm font-bold text-white/90 mb-1 sm:mb-2">
                          od pierwszego depozytu
                        </div>
                      </div>

                      {/* Code and Button */}
                      <div className="w-full space-y-1 sm:space-y-2 mt-auto">
                        <div className="text-center">
                          <p className="text-white/80 mb-1 text-[clamp(0.45rem,2.3vw,0.6rem)] md:text-[clamp(0.7rem,2.3vw,0.6rem)]">
                            Użyj kodu:
                          </p>
                          <div
                            onClick={() => copyToClipboard("FERRARI", "starda")}
                            className="inline-flex items-center gap-1 bg-white/10 backdrop-blur-sm border border-red-400/50 text-white font-bold py-1 px-2 sm:px-3 rounded-lg cursor-pointer transition-all hover:scale-105 hover:bg-red-500/20 text-[clamp(0.55rem,2.8vw,0.7rem)] md:text-[clamp(0.85rem,2.8vw,0.7rem)] shadow-lg"
                          >
                            <span className="tracking-wider">FERRARI</span>
                            {copiedCode === "starda" ? (
                              <Check size={10} className="text-green-400" />
                            ) : (
                              <Copy size={10} className="text-white/70" />
                            )}
                          </div>
                        </div>

                        <a
                          href="https://strd-irrs12.com/ca070d173"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative overflow-hidden inline-block bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg text-[clamp(0.55rem,2.8vw,0.7rem)] md:text-[clamp(0.85rem,2.8vw,0.7rem)] whitespace-nowrap transition-all hover:scale-105 group shadow-xl hover:shadow-red-500/30 w-full max-w-[140px] sm:max-w-[160px] mx-auto"
                        >
                          <span className="relative z-10">ODBIERZ BONUS</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SPINBARA Casino - Third container */}
                <div className="spinbara-container relative group">
                  <div className="relative bg-gradient-to-br from-red-500/20 via-red-600/10 to-transparent backdrop-blur-xl p-2 sm:p-3 lg:p-4 overflow-hidden transition-all duration-500 group-hover:scale-[1.02] border border-red-500/30 hover:border-red-500/60 rounded-xl sm:rounded-2xl lg:rounded-3xl h-[280px] sm:h-[320px] lg:h-[380px] shadow-2xl hover:shadow-red-500/20">
                    {/* Background image - SPINBARA branded background */}
                    <div className="absolute inset-0 opacity-10 transition-opacity duration-500 group-hover:opacity-20 rounded-xl sm:rounded-2xl lg:rounded-3xl">
                      <Image
                        src="/images/spinbara-background2.png"
                        alt="Background"
                        fill
                        className="object-cover object-center rounded-xl sm:rounded-2xl lg:rounded-3xl"
                      />
                    </div>

                    {/* Animated border glow */}
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-r from-red-500/0 via-red-500/50 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                    <div className="flex flex-col items-center text-center relative z-10 h-full justify-between">
                      {/* Logo */}
                      <div className="mb-2 sm:mb-3 mt-2 sm:mt-3 flex items-center justify-center h-10 sm:h-12 lg:h-16">
                        <div className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-1 scale-110 sm:scale-100">
                          <Image
                            src="/images/spinbara-logo-new.png"
                            alt="SPINBARA"
                            width={120}
                            height={60}
                            className="object-contain w-auto drop-shadow-lg h-8 sm:h-10 lg:h-14"
                          />
                        </div>
                      </div>

                      {/* Bonus Info */}
                      <div className="mb-2 sm:mb-3 flex-grow flex flex-col justify-center">
                        <div className="text-[clamp(0.8rem,4vw,1.1rem)] sm:text-base lg:text-lg font-black text-white mb-1 drop-shadow-lg leading-tight">
                          150% BONUS
                        </div>
                        <div className="text-[clamp(0.55rem,2.8vw,0.7rem)] sm:text-xs lg:text-sm font-bold text-white/90 mb-1 sm:mb-2">
                          od pierwszego depozytu
                        </div>
                      </div>

                      {/* Code and Button */}
                      <div className="w-full space-y-1 sm:space-y-2 mt-auto">
                        <div className="text-center">
                          <p className="text-white/80 mb-1 text-[clamp(0.45rem,2.3vw,0.6rem)] md:text-[clamp(0.7rem,2.3vw,0.6rem)]">
                            Użyj kodu:
                          </p>
                          <div
                            onClick={() => copyToClipboard("FERRARI", "spinbara")}
                            className="inline-flex items-center gap-1 bg-white/10 backdrop-blur-sm border border-red-400/50 text-white font-bold py-1 px-2 sm:px-3 rounded-lg cursor-pointer transition-all hover:scale-105 hover:bg-red-500/20 text-[clamp(0.55rem,2.8vw,0.7rem)] md:text-[clamp(0.85rem,2.8vw,0.7rem)] shadow-lg"
                          >
                            <span className="tracking-wider">FERRARI</span>
                            {copiedCode === "spinbara" ? (
                              <Check size={10} className="text-green-400" />
                            ) : (
                              <Copy size={10} className="text-white/70" />
                            )}
                          </div>
                        </div>

                        <a
                          href="https://spnbr.monalvor.com/?mid=301978_1777879"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative overflow-hidden inline-block bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg text-[clamp(0.55rem,2.8vw,0.7rem)] md:text-[clamp(0.85rem,2.8vw,0.7rem)] whitespace-nowrap transition-all hover:scale-105 group shadow-xl hover:shadow-red-500/30 w-full max-w-[140px] sm:max-w-[160px] mx-auto"
                        >
                          <span className="relative z-10">ODBIERZ BONUS</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* NV Casino - Fourth container */}
                <div className="nv-container relative group">
                  <div className="relative bg-gradient-to-br from-red-500/20 via-red-600/10 to-transparent backdrop-blur-xl p-2 sm:p-3 lg:p-4 overflow-hidden transition-all duration-500 group-hover:scale-[1.02] border border-red-500/30 hover:border-red-500/60 rounded-xl sm:rounded-2xl lg:rounded-3xl h-[280px] sm:h-[320px] lg:h-[380px] shadow-2xl hover:shadow-red-500/20">
                    {/* Background image - Portrait Amadi */}
                    <div className="absolute inset-0 opacity-10 transition-opacity duration-500 group-hover:opacity-20 rounded-xl sm:rounded-2xl lg:rounded-3xl">
                      <Image
                        src="/images/3-nv.png"
                        alt="Background"
                        fill
                        className="object-cover object-center rounded-xl sm:rounded-2xl lg:rounded-3xl"
                      />
                    </div>

                    {/* Animated border glow */}
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-r from-red-500/0 via-red-500/50 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                    <div className="flex flex-col items-center text-center relative z-10 h-full justify-between">
                      {/* Logo */}
                      <div className="mb-2 sm:mb-3 mt-2 sm:mt-3 flex items-center justify-center h-10 sm:h-12 lg:h-16">
                        <div className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-1 scale-110 sm:scale-100">
                          <Image
                            src="/images/nv-logo-new.png"
                            alt="NV CASINO"
                            width={120}
                            height={60}
                            className="object-contain w-auto drop-shadow-[0_0_10px_rgba(239,68,68,0.5)] h-8 sm:h-10 lg:h-14"
                          />
                        </div>
                      </div>

                      {/* Bonus Info */}
                      <div className="mb-2 sm:mb-3 flex-grow flex flex-col justify-center">
                        <div className="text-[clamp(0.75rem,3.8vw,1rem)] sm:text-base lg:text-lg font-black text-white mb-1 drop-shadow-[0_0_10px_rgba(239,68,68,0.8)] leading-tight">
                          80 FREE SPINÓW
                        </div>
                        <div className="text-[clamp(0.55rem,2.8vw,0.7rem)] sm:text-xs lg:text-sm font-bold text-white/90 mb-1 sm:mb-2">
                          z kodem promocyjnym
                        </div>
                      </div>

                      {/* Code and Button */}
                      <div className="w-full space-y-1 sm:space-y-2 mt-auto">
                        <div className="text-center">
                          <p className="text-white/80 mb-1 text-[clamp(0.45rem,2.3vw,0.6rem)] md:text-[clamp(0.7rem,2.3vw,0.6rem)]">
                            Użyj kodu:
                          </p>
                          <div
                            onClick={() => copyToClipboard("FERRARI", "nv")}
                            className="inline-flex items-center gap-1 bg-white/10 backdrop-blur-sm border border-red-400/50 text-white font-bold py-1 px-2 sm:px-3 rounded-lg cursor-pointer transition-all hover:scale-105 hover:bg-red-500/20 text-[clamp(0.55rem,2.8vw,0.7rem)] md:text-[clamp(0.85rem,2.8vw,0.7rem)] shadow-lg"
                          >
                            <span className="tracking-wider">FERRARI</span>
                            {copiedCode === "nv" ? (
                              <Check size={10} className="text-green-400" />
                            ) : (
                              <Copy size={10} className="text-white/70" />
                            )}
                          </div>
                        </div>

                        <a
                          href="https://longwant.com/22958/29327?lp=00"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative overflow-hidden inline-block bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg text-[clamp(0.55rem,2.8vw,0.7rem)] md:text-[clamp(0.85rem,2.8vw,0.7rem)] whitespace-nowrap transition-all hover:scale-105 group shadow-xl hover:shadow-red-500/30 w-full max-w-[140px] sm:max-w-[160px] mx-auto"
                        >
                          <span className="relative z-10">ODBIERZ BONUS</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* VAVADA Casino - Fifth container */}
                <div className="vavada-container relative group">
                  <div className="relative bg-gradient-to-br from-red-500/20 via-red-600/10 to-transparent backdrop-blur-xl p-2 sm:p-3 lg:p-4 overflow-hidden transition-all duration-500 group-hover:scale-[1.02] border border-red-500/30 hover:border-red-500/60 rounded-xl sm:rounded-2xl lg:rounded-3xl h-[280px] sm:h-[320px] lg:h-[380px] shadow-2xl hover:shadow-red-500/20">
                    {/* Background image - VAVADA branded background */}
                    <div className="absolute inset-0 opacity-10 transition-opacity duration-500 group-hover:opacity-20 rounded-xl sm:rounded-2xl lg:rounded-3xl">
                      <Image
                        src="/images/2-vavada.png"
                        alt="Background"
                        fill
                        className="object-cover object-center rounded-xl sm:rounded-2xl lg:rounded-3xl"
                      />
                    </div>

                    {/* Animated border glow */}
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-r from-red-500/0 via-red-500/50 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                    <div className="flex flex-col items-center text-center relative z-10 h-full justify-between">
                      {/* Logo */}
                      <div className="mb-2 sm:mb-3 mt-2 sm:mt-3 flex items-center justify-center h-10 sm:h-12 lg:h-16">
                        <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-1 scale-110 sm:scale-100">
                          <Image
                            src="/images/vavada-logo-new-2.png"
                            alt="VAVADA"
                            width={120}
                            height={60}
                            className="object-contain w-auto drop-shadow-lg h-8 sm:h-10 lg:h-14"
                          />
                        </div>
                      </div>

                      {/* Bonus Info */}
                      <div className="mb-2 sm:mb-3 flex-grow flex flex-col justify-center">
                        <div className="text-[clamp(0.8rem,4vw,1.1rem)] sm:text-base lg:text-lg font-black text-white mb-1 drop-shadow-lg leading-tight">
                          150% BONUS
                        </div>
                        <div className="text-[clamp(0.55rem,2.8vw,0.7rem)] sm:text-xs lg:text-sm font-bold text-white/90 mb-1 sm:mb-2">
                          od pierwszego depozytu
                        </div>
                      </div>

                      {/* Code and Button */}
                      <div className="w-full space-y-1 sm:space-y-2 mt-auto">
                        <div className="text-center">
                          <p className="text-white/80 mb-1 text-[clamp(0.45rem,2.3vw,0.6rem)] md:text-[clamp(0.7rem,2.3vw,0.6rem)]">
                            Użyj kodu:
                          </p>
                          <div
                            onClick={() => copyToClipboard("FERRARI", "vavada")}
                            className="inline-flex items-center gap-1 bg-white/10 backdrop-blur-sm border border-red-400/50 text-white font-bold py-1 px-2 sm:px-3 rounded-lg cursor-pointer transition-all hover:scale-105 hover:bg-red-500/20 text-[clamp(0.55rem,2.8vw,0.7rem)] md:text-[clamp(0.85rem,2.8vw,0.7rem)] shadow-lg"
                          >
                            <span className="tracking-wider">FERRARI</span>
                            {copiedCode === "vavada" ? (
                              <Check size={10} className="text-green-400" />
                            ) : (
                              <Copy size={10} className="text-white/70" />
                            )}
                          </div>
                        </div>

                        <a
                          href="https://standarttrack.com/?promo=61125c95-31a8-4209-ada1-f8b7f914288f&target=register"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative overflow-hidden inline-block bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg text-[clamp(0.55rem,2.8vw,0.7rem)] md:text-[clamp(0.85rem,2.8vw,0.7rem)] whitespace-nowrap transition-all hover:scale-105 group shadow-xl hover:shadow-red-500/30 w-full max-w-[140px] sm:max-w-[160px] mx-auto"
                        >
                          <span className="relative z-10">ODBIERZ BONUS</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Regulations container - positioned at bottom with HIGHER z-index */}
      <div className="absolute bottom-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-4 pt-8 pb-6 md:pt-0">
          <div className="relative bg-gradient-to-r from-red-500/20 via-red-600/10 to-red-500/20 backdrop-blur-xl p-2 md:p-3 rounded-2xl border border-red-500/30 shadow-xl">
            <div className="flex items-start gap-2">
              {/* Warning icon */}
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-yellow-500 flex items-center justify-center">
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              {/* Text content */}
              <div className="flex-1">
                <p className="text-white/90 text-xs md:text-sm leading-tight">
                  Ta strona prezentuje informacje o ekskluzywnych kasynach i zawiera linki afiliacyjne przeznaczone
                  wyłącznie dla osób w regionach, gdzie hazard online jest legalny. Użytkownicy są odpowiedzialni za
                  zgodność z lokalnymi przepisami. Nie wspieramy nielegalnych form hazardu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom gradient overlay for smooth transition to social section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-30 pointer-events-none"></div>
    </section>
  )
}
