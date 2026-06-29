import { Button } from '@/components/ui/button';

export function ButtonLink({ href, children, variant = 'default', className = '' }) {
  return (
    <Button asChild variant={variant} className={className}>
      <a href={href}>{children}</a>
    </Button>
  );
}
