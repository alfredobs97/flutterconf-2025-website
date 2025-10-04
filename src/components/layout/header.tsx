"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#speakers', label: 'Speakers' },
  { href: '#agenda', label: 'Agenda' },
  { href: '/about-us', label: 'Nuestra Historia' },
  { href: '#sponsors', label: 'Sponsors' },
  { href: '#contact', label: 'Contact' },
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
          <Button asChild className="hidden md:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground">
            <a href="https://gdg.community.dev/events/details/google-gdg-marbella-presents-flutterconf-espana-2025/cohost-gdg-marbella" target="_blank" rel="noopener noreferrer">Apúntate</a>
          </Button>
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
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <a href="https://gdg.community.dev/events/details/google-gdg-marbella-presents-flutterconf-espana-2025/cohost-gdg-marbella" target="_blank" rel="noopener noreferrer">Apúntate</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
