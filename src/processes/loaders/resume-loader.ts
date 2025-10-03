import { educationApi, experienceApi, skillsApi } from '@/shared/api/endpoints';
import { mockEducation, mockExperience, mockSkills } from '@/shared/api/mock-data';

export interface ResumePageData {
  education: typeof mockEducation;
  experience: typeof mockExperience;
  skills: typeof mockSkills;
}

export async function loadResumePageData(): Promise<ResumePageData> {
  try {
    const [educationResponse, experienceResponse, skillsResponse] = await Promise.all([
      educationApi.getAll().catch(() => ({ data: mockEducation })),
      experienceApi.getAll().catch(() => ({ data: mockExperience })),
      skillsApi.getAll().catch(() => ({ data: mockSkills })),
    ]);

    return {
      education: educationResponse.data,
      experience: experienceResponse.data,
      skills: skillsResponse.data,
    };
  } catch (error) {
    console.error('Error loading resume page data:', error);
    
    return {
      education: mockEducation,
      experience: mockExperience,
      skills: mockSkills,
    };
  }
}
