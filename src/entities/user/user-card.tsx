import Image from 'next/image';
import { Typography } from '@/shared/ui';
import { User } from '@/shared/api/types';

interface UserCardProps {
  user: User;
  variant?: 'sidebar' | 'hero';
}

export function UserCard({ user, variant = 'sidebar' }: UserCardProps) {
  if (variant === 'hero') {
    return (
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="relative">
          <Image
            src={user.avatar}
            alt={user.name}
            width={150}
            height={150}
            className="rounded-full border-4 border-orange-yellow-crayola"
          />
        </div>
        <div>
          <Typography variant="h1" className="mb-2">
            {user.name}
          </Typography>
          <Typography variant="body" className="text-orange-yellow-crayola">
            {user.title}
          </Typography>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-4">
      <div className="relative">
        <Image
          src={user.avatar}
          alt={user.name}
          width={80}
          height={80}
          className="rounded-xl"
        />
      </div>
      <div>
        <Typography variant="h3" className="mb-1">
          {user.name}
        </Typography>
        <Typography variant="caption" className="bg-onyx px-3 py-1 rounded-lg">
          {user.title}
        </Typography>
      </div>
    </div>
  );
}
