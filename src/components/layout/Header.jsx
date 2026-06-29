import { company, navItems } from '../../data/siteContent.js';
import { ButtonLink } from '../ui/ButtonLink.jsx';
import { LogoMark } from '../ui/LogoMark.jsx';

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex w-[min(1120px,calc(100%-28px))] flex-col gap-3 py-3 md:w-[min(1120px,calc(100%-40px))] lg:min-h-[74px] lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:py-0">
        <div className="flex min-w-0 items-center justify-between gap-3">
          <a className="inline-flex min-w-0 items-center gap-3 whitespace-nowrap" href="#top" aria-label="광림전산 홈">
            <LogoMark showName />
          </a>
          <a className="shrink-0 rounded-md bg-brand-100 px-3 py-2 text-sm font-bold text-brand-900 lg:hidden" href={`tel:${company.phonePrimary}`}>
            전화
          </a>
        </div>

        <nav className="-mx-1 flex w-[calc(100%+8px)] gap-2 overflow-x-auto px-1 pb-1 text-[14px] font-bold text-muted md:gap-5 md:text-[15px] lg:mx-0 lg:w-auto lg:pb-0" aria-label="주요 메뉴">
          {navItems.map((item) => (
            <a key={item.href} className="whitespace-nowrap rounded-full px-3 py-2 transition-colors hover:bg-brand-50 hover:text-brand-700 lg:px-0" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <ButtonLink href={`tel:${company.phonePrimary}`} variant="outline" className="hidden lg:inline-flex">
          전화 문의
        </ButtonLink>
      </div>
    </header>
  );
}
