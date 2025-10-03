import { forwardRef } from 'react';
import { cn } from '@/shared/lib/utils';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = 'lg', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'mx-auto w-full px-4',
          {
            'max-w-sm': size === 'sm',
            'max-w-md': size === 'md',
            'max-w-4xl': size === 'lg',
            'max-w-6xl': size === 'xl',
            'max-w-full': size === 'full',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Container.displayName = 'Container';

export { Container };
