import { BadgeCheck, Printer, Scissors } from 'lucide-react';
import { productionServices } from '../../data/siteContent.js';
import { Section } from '../ui/Section.jsx';

const icons = [Printer, Printer, BadgeCheck, Printer, Scissors, BadgeCheck];

export function ProductionSection() {
  return (
    <Section
      id="production"
      eyebrow="제작 서비스"
      title="인쇄·홍보 제작물은 별도 기준으로 상담합니다"
      description="제작물은 수량, 크기, 소재, 시안 여부에 따라 견적 기준이 달라집니다. 필요한 용도를 알려주시면 확인 후 안내드립니다."
      headClassName="max-w-full lg:max-w-[980px]"
    >
      <div className="grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
        {productionServices.map((service, index) => {
          const Icon = icons[index];
          return (
            <article key={service.title} className="bg-white p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-100 text-brand-800">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-extrabold break-keep text-brand-900">{service.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted">{service.text}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}