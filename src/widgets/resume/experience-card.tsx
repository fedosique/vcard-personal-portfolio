import { Typography } from '@/shared/ui';
import { Experience } from '@/shared/api/types';

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="relative">
      <div className="space-y-2">
        <Typography variant="h4">{experience.position}</Typography>
        <Typography variant="caption" className="text-vegas-gold">
          {experience.period}
        </Typography>
        <Typography variant="body">
          {experience.description}
        </Typography>
      </div>
      
      {/* Timeline dot */}
      <div className="absolute -left-8 top-2 h-2 w-2 rounded-full bg-gradient-to-r from-orange-yellow-crayola to-orange-yellow-crayola/80 shadow-lg shadow-orange-yellow-crayola/50" />
      
      {/* Timeline line */}
      <div className="absolute -left-7 top-4 h-full w-px bg-jet" />
    </div>
  );
}
