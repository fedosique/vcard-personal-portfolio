import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  userApi,
  servicesApi,
  testimonialsApi,
  clientsApi,
  educationApi,
  experienceApi,
  skillsApi,
  projectsApi,
  blogApi,
  contactApi,
} from './endpoints';
import { ContactFormData } from './types';

// Query keys
export const queryKeys = {
  user: ['user'] as const,
  services: ['services'] as const,
  testimonials: ['testimonials'] as const,
  clients: ['clients'] as const,
  education: ['education'] as const,
  experience: ['experience'] as const,
  skills: ['skills'] as const,
  projects: ['projects'] as const,
  projectsByCategory: (category: string) => ['projects', 'category', category] as const,
  project: (id: string) => ['projects', id] as const,
  blog: (page: number, limit: number) => ['blog', page, limit] as const,
  blogPost: (slug: string) => ['blog', 'post', slug] as const,
  blogByCategory: (category: string) => ['blog', 'category', category] as const,
};

// User queries
export function useUser() {
  return useQuery({
    queryKey: queryKeys.user,
    queryFn: () => userApi.getProfile(),
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
}

// Services queries
export function useServices() {
  return useQuery({
    queryKey: queryKeys.services,
    queryFn: () => servicesApi.getAll(),
    staleTime: 30 * 60 * 1000, // 30 minutes
  });
}

// Testimonials queries
export function useTestimonials() {
  return useQuery({
    queryKey: queryKeys.testimonials,
    queryFn: () => testimonialsApi.getAll(),
    staleTime: 30 * 60 * 1000, // 30 minutes
  });
}

// Clients queries
export function useClients() {
  return useQuery({
    queryKey: queryKeys.clients,
    queryFn: () => clientsApi.getAll(),
    staleTime: 30 * 60 * 1000, // 30 minutes
  });
}

// Education queries
export function useEducation() {
  return useQuery({
    queryKey: queryKeys.education,
    queryFn: () => educationApi.getAll(),
    staleTime: 60 * 60 * 1000, // 1 hour
  });
}

// Experience queries
export function useExperience() {
  return useQuery({
    queryKey: queryKeys.experience,
    queryFn: () => experienceApi.getAll(),
    staleTime: 60 * 60 * 1000, // 1 hour
  });
}

// Skills queries
export function useSkills() {
  return useQuery({
    queryKey: queryKeys.skills,
    queryFn: () => skillsApi.getAll(),
    staleTime: 60 * 60 * 1000, // 1 hour
  });
}

// Projects queries
export function useProjects() {
  return useQuery({
    queryKey: queryKeys.projects,
    queryFn: () => projectsApi.getAll(),
    staleTime: 30 * 60 * 1000, // 30 minutes
  });
}

export function useProjectsByCategory(category: string) {
  return useQuery({
    queryKey: queryKeys.projectsByCategory(category),
    queryFn: () => projectsApi.getByCategory(category),
    staleTime: 30 * 60 * 1000, // 30 minutes
  });
}

export function useProject(id: string) {
  return useQuery({
    queryKey: queryKeys.project(id),
    queryFn: () => projectsApi.getById(id),
    staleTime: 30 * 60 * 1000, // 30 minutes
  });
}

// Blog queries
export function useBlogPosts(page: number = 1, limit: number = 10) {
  return useQuery({
    queryKey: queryKeys.blog(page, limit),
    queryFn: () => blogApi.getAll(page, limit),
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
}

export function useBlogPost(slug: string) {
  return useQuery({
    queryKey: queryKeys.blogPost(slug),
    queryFn: () => blogApi.getBySlug(slug),
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
}

export function useBlogByCategory(category: string) {
  return useQuery({
    queryKey: queryKeys.blogByCategory(category),
    queryFn: () => blogApi.getByCategory(category),
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
}

// Contact mutations
export function useContactMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ContactFormData) => contactApi.sendMessage(data),
    onSuccess: () => {
      // Invalidate any relevant queries if needed
      queryClient.invalidateQueries({ queryKey: ['contact'] });
    },
  });
}
