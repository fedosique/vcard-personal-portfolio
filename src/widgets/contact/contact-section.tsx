import { Typography } from '@/shared/ui';
import { ContactForm } from '@/features/contact';

export function ContactSection() {
  return (
    <div className="space-y-8">
      <Typography variant="h2" className="relative pb-2">
        Contact
        <div className="absolute bottom-0 left-0 h-1 w-8 bg-gradient-to-r from-orange-yellow-crayola to-orange-yellow-crayola/80 rounded" />
      </Typography>

      {/* Map placeholder */}
      <div className="h-64 w-full rounded-xl border border-jet bg-gradient-to-br from-eerie-black-2 to-eerie-black-1 flex items-center justify-center">
        <Typography variant="body" className="text-light-gray-70">
          Google Maps integration would go here
        </Typography>
      </div>

      <ContactForm />
    </div>
  );
}
