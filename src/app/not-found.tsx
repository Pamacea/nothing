'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-void-bg">
      <motion.div
        className="text-center z-10 px-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-[clamp(6rem,20vw,16rem)] font-extrabold tracking-[-0.02em] mb-8"
          style={{
            background: 'linear-gradient(180deg, #fafafa 0%, #666 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          404
        </motion.h1>

        <motion.p
          className="text-xl text-void-muted mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Il n&apos;y a rien ici non plus.
        </motion.p>

        <motion.p
          className="text-sm text-void-dim mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          La page que vous cherchez n&apos;existe pas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <Link
            href="/"
            className="inline-block text-xs font-semibold bg-transparent border-2 border-void-dim text-void-muted py-4 px-8 hover:text-void-bg hover:border-void-text transition-all duration-300"
          >
            Retourner au néant
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
