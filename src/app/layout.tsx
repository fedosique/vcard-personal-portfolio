import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Providers } from './providers';
import '@/shared/styles/globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'vCard - Personal Portfolio',
  description: 'Modern personal portfolio built with Next.js and Feature-Sliced Design',
  keywords: ['portfolio', 'web developer', 'designer', 'nextjs'],
  authors: [{ name: 'Richard Hanrick' }],
  openGraph: {
    title: 'vCard - Personal Portfolio',
    description: 'Modern personal portfolio built with Next.js and Feature-Sliced Design',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="min-h-screen bg-smoky-black text-white-2">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
