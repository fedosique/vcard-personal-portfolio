'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Navbar } from '@/features/navigation';

export function ClientNavbar() {
  const pathname = usePathname();
  const router = useRouter();

  // Определяем активную секцию на основе текущего пути
  const getActiveSection = () => {
    if (pathname === '/') return 'about';
    if (pathname === '/resume') return 'resume';
    if (pathname === '/portfolio') return 'portfolio';
    if (pathname === '/blog') return 'blog';
    if (pathname === '/contact') return 'contact';
    return 'about';
  };

  const handleSectionChange = (section: string) => {
    switch (section) {
      case 'about':
        router.push('/');
        break;
      case 'resume':
        router.push('/resume');
        break;
      case 'portfolio':
        router.push('/portfolio');
        break;
      case 'blog':
        router.push('/blog');
        break;
      case 'contact':
        router.push('/contact');
        break;
      default:
        router.push('/');
    }
  };

  return (
    <Navbar 
      activeSection={getActiveSection()} 
      onSectionChange={handleSectionChange} 
    />
  );
}
