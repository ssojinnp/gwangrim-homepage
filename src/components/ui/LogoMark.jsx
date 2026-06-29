import logoUrl from '../../assets/logo-kl.svg';

export function LogoMark({ size = 'md', showName = false }) {
  const sizeClass = {
    sm: 'h-7 w-10',
    md: 'h-[34px] w-[50px]',
    lg: 'h-12 w-[70px] md:h-[66px] md:w-24',
  }[size];

  return (
    <span className="inline-flex min-w-0 items-center gap-3">
      <img className={`${sizeClass} shrink-0`} src={logoUrl} alt="광림전산 KL 로고" />
      {showName && <span className="truncate text-lg font-extrabold text-brand-900 md:text-xl">광림전산</span>}
    </span>
  );
}
