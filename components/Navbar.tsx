"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Leaf, ChevronDown, Globe, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/ThemeToggle"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/navigation/home" },
    { name: "Dashboard", href: "/navigation/dashboard" },
    { name: "Analytics", href: "/navigation/analytics" },
    { name: "Settings", href: "/navigation/settings" },
    {
      name: "Resources",
      items: [
        { name: "Blog", href: "/blog" },
        { name: "Guides", href: "/guides" },
        { name: "FAQ", href: "/faq" },
      ],
    },
    { name: "About", href: "/about" },
  ]

  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/navigation/home" className="flex-shrink-0 flex items-center">
              <Leaf className="h-8 w-8 text-primary" aria-hidden="true" />
              <span className="ml-2 text-xl font-bold text-foreground">Liveable Cities</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center justify-between flex-1 ml-10">
            <div className="flex space-x-4">
              {navItems.map((item) =>
                item.items ? (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger className="inline-flex items-center px-1 pt-1 text-sm font-medium text-muted-foreground hover:text-foreground">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {item.items.map((subItem) => (
                        <DropdownMenuItem key={subItem.name}>
                          <Link 
                            href={subItem.href} 
                            className={`w-full ${pathname === subItem.href ? 'text-foreground font-semibold' : 'text-muted-foreground'}`}
                          >
                            {subItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${
                      pathname === item.href
                        ? 'border-primary text-foreground'
                        : 'border-transparent text-muted-foreground hover:text-foreground hover:border-muted'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">Login</Button>
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Change language</span>
              </Button>
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-4">
                  {navItems.map((item) =>
                    item.items ? (
                      <DropdownMenu key={item.name}>
                        <DropdownMenuTrigger className="text-left text-sm font-medium text-muted-foreground hover:text-foreground">
                          {item.name}
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          {item.items.map((subItem) => (
                            <DropdownMenuItem key={subItem.name}>
                              <Link 
                                href={subItem.href} 
                                className={`w-full ${pathname === subItem.href ? 'text-foreground font-semibold' : 'text-muted-foreground'}`}
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`text-sm font-medium border-l-4 pl-3 py-2 ${
                          pathname === item.href
                            ? 'border-primary text-foreground bg-accent'
                            : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-accent hover:border-muted'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                  <Button variant="outline" className="w-full" onClick={() => setIsOpen(false)}>
                    Login
                  </Button>
                  <Button variant="ghost" size="icon" className="w-full flex justify-start" onClick={() => setIsOpen(false)}>
                    <Globe className="h-5 w-5 mr-2" />
                    Change language
                  </Button>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Theme</span>
                    <ThemeToggle />
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}