import Image from 'next/image';
import { Client } from '@/shared/api/types';

interface ClientCardProps {
  client: Client;
}

export function ClientCard({ client }: ClientCardProps) {
  return (
    <div className="group cursor-pointer">
      <Image
        src={client.logo}
        alt={client.name}
        width={120}
        height={60}
        className="w-full h-auto grayscale transition-all duration-300 group-hover:grayscale-0"
      />
    </div>
  );
}
