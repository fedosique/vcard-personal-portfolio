import { userApi, servicesApi, testimonialsApi, clientsApi } from '@/shared/api/endpoints';
import { mockUser, mockServices, mockTestimonials, mockClients } from '@/shared/api/mock-data';

export interface HomePageData {
  user: typeof mockUser;
  services: typeof mockServices;
  testimonials: typeof mockTestimonials;
  clients: typeof mockClients;
}

export async function loadHomePageData(): Promise<HomePageData> {
  try {
    // In production, these would be actual API calls
    // For now, we'll use mock data
    const [userResponse, servicesResponse, testimonialsResponse, clientsResponse] = await Promise.all([
      userApi.getProfile().catch(() => ({ data: mockUser })),
      servicesApi.getAll().catch(() => ({ data: mockServices })),
      testimonialsApi.getAll().catch(() => ({ data: mockTestimonials })),
      clientsApi.getAll().catch(() => ({ data: mockClients })),
    ]);

    return {
      user: userResponse.data,
      services: servicesResponse.data,
      testimonials: testimonialsResponse.data,
      clients: clientsResponse.data,
    };
  } catch (error) {
    console.error('Error loading home page data:', error);
    
    // Fallback to mock data
    return {
      user: mockUser,
      services: mockServices,
      testimonials: mockTestimonials,
      clients: mockClients,
    };
  }
}
