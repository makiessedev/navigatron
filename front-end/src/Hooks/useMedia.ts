'use client'

import { useEffect, useState } from 'react'

export function useMedia(media: string) {
  const [matche, setMache] = useState<Boolean>(false)

  useEffect(() => {
    function changeMatch() {
      const { matches } = matchMedia(media)

      setMache(matches)
    }

    changeMatch()

    addEventListener('resize', changeMatch)
    addEventListener('loadstart', changeMatch)

    return () => {
      removeEventListener('resize', changeMatch)
      removeEventListener('loadstart', changeMatch)
    }
  }, [media])

  return matche
}
