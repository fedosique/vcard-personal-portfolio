import { loadBlogPageData } from '@/processes/loaders/blog-loader';
import { Sidebar } from '@/widgets/sidebar';
import { BlogSection } from '@/widgets/blog';
import { ClientNavbar } from '../client-navbar';
import { Container } from '@/shared/ui';
import { loadHomePageData } from '@/processes/loaders/home-loader';

export default async function BlogPage() {
  const [blogData, homeData] = await Promise.all([
    loadBlogPageData(),
    loadHomePageData(),
  ]);

  return (
    <div className="min-h-screen">
      <Container size="xl" className="py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar user={homeData.user} />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="rounded-xl border border-jet bg-eerie-black-2 p-6 shadow-shadow-1">
              <BlogSection posts={blogData.posts} />
            </div>
          </div>
        </div>
      </Container>

      {/* Navigation */}
      <ClientNavbar />
    </div>
  );
}
