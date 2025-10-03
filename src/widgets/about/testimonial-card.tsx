import Image from 'next/image';
import { Typography } from '@/shared/ui';
import { Testimonial } from '@/shared/api/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="relative rounded-xl border border-jet bg-gradient-to-br from-eerie-black-2 to-eerie-black-1 p-6 shadow-shadow-2">
      <div className="absolute -top-6 left-6">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={60}
          height={60}
          className="rounded-xl"
        />
      </div>
      <div className="pt-4">
        <Typography variant="h4" className="mb-2">
          {testimonial.name}
        </Typography>
        <Typography variant="body" className="line-clamp-4">
          {testimonial.text}
        </Typography>
      </div>
    </div>
  );
}
