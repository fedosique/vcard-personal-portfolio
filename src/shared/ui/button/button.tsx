'use client';

import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-yellow-crayola disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-gradient-to-br from-orange-yellow-crayola to-orange-yellow-crayola/80 text-smoky-black hover:from-orange-yellow-crayola/90 hover:to-orange-yellow-crayola/70 shadow-shadow-2',
        outline:
          'border border-jet bg-eerie-black-2 text-white-2 hover:bg-eerie-black-1 hover:border-orange-yellow-crayola',
        ghost: 'text-light-gray hover:text-white-2 hover:bg-eerie-black-1',
        gradient:
          'bg-gradient-to-br from-eerie-black-2 to-eerie-black-1 border border-jet text-orange-yellow-crayola hover:bg-gradient-to-br hover:from-orange-yellow-crayola hover:to-orange-yellow-crayola/80 hover:text-smoky-black shadow-shadow-2',
      },
      size: {
        sm: 'h-8 px-3 text-fs-8',
        default: 'h-10 px-4 text-fs-6',
        lg: 'h-12 px-6 text-fs-5',
        xl: 'h-14 px-8 text-fs-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
