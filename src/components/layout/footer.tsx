import Link from 'next/link';
import { Twitter, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div className="flex flex-col gap-4">
          <Link href="#" className="flex items-center gap-2 font-bold text-lg" prefetch={false}>
            <FlutterLogo className="h-8 w-8 text-primary" />
            <span className="font-headline">FlutterConf España 2025</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Organized by GDG Marbella. GDG Marbella is an independent group; our activities and the opinions expressed here should in no way be linked to Google, the corporation.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-3 md:col-span-2">
          <div className="grid gap-2">
            <h4 className="font-semibold font-headline">Navigation</h4>
            <Link href="#about" className="hover:text-primary" prefetch={false}>About</Link>
            <Link href="#speakers" className="hover:text-primary" prefetch={false}>Speakers</Link>
            <Link href="#agenda" className="hover:text-primary" prefetch={false}>Agenda</Link>
            <Link href="#sponsors" className="hover:text-primary" prefetch={false}>Sponsors</Link>
          </div>
          <div className="grid gap-2">
            <h4 className="font-semibold font-headline">Resources</h4>
            <Link href="#info" className="hover:text-primary" prefetch={false}>Info &amp; FAQ</Link>
            <Link href="#" className="hover:text-primary" prefetch={false}>Code of Conduct</Link>
            <Link href="#contact" className="hover:text-primary" prefetch={false}>Contact</Link>
          </div>
          <div className="grid gap-2">
            <h4 className="font-semibold font-headline">Connect</h4>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter className="h-5 w-5" /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin className="h-5 w-5" /></a>
              </Button>
               <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer"><Github className="h-5 w-5" /></a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t py-4">
        <p className="text-center text-xs text-muted-foreground">
          © 2025 FlutterConf España. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function FlutterLogo(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 14.5l5-5 5 5-5 5z" />
            <path d="M7 9.5l5-5 5 5" />
        </svg>
    )
}
