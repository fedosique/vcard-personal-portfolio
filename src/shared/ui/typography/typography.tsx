import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils';

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'text-fs-1 font-fw-600 text-white-2',
      h2: 'text-fs-2 font-fw-600 text-white-2',
      h3: 'text-fs-3 font-fw-500 text-white-2',
      h4: 'text-fs-4 font-fw-500 text-white-2',
      h5: 'text-fs-7 font-fw-500 text-white-2',
      body: 'text-fs-6 font-fw-300 text-light-gray',
      caption: 'text-fs-8 font-fw-300 text-light-gray-70',
      link: 'text-fs-6 font-fw-400 text-orange-yellow-crayola hover:text-orange-yellow-crayola/80 transition-colors',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  defaultVariants: {
    variant: 'body',
    align: 'left',
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span' | 'div';
}

const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, align, as, ...props }, ref) => {
    const Component = as || 'p';
    
    return (
      <Component
        className={cn(typographyVariants({ variant, align, className }))}
        ref={ref as any}
        {...props}
      />
    );
  }
);
Typography.displayName = 'Typography';

export { Typography, typographyVariants };
