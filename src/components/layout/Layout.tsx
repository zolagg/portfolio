import { ReactNode } from 'react';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/footer/Footer';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 w-full max-w-screen-2xl mx-auto px-4">{children}</main>
      <Footer />
    </div>
  );
} 