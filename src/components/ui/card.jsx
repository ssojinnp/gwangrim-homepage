import * as React from 'react';
import { cn } from '@/lib/utils';

function Card({ className, ...props }) {
  return <div className={cn('rounded-lg border border-line bg-white text-ink shadow-[0_10px_30px_rgba(23,32,51,0.035)]', className)} {...props} />;
}

function CardHeader({ className, ...props }) {
  return <div className={cn('flex flex-col space-y-2 p-6', className)} {...props} />;
}

function CardTitle({ className, ...props }) {
  return <h3 className={cn('text-[21px] font-bold leading-snug break-keep text-brand-900', className)} {...props} />;
}

function CardDescription({ className, ...props }) {
  return <p className={cn('text-[15px] font-medium leading-7 text-muted', className)} {...props} />;
}

function CardContent({ className, ...props }) {
  return <div className={cn('p-6 pt-0', className)} {...props} />;
}

function CardFooter({ className, ...props }) {
  return <div className={cn('flex items-center p-6 pt-0', className)} {...props} />;
}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };