'use client';

import { useState } from 'react';
import { Typography } from '@/shared/ui';
import { ProjectFilter } from '@/features/project-filter';
import { ProjectCard } from '@/entities/project';
import { Project } from '@/shared/api/types';

interface PortfolioSectionProps {
  projects: Project[];
}

export function PortfolioSection({ projects }: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="space-y-8">
      <Typography variant="h2" className="relative pb-2">
        Portfolio
        <div className="absolute bottom-0 left-0 h-1 w-8 bg-gradient-to-r from-orange-yellow-crayola to-orange-yellow-crayola/80 rounded" />
      </Typography>

      <ProjectFilter 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
