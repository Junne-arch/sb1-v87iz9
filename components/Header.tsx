"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'

const Header = () => {
  const pathname = usePathname()

  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold">Next.js Dashboard</span>
          </Link>
          <nav className="flex gap-6">
            <Link
              href="/home"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/home" ? "text-foreground" : "text-foreground/60"
              )}
            >
              Home
            </Link>
            <Link
              href="/analytics"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/analytics" ? "text-foreground" : "text-foreground/60"
              )}
            >
              Analytics
            </Link>
            <Link
              href="/settings"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/settings" ? "text-foreground" : "text-foreground/60"
              )}
            >
              Settings
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <ModeToggle />
            <Button variant="secondary" className="px-4 py-2">
              Login
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header