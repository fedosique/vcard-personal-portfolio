import { loadPortfolioPageData } from '@/processes/loaders/portfolio-loader';
import { Sidebar } from '@/widgets/sidebar';
import { PortfolioSection } from '@/widgets/portfolio';
import { ClientNavbar } from '../client-navbar';
import { Container } from '@/shared/ui';
import { loadHomePageData } from '@/processes/loaders/home-loader';

export default async function PortfolioPage() {
  const [portfolioData, homeData] = await Promise.all([
    loadPortfolioPageData(),
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
              <PortfolioSection projects={portfolioData.projects} />
            </div>
          </div>
        </div>
      </Container>

      {/* Navigation */}
      <ClientNavbar />
    </div>
  );
}
