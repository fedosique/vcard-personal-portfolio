import { loadResumePageData } from '@/processes/loaders/resume-loader';
import { Sidebar } from '@/widgets/sidebar';
import { ResumeSection } from '@/widgets/resume';
import { ClientNavbar } from '../client-navbar';
import { Container } from '@/shared/ui';
import { loadHomePageData } from '@/processes/loaders/home-loader';

export default async function ResumePage() {
  const [resumeData, homeData] = await Promise.all([
    loadResumePageData(),
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
              <ResumeSection
                education={resumeData.education}
                experience={resumeData.experience}
                skills={resumeData.skills}
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
