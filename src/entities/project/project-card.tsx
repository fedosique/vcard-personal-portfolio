'use client';

import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Typography } from '@/shared/ui';
import { Project } from '@/shared/api/types';

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-xl">
        <div className="relative h-48 w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="rounded-lg bg-jet p-4 text-orange-yellow-crayola">
              <ExternalLink className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <Typography variant="h4">{project.title}</Typography>
        <Typography variant="caption" className="text-orange-yellow-crayola">
          {project.category.replace('-', ' ')}
        </Typography>
      </div>
    </motion.div>
  );
}
