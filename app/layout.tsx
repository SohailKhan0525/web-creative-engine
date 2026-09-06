import type { Metadata } from 'next';
import './globals.css';
import './effects.css';

export const metadata: Metadata = {
  title: 'Web Creative Engine',
  description: 'A visual, responsive web editor for building polished experiences.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
