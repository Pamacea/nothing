'use client'

import { motion } from 'framer-motion'

interface PhaseNothingProps {
  onRestart: () => void
  onAccept: () => void
}

export function PhaseNothing({ onRestart, onAccept }: PhaseNothingProps) {
  return (
    <div className="nothing-wrapper text-center max-w-2xl mx-auto px-8" role="status" aria-live="polite">
      <motion.h1
        className="text-[clamp(5rem,25vw,18rem)] font-extrabold tracking-[-0.02em] nothing-title shatter-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        RIEN.
      </motion.h1>

      {[
        'Il n&apos;y avait rien.',
        'Il n&apos;y a jamais rien eu.',
      ].map((text, i) => (
        <motion.p
          key={i}
          className="text-xl text-void-muted mb-2 font-normal nothing-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 + i * 1, duration: 0.8 }}
        >
          {text}
        </motion.p>
      ))}

      {[
        'Vous avez attendu pour rien.',
        'Comme d\'habitude.',
      ].map((text, i) => (
        <motion.p
          key={i}
          className="text-base text-void-dim italic mb-1 nothing-subtext"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 + i * 1, duration: 0.8 }}
        >
          {text}
        </motion.p>
      ))}

      <motion.div
        className="mt-16 flex gap-6 justify-center flex-wrap nothing-options"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 6, duration: 0.8 }}
        role="group"
        aria-label="Options après la révélation"
      >
        <motion.button
          onClick={onRestart}
          className="btn-void"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Recommencer l&apos;expérience depuis le début"
        >
          Recommencer l&apos;attente
        </motion.button>
        <motion.button
          onClick={onAccept}
          className="btn-void btn-accept"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Accepter le vide et terminer l&apos;expérience"
        >
          Accepter le vide
        </motion.button>
      </motion.div>
    </div>
  )
}
