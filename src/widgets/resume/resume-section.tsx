import { Typography } from '@/shared/ui';
import { Education, Experience, Skill } from '@/shared/api/types';
import { EducationCard } from './education-card';
import { ExperienceCard } from './experience-card';
import { SkillCard } from './skill-card';

interface ResumeSectionProps {
  education: Education[];
  experience: Experience[];
  skills: Skill[];
}

export function ResumeSection({ education, experience, skills }: ResumeSectionProps) {
  return (
    <div className="space-y-12">
      {/* Education Section */}
      <div className="space-y-6">
        <Typography variant="h2" className="relative pb-2">
          Resume
          <div className="absolute bottom-0 left-0 h-1 w-8 bg-gradient-to-r from-orange-yellow-crayola to-orange-yellow-crayola/80 rounded" />
        </Typography>
        
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-jet to-onyx text-orange-yellow-crayola">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <Typography variant="h3">Education</Typography>
          </div>
          
          <div className="ml-16 space-y-6">
            {education.map((edu) => (
              <EducationCard key={edu.id} education={edu} />
            ))}
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-jet to-onyx text-orange-yellow-crayola">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
            </svg>
          </div>
          <Typography variant="h3">Experience</Typography>
        </div>
        
        <div className="ml-16 space-y-6">
          {experience.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="space-y-6">
        <Typography variant="h3">My skills</Typography>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
