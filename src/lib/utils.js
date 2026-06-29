import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// shadcn/ui 컴포넌트에서 조건부 Tailwind 클래스를 안전하게 합치기 위한 유틸입니다.
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
