'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { COLORS, TILE_CONFIG } from '@/lib/constants'

interface Tile {
  id: number
  active: boolean
  color: string
}

interface MosaicBackgroundProps {
  tension: number
  explode?: boolean
  fadeOut?: boolean
}

export function MosaicBackground({ tension, explode = false, fadeOut = false }: MosaicBackgroundProps) {
  const [tiles, setTiles] = useState<Tile[]>([])
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const COLS = isMobile ? TILE_CONFIG.MOBILE.cols : TILE_CONFIG.DESKTOP.cols
  const ROWS = isMobile ? TILE_CONFIG.MOBILE.rows : TILE_CONFIG.DESKTOP.rows

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < TILE_CONFIG.MOBILE_BREAKPOINT)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const tileCount = COLS * ROWS
    const newTiles: Tile[] = Array.from({ length: tileCount }, (_, i) => ({
      id: i,
      active: false,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }))
    setTiles(newTiles)
  }, [COLS, ROWS])

  useEffect(() => {
    if (explode) {
      setTiles(prev => prev.map(tile => ({ ...tile, active: true, color: '#ff2244' })))
      return
    }

    if (fadeOut) {
      setTiles(prev => prev.map(tile => ({ ...tile, active: false })))
      return
    }

    const numActive = Math.floor((tension / 100) * tiles.length * 0.3)
    const activeIndices = new Set<number>()

    while (activeIndices.size < numActive) {
      activeIndices.add(Math.floor(Math.random() * tiles.length))
    }

    setTiles(prev => prev.map((tile, index) => ({
      ...tile,
      active: activeIndices.has(index),
      color: activeIndices.has(index)
        ? COLORS[Math.floor(Math.random() * COLORS.length)]
        : tile.color,
    })))
  }, [tension, explode, fadeOut, tiles.length])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 grid opacity-30 pointer-events-none"
      style={{
        gridTemplateColumns: `repeat(${COLS}, 1fr)`,
        gridTemplateRows: `repeat(${ROWS}, 1fr)`,
        gap: '1px',
        transition: fadeOut ? 'opacity 2s' : undefined,
        opacity: fadeOut ? 0.1 : 0.3,
      }}
    >
      {tiles.map(tile => (
        <motion.div
          key={tile.id}
          className="mosaic-tile"
          style={{
            backgroundColor: '#111',
          }}
          animate={{
            backgroundColor: tile.active ? tile.color : '#111',
            boxShadow: tile.active ? `0 0 20px ${tile.color}` : 'none',
          }}
          transition={{
            duration: 0.5,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  )
}
