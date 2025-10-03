'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Typography } from '@/shared/ui';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Resume' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];

interface NavbarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Navbar({ activeSection, onSectionChange }: NavbarProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-jet bg-eerie-black-1/75 backdrop-blur-lg">
      <div className="flex justify-center">
        <div className="flex space-x-8 px-4 py-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`relative px-3 py-2 text-fs-8 transition-colors ${
                activeSection === item.id
                  ? 'text-orange-yellow-crayola'
                  : 'text-light-gray hover:text-light-gray-70'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 rounded-lg bg-orange-yellow-crayola/10"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
