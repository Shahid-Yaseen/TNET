"use client"

import { useScrollTop } from "@/hooks/use-scroll-top"

/**
 * Component that handles scrolling to top on route changes
 * This component doesn't render anything visible
 */
export function ScrollToTop() {
  useScrollTop()
  return null
}
