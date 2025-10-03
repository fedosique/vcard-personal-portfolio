import { loadHomePageData } from '@/processes/loaders/home-loader';
import { Sidebar } from '@/widgets/sidebar';
import { AboutSection } from '@/widgets/about';
import { ClientNavbar } from './client-navbar';
import { Container } from '@/shared/ui';

export default async function HomePage() {
  const data = await loadHomePageData();

  return (
    <div className="min-h-screen">
      <Container size="xl" className="py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar user={data.user} />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="rounded-xl border border-jet bg-eerie-black-2 p-6 shadow-shadow-1">
              <AboutSection
                bio={data.user.bio}
                services={data.services}
                testimonials={data.testimonials}
                clients={data.clients}
              />
            </div>
          </div>
        </div>
      </Container>

      {/* Navigation */}
      <ClientNavbar />
    </div>
  );
}
