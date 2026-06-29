import { processSteps } from '../../data/siteContent.js';
import { Section } from '../ui/Section.jsx';

export function ProcessSection() {
  return (
    <Section
      id="process"
      tone="dark"
      eyebrow="진행 방식"
      title="문의부터 납품까지 단순하게 진행합니다"
      description="품목이 많거나 정확한 명칭을 몰라도 괜찮습니다. 필요한 상황을 알려주시면 확인 가능한 범위부터 정리합니다."
    >
      <ol className="grid gap-3 md:grid-cols-5">
        {processSteps.map((step, index) => (
          <li key={step.title} className="rounded-lg border border-white/15 bg-white/[0.06] p-5">
            <span className="text-sm font-black text-white/45">{String(index + 1).padStart(2, '0')}</span>
            <strong className="mt-7 block text-lg font-extrabold text-white">{step.title}</strong>
            <p className="mt-3 text-sm leading-6 text-white/68">{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}