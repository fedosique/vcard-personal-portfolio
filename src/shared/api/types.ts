// User types
export interface User {
  id: string;
  name: string;
  title: string;
  avatar: string;
  email: string;
  phone: string;
  birthday: string;
  location: string;
  bio: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  platform: 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'github';
  url: string;
}

// Service types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// Testimonial types
export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  text: string;
  date: string;
}

// Client types
export interface Client {
  id: string;
  name: string;
  logo: string;
  website?: string;
}

// Education types
export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  description: string;
}

// Experience types
export interface Experience {
  id: string;
  position: string;
  company: string;
  period: string;
  description: string;
}

// Skill types
export interface Skill {
  id: string;
  name: string;
  level: number; // 0-100
}

// Project types
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'web-design' | 'web-development' | 'applications';
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

// Blog post types
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  publishedAt: string;
  slug: string;
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
