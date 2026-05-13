import './globals.css';
import type { Metadata } from 'next';
import { LenisProvider } from '@/components/providers/LenisProvider';
import { SceneCanvas } from '@/components/three/SceneCanvas';
import { CustomCursor } from '@/components/ui/CustomCursor';

export const metadata: Metadata = {
  title: 'Ayush Portfolio',
  description: 'Interactive portfolio'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 antialiased">
        <LenisProvider>
          <SceneCanvas />
          <CustomCursor />
          <main className="relative z-10">{children}</main>
        </LenisProvider>
      </body>
    </html>
  );
}
