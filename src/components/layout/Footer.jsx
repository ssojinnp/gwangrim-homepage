import { company } from '../../data/siteContent.js';

export function Footer() {
  return (
    <footer className="bg-[#071f45] py-8 text-white/75">
      <div className="mx-auto flex w-[min(1120px,calc(100%-28px))] flex-col gap-8 md:w-[min(1120px,calc(100%-40px))] lg:flex-row lg:justify-between">
        <div>
          <strong className="block text-xl font-black text-white">{company.name}</strong>
          <p className="mt-2">전산·사무용품 납품 및 인쇄·판촉 제작 상담</p>
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
            <dt className="text-white/50">이메일</dt>
            <dd>{company.email}</dd>
          </div>
        </dl>
      </div>
    </footer>
  );
}