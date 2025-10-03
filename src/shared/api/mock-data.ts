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
} from './types';

// Mock data for development/testing
export const mockUser: User = {
  id: '1',
  name: 'Richard Hanrick',
  title: 'Web Developer',
  avatar: '/assets/images/my-avatar.png',
  email: 'richard@example.com',
  phone: '+1 (213) 352-2795',
  birthday: 'June 23, 1982',
  location: 'Sacramento, California, USA',
  bio: "I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.",
  socialLinks: [
    { platform: 'facebook', url: '#' },
    { platform: 'twitter', url: '#' },
    { platform: 'instagram', url: '#' },
  ],
};

export const mockServices: Service[] = [
  {
    id: '1',
    title: 'Web design',
    description: 'The most modern and high-quality design made at a professional level.',
    icon: '/assets/images/icon-design.svg',
  },
  {
    id: '2',
    title: 'Web development',
    description: 'High-quality development of sites at the professional level.',
    icon: '/assets/images/icon-dev.svg',
  },
  {
    id: '3',
    title: 'Mobile apps',
    description: 'Professional development of applications for iOS and Android.',
    icon: '/assets/images/icon-app.svg',
  },
  {
    id: '4',
    title: 'Photography',
    description: 'I make high-quality photos of any category at a professional level.',
    icon: '/assets/images/icon-photo.svg',
  },
];

export const mockTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Daniel Lewis',
    avatar: '/assets/images/avatar-1.png',
    text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client.',
    date: '2021-06-14',
  },
  {
    id: '2',
    name: 'Jessica Miller',
    avatar: '/assets/images/avatar-2.png',
    text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client.',
    date: '2021-06-14',
  },
  {
    id: '3',
    name: 'Emily Evans',
    avatar: '/assets/images/avatar-3.png',
    text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client.',
    date: '2021-06-14',
  },
  {
    id: '4',
    name: 'Henry William',
    avatar: '/assets/images/avatar-4.png',
    text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client.',
    date: '2021-06-14',
  },
];

export const mockClients: Client[] = [
  { id: '1', name: 'Client 1', logo: '/assets/images/logo-1-color.png' },
  { id: '2', name: 'Client 2', logo: '/assets/images/logo-2-color.png' },
  { id: '3', name: 'Client 3', logo: '/assets/images/logo-3-color.png' },
  { id: '4', name: 'Client 4', logo: '/assets/images/logo-4-color.png' },
  { id: '5', name: 'Client 5', logo: '/assets/images/logo-5-color.png' },
  { id: '6', name: 'Client 6', logo: '/assets/images/logo-6-color.png' },
];

export const mockEducation: Education[] = [
  {
    id: '1',
    institution: 'University school of the arts',
    degree: 'Bachelor of Arts',
    period: '2007 — 2008',
    description: 'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.',
  },
  {
    id: '2',
    institution: 'New york academy of art',
    degree: 'Master of Fine Arts',
    period: '2006 — 2007',
    description: 'Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis.',
  },
  {
    id: '3',
    institution: 'High school of art and design',
    degree: 'High School Diploma',
    period: '2002 — 2004',
    description: 'Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.',
  },
];

export const mockExperience: Experience[] = [
  {
    id: '1',
    position: 'Creative director',
    company: 'Creative Agency',
    period: '2015 — Present',
    description: 'Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.',
  },
  {
    id: '2',
    position: 'Art director',
    company: 'Design Studio',
    period: '2013 — 2015',
    description: 'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.',
  },
  {
    id: '3',
    position: 'Web designer',
    company: 'Tech Company',
    period: '2010 — 2013',
    description: 'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.',
  },
];

export const mockSkills: Skill[] = [
  { id: '1', name: 'Web design', level: 80 },
  { id: '2', name: 'Graphic design', level: 70 },
  { id: '3', name: 'Branding', level: 90 },
  { id: '4', name: 'WordPress', level: 50 },
];

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Finance',
    description: 'Financial management application',
    image: '/assets/images/project-1.jpg',
    category: 'web-development',
    technologies: ['React', 'TypeScript', 'Node.js'],
    liveUrl: '#',
  },
  {
    id: '2',
    title: 'Orizon',
    description: 'Modern web application',
    image: '/assets/images/project-2.png',
    category: 'web-development',
    technologies: ['Next.js', 'TailwindCSS'],
    liveUrl: '#',
  },
  {
    id: '3',
    title: 'Fundo',
    description: 'Creative design project',
    image: '/assets/images/project-3.jpg',
    category: 'web-design',
    technologies: ['Figma', 'Adobe Creative Suite'],
    liveUrl: '#',
  },
  {
    id: '4',
    title: 'Brawlhalla',
    description: 'Gaming application',
    image: '/assets/images/project-4.png',
    category: 'applications',
    technologies: ['React Native', 'JavaScript'],
    liveUrl: '#',
  },
  {
    id: '5',
    title: 'DSM.',
    description: 'Design system management',
    image: '/assets/images/project-5.png',
    category: 'web-design',
    technologies: ['Design Systems', 'Figma'],
    liveUrl: '#',
  },
  {
    id: '6',
    title: 'MetaSpark',
    description: 'Social media platform',
    image: '/assets/images/project-6.png',
    category: 'web-design',
    technologies: ['UI/UX Design', 'Prototyping'],
    liveUrl: '#',
  },
  {
    id: '7',
    title: 'Summary',
    description: 'Data visualization tool',
    image: '/assets/images/project-7.png',
    category: 'web-development',
    technologies: ['Vue.js', 'D3.js'],
    liveUrl: '#',
  },
  {
    id: '8',
    title: 'Task Manager',
    description: 'Productivity application',
    image: '/assets/images/project-8.jpg',
    category: 'applications',
    technologies: ['React Native', 'Firebase'],
    liveUrl: '#',
  },
  {
    id: '9',
    title: 'Arrival',
    description: 'Travel booking platform',
    image: '/assets/images/project-9.png',
    category: 'web-development',
    technologies: ['Next.js', 'PostgreSQL'],
    liveUrl: '#',
  },
];

export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Design conferences in 2022',
    excerpt: 'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.',
    content: 'Full blog post content here...',
    image: '/assets/images/blog-1.jpg',
    category: 'Design',
    publishedAt: '2022-02-23',
    slug: 'design-conferences-2022',
  },
  {
    id: '2',
    title: 'Best fonts every designer',
    excerpt: 'Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.',
    content: 'Full blog post content here...',
    image: '/assets/images/blog-2.jpg',
    category: 'Design',
    publishedAt: '2022-02-23',
    slug: 'best-fonts-designer',
  },
  {
    id: '3',
    title: 'Design digest #80',
    excerpt: 'Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.',
    content: 'Full blog post content here...',
    image: '/assets/images/blog-3.jpg',
    category: 'Design',
    publishedAt: '2022-02-23',
    slug: 'design-digest-80',
  },
  {
    id: '4',
    title: 'UI interactions of the week',
    excerpt: 'Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.',
    content: 'Full blog post content here...',
    image: '/assets/images/blog-4.jpg',
    category: 'Design',
    publishedAt: '2022-02-23',
    slug: 'ui-interactions-week',
  },
  {
    id: '5',
    title: 'The forgotten art of spacing',
    excerpt: 'Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    content: 'Full blog post content here...',
    image: '/assets/images/blog-5.jpg',
    category: 'Design',
    publishedAt: '2022-02-23',
    slug: 'forgotten-art-spacing',
  },
  {
    id: '6',
    title: 'Design digest #79',
    excerpt: 'Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.',
    content: 'Full blog post content here...',
    image: '/assets/images/blog-6.jpg',
    category: 'Design',
    publishedAt: '2022-02-23',
    slug: 'design-digest-79',
  },
];
