'use client'

import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MosaicBackground } from '@/components/MosaicBackground'
import { CountdownTimer } from '@/components/CountdownTimer'
import { PhaseReveal } from '@/components/PhaseReveal'
import { PhaseNothing } from '@/components/PhaseNothing'
import { PhaseAccepted } from '@/components/PhaseAccepted'
import { COUNTDOWN_DURATION, type Phase } from '@/lib/constants'

export default function Home() {
  const [phase, setPhase] = useState<Phase>('countdown')
  const [tension, setTension] = useState(0)
  const [remainingTime, setRemainingTime] = useState(COUNTDOWN_DURATION)
  const [footerStatus, setFooterStatus] = useState('EN ATTENTE...')
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString())
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (phase === 'countdown') {
      const interval = setInterval(() => {
        setRemainingTime(prev => {
          const newValue = prev - 1
          if (newValue <= 0) return 0
          setTension(((COUNTDOWN_DURATION - newValue) / COUNTDOWN_DURATION) * 100)
          return newValue
        })
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [phase])

  const handleCountdownComplete = useCallback(() => {
    setFooterStatus('RÉVÉLATION...')
    setPhase('reveal')
  }, [])

  const handleSkip = useCallback(() => {
    setRemainingTime(5)
  }, [])

  const handleRevealComplete = useCallback(() => {
    setFooterStatus('TERMINÉ.')
    setPhase('nothing')
  }, [])

  const handleRestart = useCallback(() => {
    setRemainingTime(COUNTDOWN_DURATION)
    setTension(0)
    setFooterStatus('EN ATTENTE...')
    setPhase('countdown')
  }, [])

  const handleAccept = useCallback(() => {
    setFooterStatus('PAIX.')
    setPhase('accepted')
  }, [])

  return (
    <main className="min-h-screen flex items-center justify-center relative" role="main" aria-label="Expérience de compte à rebours NOTHING">
      <MosaicBackground
        tension={tension}
        explode={phase === 'reveal'}
        fadeOut={phase === 'nothing' || phase === 'accepted'}
      />

      <motion.div
        className="relative z-10 w-full px-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, cubicBezier: [0.19, 1, 0.22, 1] }}
      >
        <AnimatePresence mode="wait">
          {phase === 'countdown' && (
            <motion.div
              key="countdown"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.8, cubicBezier: [0.19, 1, 0.22, 1] }}
            >
              <CountdownTimer
                remainingSeconds={remainingTime}
                tension={tension}
                onComplete={handleCountdownComplete}
                onSkip={handleSkip}
              />
            </motion.div>
          )}

          {phase === 'reveal' && (
            <motion.div
              key="reveal"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.8, cubicBezier: [0.19, 1, 0.22, 1] }}
            >
              <PhaseReveal onComplete={handleRevealComplete} />
            </motion.div>
          )}

          {phase === 'nothing' && (
            <motion.div
              key="nothing"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.8, cubicBezier: [0.19, 1, 0.22, 1] }}
            >
              <PhaseNothing onRestart={handleRestart} onAccept={handleAccept} />
            </motion.div>
          )}

          {phase === 'accepted' && (
            <motion.div
              key="accepted"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, cubicBezier: [0.19, 1, 0.22, 1] }}
            >
              <PhaseAccepted />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <footer className="fixed bottom-6 left-8 right-8 flex justify-between text-[0.65rem] text-void-dim tracking-[0.15em] z-50 uppercase" aria-live="polite" aria-atomic="true">
        <span>{footerStatus}</span>
        <span aria-label={`Heure actuelle: ${currentTime}`}>{currentTime}</span>
      </footer>
    </main>
  )
}
