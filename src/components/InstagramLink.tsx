'use client'

import { type MouseEvent, type ReactNode } from 'react'

type InstagramLinkProps = {
  href?: string
  className?: string
  ariaLabel?: string
  children: ReactNode
}

const INSTAGRAM_URL = 'https://www.instagram.com/lilisicopiii/'

export default function InstagramLink({ href = INSTAGRAM_URL, className, ariaLabel = 'Instagram', children }: InstagramLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()

    const openedWindow = window.open(href, '_blank', 'noopener,noreferrer')

    if (!openedWindow) {
      window.location.href = href
    }
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}
