import type { Metadata } from 'next';
import { Sen } from 'next/font/google';
import './globals.css';
const font = Sen({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Electa',
  description: 'Voting on anything',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
