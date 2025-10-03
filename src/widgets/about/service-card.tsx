import Image from 'next/image';
import { Typography } from '@/shared/ui';
import { Service } from '@/shared/api/types';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="rounded-xl border border-jet bg-gradient-to-br from-eerie-black-2 to-eerie-black-1 p-6 shadow-shadow-2">
      <div className="mb-4 flex justify-center">
        <Image
          src={service.icon}
          alt={service.title}
          width={40}
          height={40}
          className="mx-auto"
        />
      </div>
      <div className="text-center">
        <Typography variant="h4" className="mb-2">
          {service.title}
        </Typography>
        <Typography variant="body">
          {service.description}
        </Typography>
      </div>
    </div>
  );
}
