import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

// ✅ Correct favicon path (your logo is logo1-1.png in /public/images)
export const metadata: Metadata = {
  title: 'GenixAI',
  description: 'One stop solution to all your generative AI and creative needs.',
  icons: {
    icon: '/images/logo1-1.png', // <-- Correct path to favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
