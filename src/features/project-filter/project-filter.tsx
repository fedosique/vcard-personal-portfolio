'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/shared/ui';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'web-design', label: 'Web Design' },
  { id: 'web-development', label: 'Web Development' },
  { id: 'applications', label: 'Applications' },
];

interface ProjectFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function ProjectFilter({ activeCategory, onCategoryChange }: ProjectFilterProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap justify-center gap-4 md:justify-start">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onCategoryChange(category.id)}
            className="transition-all duration-200"
          >
            {category.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
