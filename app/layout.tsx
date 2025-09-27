import { Container } from '@/components/common/container';
import { Navbar } from '@/components/common/navbar';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'] });

const title = 'Kunal Garg';
const description = 'In search of software that brings joy to people';

export const metadata: Metadata = {
  title,
  description,
  robots: 'index, follow',
  classification: 'Blog, Person Portfolio',
  keywords: 'blog, personal portfolio, tech, Kunal Garg, software engineering',
  openGraph: {
    type: 'website',
    title,
    description,
    siteName: title,
  },
  creator: 'Kunal Garg',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Container>
          <Navbar />
          <div className='mb-4' />
          {children}
        </Container>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
