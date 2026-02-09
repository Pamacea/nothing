'use client'

import { motion } from 'framer-motion'

export function PhaseAccepted() {
  return (
    <div className="accepted-wrapper text-center">
      <motion.div
        className="text-[10rem] text-void-dim mb-8"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        ◯
      </motion.div>

      <p className="text-lg text-void-dim mb-2 font-normal">
        Vous avez accepté.
      </p>
      <p className="text-lg text-void-dim mb-2 font-normal">
        Le vide est paisible.
      </p>
      <p className="text-sm text-void-dim italic mt-8">
        Restez aussi longtemps que vous voulez.
      </p>
    </div>
  )
}
