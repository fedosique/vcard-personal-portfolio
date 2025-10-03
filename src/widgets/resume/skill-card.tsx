import { Typography } from '@/shared/ui';
import { Skill } from '@/shared/api/types';

interface SkillCardProps {
  skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="rounded-xl border border-jet bg-gradient-to-br from-eerie-black-2 to-eerie-black-1 p-4 shadow-shadow-2">
      <div className="mb-3 flex items-center justify-between">
        <Typography variant="h5">{skill.name}</Typography>
        <Typography variant="caption" className="text-light-gray">
          {skill.level}%
        </Typography>
      </div>
      
      <div className="h-2 w-full rounded-full bg-jet">
        <div
          className="h-full rounded-full bg-gradient-to-r from-orange-yellow-crayola to-orange-yellow-crayola/80 transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
}
