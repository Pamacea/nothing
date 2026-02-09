'use client'

import { useEffect, useState, useMemo, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MYSTERY_TEXTS, HINTS, type HintText } from '@/lib/constants'

interface TimeDisplay {
  hours: string
  minutes: string
  seconds: string
}

interface CountdownTimerProps {
  remainingSeconds: number
  totalSeconds: number
  tension: number
  onComplete: () => void
  onSkip: () => void
}

export function CountdownTimer({ remainingSeconds, totalSeconds, tension, onComplete, onSkip }: CountdownTimerProps) {
  const [mysteryIndex, setMysteryIndex] = useState(0)
  const [currentHint, setCurrentHint] = useState<HintText>(HINTS[0].text)
  const [shake, setShake] = useState(false)
  const prevSeconds = useRef(remainingSeconds)

  useEffect(() => {
    if (remainingSeconds !== prevSeconds.current) {
      prevSeconds.current = remainingSeconds
    }
  }, [remainingSeconds])

  const timeDisplay = useMemo((): TimeDisplay => {
    const h = Math.floor(remainingSeconds / 3600)
    const m = Math.floor((remainingSeconds % 3600) / 60)
    const s = remainingSeconds % 60
    return {
      hours: h.toString().padStart(2, '0'),
      minutes: m.toString().padStart(2, '0'),
      seconds: s.toString().padStart(2, '0'),
    }
  }, [remainingSeconds])

  useEffect(() => {
    if (remainingSeconds <= 0) {
      onComplete()
    }
  }, [remainingSeconds, onComplete])

  useEffect(() => {
    if (remainingSeconds % 8 === 0) {
      setMysteryIndex(prev => (prev + 1) % MYSTERY_TEXTS.length)
    }
  }, [remainingSeconds])

  useEffect(() => {
    const hint = HINTS.filter(h => h.tension <= tension).pop()
    if (hint && hint.text !== currentHint) {
      setCurrentHint(hint.text)
    }
  }, [tension, currentHint])

  useEffect(() => {
    if (remainingSeconds < 10 && remainingSeconds > 0) {
      setShake(true)
      setTimeout(() => setShake(false), 300)
    }
  }, [remainingSeconds])

  return (
    <div className="countdown-wrapper text-center">
      <div className="text-xs tracking-[0.5em] text-void-muted mb-12 uppercase">
        Quelque chose arrive dans
      </div>

      <div
        className="flex items-center justify-center gap-8 mb-12"
        role="timer"
        aria-live="polite"
        aria-atomic="true"
        aria-label={`Temps restant: ${timeDisplay.hours} heures, ${timeDisplay.minutes} minutes, ${timeDisplay.seconds} secondes`}
      >
        <TimeBlock value={timeDisplay.hours} label="Heures" />
        <span className="text-[clamp(3rem,10vw,7rem)] font-extrabold text-void-dim animate-pulse-sep" aria-hidden="true">
          :
        </span>
        <TimeBlock value={timeDisplay.minutes} label="Minutes" />
        <span className="text-[clamp(3rem,10vw,7rem)] font-extrabold text-void-dim animate-pulse-sep" aria-hidden="true">
          :
        </span>
        <TimeBlock value={timeDisplay.seconds} label="Secondes" />
      </div>

      <div className="h-16 flex items-center justify-center mb-12" aria-live="polite" aria-atomic="true">
        <AnimatePresence mode="wait">
          <motion.span
            key={mysteryIndex}
            className="text-2xl font-bold tracking-[0.3em] text-void-accent glitch-text"
            data-text={MYSTERY_TEXTS[mysteryIndex]}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            {MYSTERY_TEXTS[mysteryIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      <div className="mb-12">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentHint}
            className="text-base text-void-muted italic"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {currentHint}
          </motion.p>
        </AnimatePresence>
      </div>

      <motion.button
        onClick={onSkip}
        className="text-[0.7rem] font-normal bg-transparent border border-void-dim text-void-muted py-3 px-8 cursor-pointer tracking-[0.1em] transition-all duration-300 hover:border-void-accent hover:text-void-accent"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Passer directement à la révélation"
      >
        Je n&apos;ai pas le temps →
      </motion.button>

      <motion.div
        className="fixed bottom-0 left-0 right-0 h-1 bg-void-dim/20"
        initial={{ width: 0 }}
        role="progressbar"
        aria-valuenow={tension}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Progression du compte à rebours"
      >
        <motion.div
          className="h-full"
          style={{
            background: 'linear-gradient(90deg, #ff2244, #ff6644, #ffaa44, #ff2244)',
            backgroundSize: '300% 100%',
          }}
          animate={{ width: `${tension}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </motion.div>

      {shake && (
        <motion.div
          className="fixed inset-0 pointer-events-none"
          animate={{
            x: [0, -3, 3, -2, 2, 0],
            rotate: [0, -0.5, 0.5, 0, 0, 0],
          }}
          transition={{ duration: 0.3 }}
        />
      )}
    </div>
  )
}

interface TimeBlockProps {
  value: string
  label: string
}

function TimeBlock({ value, label }: TimeBlockProps) {
  return (
    <div className="flex flex-col items-center relative">
      <span
        className="text-[clamp(5rem,18vw,12rem)] font-extrabold leading-none tracking-[-0.02em] time-value-3d"
        style={{
          background: 'linear-gradient(180deg, #fafafa 0%, #888 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
        data-value={value}
      >
        {value}
      </span>
      <span className="text-[0.6rem] tracking-[0.3em] text-void-dim mt-4 uppercase">
        {label}
      </span>
    </div>
  )
}
