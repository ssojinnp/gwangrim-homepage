import { trustItems } from '../../data/siteContent.js';

export function TrustBar() {
  return (
    <section className="bg-brand-900 py-5" aria-label="광림전산 주요 서비스">
      <div className="mx-auto grid w-[min(1120px,calc(100%-28px))] gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 md:w-[min(1120px,calc(100%-40px))] md:grid-cols-2 lg:grid-cols-4">
        {trustItems.map((item) => (
          <div key={item.value} className="bg-brand-900 p-5 text-white">
            <strong className="mb-1 block text-2xl font-black">{item.value}</strong>
            <span className="font-semibold text-white/72">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
