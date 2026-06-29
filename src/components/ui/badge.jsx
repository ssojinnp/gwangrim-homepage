import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva('inline-flex items-center rounded-full px-3 py-1.5 text-sm font-bold', {
  variants: {
    variant: {
      default: 'bg-surface text-muted',
      brand: 'bg-brand-100 text-brand-900',
      trust: 'bg-emerald-100 text-trust',
      outline: 'border border-line bg-white text-brand-900',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

function Badge({ className, variant, ...props }) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
