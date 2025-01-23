'use client'

import * as RadixProgress from '@radix-ui/react-progress'
import { createContext, ReactNode, useContext } from 'react'

const ProgressContext = createContext(
  {} as {
    max: number
    current: number
  },
)

interface ProgressProps {
  children: ReactNode
  max: number
  current: number
}

export function Progress({ children, max, current }: ProgressProps) {
  return (
    <div className="flex items-center gap-3">
      <ProgressContext.Provider value={{ max, current }}>
        {children}
      </ProgressContext.Provider>
    </div>
  )
}

export function ProgressBar() {
  const { max, current } = useContext(ProgressContext)

  return (
    <RadixProgress.Root className="h-3 flex-1 bg-bunker-700 rounded-md">
      <RadixProgress.Indicator
        className="h-3 rounded-md bg-bunker-200 transition-all"
        style={{
          width: `${Math.round((current * 100) / max)}%`,
        }}
      />
    </RadixProgress.Root>
  )
}

export function ProgressIndicator() {
  const { max, current } = useContext(ProgressContext)

  return (
    <span className="text-sm font-mono font-bold">
      {String(current).padStart(2, '0')}/{max}
    </span>
  )
}
