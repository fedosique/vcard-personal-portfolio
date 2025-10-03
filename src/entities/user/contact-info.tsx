import { Mail, Phone, Calendar, MapPin } from 'lucide-react';
import { Typography } from '@/shared/ui';
import { User } from '@/shared/api/types';

interface ContactInfoProps {
  user: User;
  variant?: 'sidebar' | 'full';
}

export function ContactInfo({ user, variant = 'sidebar' }: ContactInfoProps) {
  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: user.email,
      href: `mailto:${user.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: user.phone,
      href: `tel:${user.phone}`,
    },
    {
      icon: Calendar,
      label: 'Birthday',
      value: user.birthday,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: user.location,
    },
  ];

  return (
    <div className="space-y-4">
      {contacts.map((contact) => (
        <div key={contact.label} className="flex items-center space-x-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-jet to-onyx text-orange-yellow-crayola">
            <contact.icon className="h-4 w-4" />
          </div>
          <div className="flex-1">
            <Typography variant="caption" className="text-light-gray-70 uppercase">
              {contact.label}
            </Typography>
            {contact.href ? (
              <a
                href={contact.href}
                className="text-fs-7 text-white-2 hover:text-orange-yellow-crayola transition-colors"
              >
                {contact.value}
              </a>
            ) : (
              <Typography variant="body" className="text-fs-7">
                {contact.value}
              </Typography>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
