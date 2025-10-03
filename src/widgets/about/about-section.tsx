import Image from 'next/image';
import { Typography } from '@/shared/ui';
import { Service, Testimonial, Client } from '@/shared/api/types';
import { ServiceCard } from './service-card';
import { TestimonialCard } from './testimonial-card';
import { ClientCard } from './client-card';

interface AboutSectionProps {
  bio: string;
  services: Service[];
  testimonials: Testimonial[];
  clients: Client[];
}

export function AboutSection({ bio, services, testimonials, clients }: AboutSectionProps) {
  return (
    <div className="space-y-12">
      {/* Bio Section */}
      <div className="space-y-4">
        <Typography variant="h2" className="relative pb-2">
          About me
          <div className="absolute bottom-0 left-0 h-1 w-8 bg-gradient-to-r from-orange-yellow-crayola to-orange-yellow-crayola/80 rounded" />
        </Typography>
        <div className="space-y-4">
          <Typography variant="body">
            {bio}
          </Typography>
        </div>
      </div>

      {/* Services Section */}
      <div className="space-y-6">
        <Typography variant="h3">What i'm doing</Typography>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="space-y-6">
        <Typography variant="h3">Testimonials</Typography>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* Clients Section */}
      <div className="space-y-6">
        <Typography variant="h3">Clients</Typography>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {clients.map((client) => (
            <ClientCard key={client.id} client={client} />
          ))}
        </div>
      </div>
    </div>
  );
}
