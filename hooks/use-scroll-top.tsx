"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

/**
 * Hook that scrolls the window to the top when the pathname changes
 */
export function useScrollTop() {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant", // Use 'smooth' for animated scrolling
    })
  }, [pathname])
}
