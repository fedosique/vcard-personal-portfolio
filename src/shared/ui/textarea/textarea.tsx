'use client';

import { forwardRef } from 'react';
import { cn } from '@/shared/lib/utils';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[120px] w-full rounded-xl border border-jet bg-eerie-black-2 px-4 py-3 text-fs-6 text-white-2 placeholder:text-light-gray-70 focus:border-orange-yellow-crayola focus:outline-none focus:ring-2 focus:ring-orange-yellow-crayola/20 disabled:cursor-not-allowed disabled:opacity-50 resize-vertical',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
