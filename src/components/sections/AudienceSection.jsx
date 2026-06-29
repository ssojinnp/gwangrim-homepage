import { Building2, Factory, UserRound } from 'lucide-react';
import { audiences } from '../../data/siteContent.js';
import { Badge } from '@/components/ui/badge';
import { Section } from '../ui/Section.jsx';

const icons = [Building2, Factory, UserRound];

export function AudienceSection() {
  return (
    <Section
      id="audience"
      eyebrow="고객 안내"
      title="문의 대상"
      description="공공기관, 기업체, 개인 고객 기준으로 문의 범위를 구분했습니다."
    >
      <div className="overflow-hidden border border-line bg-white">
        {audiences.map((audience, index) => {
          const Icon = icons[index];
          return (
            <div key={audience.title} className="grid gap-4 border-b border-line p-5 last:border-b-0 md:grid-cols-[220px_minmax(0,1fr)_260px] md:items-center md:p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-100 text-brand-800">
                  <Icon className="h-5 w-5" />
                </span>
                <strong className="text-lg font-extrabold text-brand-900">{audience.title}</strong>
              </div>
              <p className="text-base leading-7 text-muted">{audience.summary}</p>
              <div className="flex flex-wrap gap-2 md:justify-end">
                {audience.tags.map((tag) => (
                  <Badge key={tag} variant={audience.accent ? 'trust' : 'default'}>{tag}</Badge>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}