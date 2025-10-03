'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Typography } from '@/shared/ui';
import { Testimonial } from '@/shared/api/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  onClick?: () => void;
}

export function TestimonialCard({ testimonial, onClick }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative cursor-pointer rounded-xl border border-jet bg-gradient-to-br from-eerie-black-2 to-eerie-black-1 p-6 shadow-shadow-2"
      onClick={onClick}
    >
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
    </motion.div>
  );
}
