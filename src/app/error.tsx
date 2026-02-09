'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-void-bg">
      <motion.div
        className="text-center z-10 px-8 max-w-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="text-[clamp(5rem,15vw,10rem)] font-extrabold tracking-[-0.02em] mb-8"
          style={{
            background: 'linear-gradient(180deg, #ff2244 0%, #880022 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          !
        </motion.div>

        <motion.h2
          className="text-2xl font-bold text-void-text mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Quelque chose s&apos;est mal passé
        </motion.h2>

        <motion.p
          className="text-base text-void-muted mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Même le vide a ses limites. Une erreur inattendue s&apos;est produite.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <button
            onClick={reset}
            className="text-xs font-semibold bg-transparent border-2 border-void-dim text-void-muted py-4 px-8 hover:text-void-bg hover:border-void-text transition-all duration-300"
          >
            Réessayer
          </button>
          <button
            onClick={() => (window.location.href = '/')}
            className="text-xs font-semibold bg-transparent border-2 border-void-dim text-void-muted py-4 px-8 hover:text-void-bg hover:border-void-text transition-all duration-300"
          >
            Retour au début
          </button>
        </motion.div>

        {process.env.NODE_ENV === 'development' && (
          <motion.details
            className="mt-8 text-left text-xs text-void-dim font-mono bg-void-bg/50 p-4 rounded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <summary className="cursor-pointer hover:text-void-muted">
              Détails de l&apos;erreur
            </summary>
            <pre className="mt-2 whitespace-pre-wrap break-all">
              {error.message}
              {error.digest && `\n\nDigest: ${error.digest}`}
            </pre>
          </motion.details>
        )}
      </motion.div>
    </div>
  )
}
