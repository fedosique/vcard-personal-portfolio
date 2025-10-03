import { projectsApi } from '@/shared/api/endpoints';
import { mockProjects } from '@/shared/api/mock-data';

export interface PortfolioPageData {
  projects: typeof mockProjects;
}

export async function loadPortfolioPageData(): Promise<PortfolioPageData> {
  try {
    const projectsResponse = await projectsApi.getAll().catch(() => ({ data: mockProjects }));

    return {
      projects: projectsResponse.data,
    };
  } catch (error) {
    console.error('Error loading portfolio page data:', error);
    
    return {
      projects: mockProjects,
    };
  }
}

export async function loadProjectByCategory(category: string): Promise<PortfolioPageData> {
  try {
    const projectsResponse = await projectsApi.getByCategory(category).catch(() => ({ data: mockProjects }));

    return {
      projects: projectsResponse.data,
    };
  } catch (error) {
    console.error('Error loading projects by category:', error);
    
    return {
      projects: mockProjects,
    };
  }
}
