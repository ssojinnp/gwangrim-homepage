import { company } from '../../data/siteContent.js';
import { LogoMark } from '../ui/LogoMark.jsx';

export function Footer() {
  return (
    <footer className="bg-[#071f45] py-8 text-white/75 md:py-10">
      <div className="mx-auto flex w-[min(1120px,calc(100%-28px))] flex-col gap-8 md:w-[min(1120px,calc(100%-40px))] lg:flex-row lg:justify-between">
        <div>
          <LogoMark size="lg" tone="white" className="max-w-[230px]" />
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/65">
            전산용품, 사무용품, 인쇄물, 판촉물, 산업용 잡자재까지 기업 납품과 개인 문의를 함께 대응하는 광림전산입니다.
          </p>
        </div>
        <dl className="grid gap-2">
          <div className="grid gap-1 sm:grid-cols-[92px_minmax(0,1fr)] sm:gap-3">
            <dt className="text-white/50">대표</dt>
            <dd>{company.representative}</dd>
          </div>
          <div className="grid gap-1 sm:grid-cols-[92px_minmax(0,1fr)] sm:gap-3">
            <dt className="text-white/50 whitespace-nowrap">사업자등록번호</dt>
            <dd><span className="whitespace-nowrap">{company.businessNumber}</span></dd>
          </div>
          <div className="grid gap-1 sm:grid-cols-[92px_minmax(0,1fr)] sm:gap-3">
            <dt className="text-white/50">전화</dt>
            <dd>{company.phonePrimary} / {company.phoneSecondary}</dd>
          </div>
          <div className="grid gap-1 sm:grid-cols-[92px_minmax(0,1fr)] sm:gap-3">
            <dt className="text-white/50">팩스</dt>
            <dd>{company.fax}</dd>
          </div>
          <div className="grid gap-1 sm:grid-cols-[92px_minmax(0,1fr)] sm:gap-3">
            <dt className="text-white/50">이메일</dt>
            <dd>{company.email}</dd>
          </div>
        </dl>
      </div>
    </footer>
  );
}
