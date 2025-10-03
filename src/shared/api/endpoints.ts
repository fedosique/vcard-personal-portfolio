import { apiClient } from './client';
import {
  User,
  Service,
  Testimonial,
  Client,
  Education,
  Experience,
  Skill,
  Project,
  BlogPost,
  ContactFormData,
  ContactResponse,
  PaginatedResponse,
} from './types';

// User endpoints
export const userApi = {
  getProfile: (): Promise<{ data: User }> =>
    apiClient.get<User>('/user/profile'),
};

// Services endpoints
export const servicesApi = {
  getAll: (): Promise<{ data: Service[] }> =>
    apiClient.get<Service[]>('/services'),
};

// Testimonials endpoints
export const testimonialsApi = {
  getAll: (): Promise<{ data: Testimonial[] }> =>
    apiClient.get<Testimonial[]>('/testimonials'),
};

// Clients endpoints
export const clientsApi = {
  getAll: (): Promise<{ data: Client[] }> =>
    apiClient.get<Client[]>('/clients'),
};

// Education endpoints
export const educationApi = {
  getAll: (): Promise<{ data: Education[] }> =>
    apiClient.get<Education[]>('/education'),
};

// Experience endpoints
export const experienceApi = {
  getAll: (): Promise<{ data: Experience[] }> =>
    apiClient.get<Experience[]>('/experience'),
};

// Skills endpoints
export const skillsApi = {
  getAll: (): Promise<{ data: Skill[] }> =>
    apiClient.get<Skill[]>('/skills'),
};

// Projects endpoints
export const projectsApi = {
  getAll: (): Promise<{ data: Project[] }> =>
    apiClient.get<Project[]>('/projects'),
  getByCategory: (category: string): Promise<{ data: Project[] }> =>
    apiClient.get<Project[]>(`/projects?category=${category}`),
  getById: (id: string): Promise<{ data: Project }> =>
    apiClient.get<Project>(`/projects/${id}`),
};

// Blog endpoints
export const blogApi = {
  getAll: (page: number = 1, limit: number = 10): Promise<PaginatedResponse<BlogPost>> =>
    apiClient.getPaginated<BlogPost>('/blog', page, limit),
  getBySlug: (slug: string): Promise<{ data: BlogPost }> =>
    apiClient.get<BlogPost>(`/blog/${slug}`),
  getByCategory: (category: string): Promise<{ data: BlogPost[] }> =>
    apiClient.get<BlogPost[]>(`/blog?category=${category}`),
};

// Contact endpoints
export const contactApi = {
  sendMessage: (data: ContactFormData): Promise<ContactResponse> =>
    apiClient.post<ContactResponse>('/contact', data),
};
