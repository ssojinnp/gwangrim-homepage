import { CheckCircle2, CreditCard, Mail, MapPin, Phone, Printer } from 'lucide-react';
import { company, quoteChecklist } from '../../data/siteContent.js';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Section } from '../ui/Section.jsx';

export function ContactSection() {
  return (
    <Section
      id="contact"
      eyebrow="견적 문의"
      title="담당자 확인에 필요한 정보만 보내주세요"
      description="품목과 수량이 정리되어 있으면 빠르게 확인할 수 있고, 정리 전이라도 필요한 상황을 알려주시면 상담 가능합니다."
    >
      <div className="grid overflow-hidden border border-line bg-white lg:grid-cols-[1.02fr_0.98fr]">
        <div className="border-b border-line p-6 md:p-8 lg:border-b-0 lg:border-r">
          <div className="mb-8 flex items-center justify-between gap-4">
            <h3 className="text-2xl font-black break-keep text-brand-900">광림전산 문의처</h3>
            <Badge variant="outline">기업·개인 문의 가능</Badge>
          </div>
          <dl className="grid gap-px overflow-hidden border border-line bg-line">
            <ContactRow icon={Phone} label="전화">
              <a className="text-brand-700" href={`tel:${company.phonePrimary}`}>{company.phonePrimary}</a>
              <span className="text-muted"> / </span>
              <a className="text-brand-700" href={`tel:${company.phoneSecondary}`}>{company.phoneSecondary}</a>
            </ContactRow>
            <ContactRow icon={Printer} label="팩스">{company.fax}</ContactRow>
            <ContactRow icon={Mail} label="이메일">
              <a className="break-all text-brand-700" href={`mailto:${company.email}`}>{company.email}</a>
            </ContactRow>
            <ContactRow icon={MapPin} label="주소">{company.address}</ContactRow>
            <ContactRow icon={CreditCard} label="사업자등록번호">
              <span className="whitespace-nowrap">{company.businessNumber}</span>
            </ContactRow>
          </dl>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto"><a href={`tel:${company.phonePrimary}`}>전화 문의</a></Button>
            <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto"><a href={`mailto:${company.email}`}>이메일 문의</a></Button>
          </div>
        </div>

        <div className="bg-surface p-6 md:p-8">
          <h3 className="text-2xl font-black break-keep text-brand-900">견적 요청 체크리스트</h3>
          <ul className="mt-6 grid gap-3">
            {quoteChecklist.map((item) => (
              <li key={item} className="flex items-start gap-3 bg-white p-4 text-base font-bold text-ink ring-1 ring-line">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-trust" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 border-l-4 border-brand-700 bg-white p-4 text-sm leading-7 text-muted">
            인쇄물·판촉물은 시안, 로고, 참고 이미지를 함께 보내주시면 더 정확한 상담이 가능합니다.
          </p>
        </div>
      </div>
    </Section>
  );
}

function ContactRow({ icon: Icon, label, children }) {
  return (
    <div className="grid gap-2 bg-white p-4 sm:grid-cols-[112px_minmax(0,1fr)]">
      <dt className="flex items-center gap-2 text-sm font-extrabold text-muted">
        <Icon className="h-4 w-4 text-brand-700" />
        <span className={label === '사업자등록번호' ? 'whitespace-nowrap' : ''}>{label}</span>
      </dt>
      <dd className="min-w-0 text-base font-bold leading-7 text-ink">{children}</dd>
    </div>
  );
}