import { ArrowRight, ClipboardList, Mail, Phone } from 'lucide-react';
import { company, hero, heroSummary } from '../../data/siteContent.js';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { LogoMark } from '../ui/LogoMark.jsx';

export function Hero() {
  return (
    <section id="top" className="border-b border-line bg-[#f7f9fc]">
      <div className="mx-auto w-[min(1180px,calc(100%-28px))] md:w-[min(1180px,calc(100%-40px))]">
        <div className="grid gap-0 py-8 md:py-12 lg:grid-cols-[minmax(0,1.02fr)_460px] lg:py-16">
          <div className="border border-line bg-white p-6 md:p-10 lg:border-r-0 lg:p-12">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline" className="bg-white text-brand-800">{hero.eyebrow}</Badge>
              <Badge variant="trust">소량 문의 가능</Badge>
            </div>

            <div className="mt-12 max-w-3xl">
              <p className="mb-5 text-sm font-bold text-brand-700">{company.englishName}</p>
              <h1 className="text-[34px] font-extrabold leading-[1.18] tracking-normal break-keep text-ink sm:text-5xl lg:text-[56px] lg:leading-[1.12]">
                <span className="block text-brand-900">{company.name}</span>
                <span className="hidden md:block">
                  {hero.titleLines.map((line, index) => (
                    <span key={line} className={index === 1 ? 'block text-brand-700' : 'block'}>{line}</span>
                  ))}
                </span>
                <span className="md:hidden">
                  {hero.mobileTitleLines.map((line, index) => (
                    <span key={line} className={index === 1 ? 'block text-brand-700' : 'block'}>{line}</span>
                  ))}
                </span>
              </h1>
              <p className="mt-7 max-w-2xl text-[17px] font-semibold leading-8 text-brand-900 md:text-lg">{hero.lead}</p>
              <p className="mt-3 max-w-2xl text-base leading-8 text-muted">{hero.description}</p>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href="#contact">견적 문의하기 <ArrowRight className="h-4 w-4" /></a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <a href={`tel:${company.phonePrimary}`}><Phone className="h-4 w-4" /> {company.phonePrimary}</a>
              </Button>
            </div>
          </div>

          <aside className="border-x border-b border-line bg-brand-900 text-white lg:border-y lg:border-l lg:border-r">
            <div className="border-b border-white/15 p-6 md:p-8">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-sm font-semibold text-white/60">PROCUREMENT BRIEF</p>
                  <strong className="mt-2 block text-2xl font-bold break-keep">납품 검토 요약</strong>
                </div>
                <LogoMark size="lg" />
              </div>
            </div>

            <dl className="divide-y divide-white/12">
              {heroSummary.map((item) => (
                <div key={item.label} className="grid gap-2 p-6 sm:grid-cols-[96px_minmax(0,1fr)] md:p-8 lg:grid-cols-1 xl:grid-cols-[96px_minmax(0,1fr)]">
                  <dt className="text-sm font-semibold text-white/55">{item.label}</dt>
                  <dd className="text-base font-bold leading-7 text-white">{item.value}</dd>
                </div>
              ))}
            </dl>

            <div className="grid gap-3 border-t border-white/15 p-6 md:p-8">
              <a className="flex items-center gap-3 rounded-lg bg-white p-4 text-brand-900" href={`tel:${company.phonePrimary}`}>
                <Phone className="h-5 w-5" />
                <span><span className="block text-xs font-semibold text-muted">전화 문의</span><strong className="font-bold">{company.phonePrimary}</strong></span>
              </a>
              <a className="flex items-center gap-3 rounded-lg bg-white/10 p-4 text-white ring-1 ring-white/15" href={`mailto:${company.email}`}>
                <Mail className="h-5 w-5" />
                <span className="min-w-0"><span className="block text-xs font-semibold text-white/55">이메일 문의</span><strong className="block break-all font-bold">{company.email}</strong></span>
              </a>
              <div className="flex gap-3 rounded-lg bg-white/10 p-4 ring-1 ring-white/15">
                <ClipboardList className="mt-0.5 h-5 w-5 shrink-0" />
                <p className="text-sm leading-6 text-white/75">품목명, 수량, 희망 납기를 알려주시면 공급 가능 여부부터 확인합니다.</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}