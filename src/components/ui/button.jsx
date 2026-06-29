import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// shadcn/ui Button 패턴을 프로젝트 디자인 토큰에 맞춰 조정한 버튼입니다.
const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-[15px] font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-brand-700 text-white shadow-[0_10px_22px_rgba(30,95,174,0.22)] hover:bg-brand-800',
        secondary: 'bg-brand-100 text-brand-900 hover:bg-blue-100',
        outline: 'border border-line bg-white text-brand-900 hover:border-brand-700 hover:bg-brand-50',
        ghost: 'text-muted hover:bg-brand-50 hover:text-brand-700',
      },
      size: {
        default: 'h-11 px-5',
        sm: 'h-9 px-3 text-sm',
        lg: 'h-12 px-6',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : 'button';
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
