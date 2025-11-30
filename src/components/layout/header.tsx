"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '/about-us', label: 'Nuestra Historia' },
  { href: '#contact', label: 'Contact' },
  { href: '/2025', label: 'Edición 2025' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const getLinkHref = (href: string) => {
    if (href.startsWith('/')) {
      return href;
    }
    if (isHomePage) {
      return href;
    }
    return `/${href}`;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-sm border-b" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg" prefetch={false}>
          <Image src="https://res.cloudinary.com/dxifmrvbs/image/upload/v1753553212/tliFrVJi_400x400_v0nnvh.jpg" alt="FlutterConf Logo" width={32} height={32} className="h-8 w-8 rounded-full" />
          <span className="font-headline">FlutterConf ES</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={getLinkHref(link.href)} className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          {!pathname.includes('/2025') && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button disabled className="hidden md:inline-flex bg-accent/50 text-accent-foreground opacity-60 cursor-not-allowed">
                    Próximamente
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Atento a nuestras RRSS</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="sr-only">Menú de Navegación</SheetTitle>
              <SheetDescription className="sr-only">
                Navegación principal del sitio, con enlaces a las diferentes secciones.
              </SheetDescription>
              <div className="grid gap-6 p-6">
                <Link href="/" className="flex items-center gap-2 font-bold text-lg" prefetch={false}>
                  <Image src="https://res.cloudinary.com/dxifmrvbs/image/upload/v1753553212/tliFrVJi_400x400_v0nnvh.jpg" alt="FlutterConf Logo" width={32} height={32} className="h-8 w-8 rounded-full" />
                  <span className="font-headline">FlutterConf ES</span>
                </Link>
                <nav className="grid gap-4">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={getLinkHref(link.href)} className="text-base font-medium hover:text-primary transition-colors" prefetch={false}>
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button disabled className="w-full bg-accent/50 text-accent-foreground opacity-60 cursor-not-allowed">
                        Próximamente
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Atento a nuestras RRSS</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
