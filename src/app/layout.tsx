import type { Metadata } from 'next';


import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { cn } from '@/lib/utils';
import { I18nProvider } from '@/components/providers/i18n-provider';
import { AnalyticsProvider } from '@/components/analytics/analytics-provider';

export const metadata: Metadata = {
  title: 'FlutterConf España 2026',
  description: 'La cita anual para la comunidad de Flutter en España. Únete a los líderes que están revolucionando el desarrollo mobile.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Plus+Jakarta+Sans:wght@900&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased')}>
        <I18nProvider>
          <AnalyticsProvider>
            <div className="relative flex min-h-dvh flex-col bg-background">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </AnalyticsProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
