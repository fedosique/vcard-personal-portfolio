'use client';

import { forwardRef } from 'react';
import { cn } from '@/shared/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-12 w-full rounded-xl border border-jet bg-eerie-black-2 px-4 py-3 text-fs-6 text-white-2 placeholder:text-light-gray-70 focus:border-orange-yellow-crayola focus:outline-none focus:ring-2 focus:ring-orange-yellow-crayola/20 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
