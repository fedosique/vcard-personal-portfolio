import { blogApi } from '@/shared/api/endpoints';
import { mockBlogPosts } from '@/shared/api/mock-data';

export interface BlogPageData {
  posts: typeof mockBlogPosts;
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export async function loadBlogPageData(page: number = 1, limit: number = 10): Promise<BlogPageData> {
  try {
    const response = await blogApi.getAll(page, limit).catch(() => ({
      data: mockBlogPosts,
      pagination: {
        page: 1,
        limit: 10,
        total: mockBlogPosts.length,
        totalPages: Math.ceil(mockBlogPosts.length / 10),
      },
    }));

    return {
      posts: response.data,
      pagination: response.pagination,
    };
  } catch (error) {
    console.error('Error loading blog page data:', error);
    
    return {
      posts: mockBlogPosts,
      pagination: {
        page: 1,
        limit: 10,
        total: mockBlogPosts.length,
        totalPages: Math.ceil(mockBlogPosts.length / 10),
      },
    };
  }
}

export async function loadBlogPostBySlug(slug: string) {
  try {
    const response = await blogApi.getBySlug(slug).catch(() => {
      const post = mockBlogPosts.find(p => p.slug === slug);
      return { data: post || mockBlogPosts[0] };
    });

    return response.data;
  } catch (error) {
    console.error('Error loading blog post:', error);
    return mockBlogPosts[0];
  }
}
