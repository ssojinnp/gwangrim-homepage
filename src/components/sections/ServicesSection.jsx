import { Gift, Monitor, PackageCheck, PenTool, Wrench } from 'lucide-react';
import { serviceCategories } from '../../data/siteContent.js';
import { Badge } from '@/components/ui/badge';
import { Section } from '../ui/Section.jsx';

const icons = [Monitor, PackageCheck, PenTool, Gift, Wrench];

export function ServicesSection() {
  return (
    <Section
      id="services"
      tone="muted"
      eyebrow="취급 품목"
      title="취급 범위 한눈에 보기"
      description="분류에 없는 품목도 문의 가능합니다. 품목명과 수량을 알려주시면 확인 후 안내드립니다."
    >
      <div className="grid border border-line bg-white lg:grid-cols-5">
        {serviceCategories.map((category, index) => {
          const Icon = icons[index];
          return (
            <article key={category.title} className="border-b border-line p-5 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-surface text-brand-800 ring-1 ring-line">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-extrabold text-brand-900">{category.title}</h3>
              </div>
              <p className="mt-4 min-h-16 text-sm leading-6 text-muted">{category.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}