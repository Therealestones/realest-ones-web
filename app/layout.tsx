import type { Metadata } from 'next';
import { Anton, Archivo, Inter } from 'next/font/google';
import './globals.css';

// Brand typography (brand.json): Anton = display, Archivo = headings, Inter = body
const anton = Anton({ weight: '400', subsets: ['latin'], variable: '--font-display', display: 'swap' });
const archivo = Archivo({
  weight: ['500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});
const inter = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' });

export const metadata: Metadata = {
  title: 'The Realest Ones — Real Never Fold',
  description:
    'Apparel for the ones who carry weight quietly. Not for ourselves alone are we born.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${archivo.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
