'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { REVEAL_SEQUENCE, type RevealText } from '@/lib/constants'

interface PhaseRevealProps {
  onComplete: () => void
}

export function PhaseReveal({ onComplete }: PhaseRevealProps) {
  const [revealText, setRevealText] = useState<RevealText>(REVEAL_SEQUENCE[0])
  const [showBigText, setShowBigText] = useState(false)

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setRevealText(REVEAL_SEQUENCE[1]), 2000),
      setTimeout(() => setRevealText(REVEAL_SEQUENCE[2]), 4000),
      setTimeout(() => setRevealText(REVEAL_SEQUENCE[0]), 6000),
      setTimeout(onComplete, 8000),
    ]

    setTimeout(() => setShowBigText(true), 1500)

    return () => timeouts.forEach(clearTimeout)
  }, [onComplete])

  return (
    <div className="reveal-wrapper text-center relative">
      <motion.div
        className="absolute inset-0 bg-void-accent/5 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.3, 0.3, 0] }}
        transition={{ duration: 8, times: [0, 0.1, 0.9, 1] }}
      />

      <div className="flex flex-col gap-8 relative z-10">
        <motion.span
          className="text-sm tracking-[0.5em] text-void-muted/80 uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.19, 1, 0.22, 1] }}
        >
          Le moment est venu
        </motion.span>

        <div className="relative inline-block">
          <AnimatePresence mode="wait">
            <motion.span
              key={revealText}
              className="text-[clamp(5rem,25vw,18rem)] font-extrabold tracking-tight inline-block"
              style={{
                background: 'linear-gradient(180deg, #fafafa 0%, #ff2244 50%, #880022 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              initial={{
                opacity: 0,
                scale: 0.8,
                filter: 'blur(20px)',
              }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: 'blur(0px)',
              }}
              exit={{
                opacity: 0,
                scale: 1.2,
                filter: 'blur(30px)',
              }}
              transition={{
                duration: 1.5,
                ease: [0.19, 1, 0.22, 1],
              }}
            >
              {revealText}
            </motion.span>
          </AnimatePresence>

          {showBigText && (
            <>
              <motion.span
                className="absolute inset-0 text-[clamp(5rem,25vw,18rem)] font-extrabold tracking-tight inline-block"
                style={{
                  background: 'linear-gradient(135deg, #ff2244 0%, #ff00ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'blur(15px)',
                  opacity: 0.4,
                }}
                animate={{
                  x: [0, 3, -3, 2, -2, 0],
                  y: [0, -2, 2, -1, 1, 0],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              >
                {revealText}
              </motion.span>

              <motion.span
                className="absolute inset-0 text-[clamp(5rem,25vw,18rem)] font-extrabold tracking-tight inline-block text-void-accent/20"
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {revealText}
              </motion.span>
            </>
          )}
        </div>

        <motion.div
          className="flex justify-center gap-1 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.span
              key={i}
              className="w-1 h-1 bg-void-accent rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}
