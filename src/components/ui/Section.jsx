const sectionTone = {
  light: 'bg-white text-ink',
  muted: 'bg-surface text-ink',
  dark: 'bg-brand-900 text-white',
};

const descriptionTone = {
  light: 'text-muted',
  muted: 'text-muted',
  dark: 'text-white/70',
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  tone = 'light',
  headClassName = '',
  descriptionClassName = '',
}) {
  return (
    <section id={id} className={`py-16 md:py-24 ${sectionTone[tone]}`}>
      <div className="mx-auto w-[min(1120px,calc(100%-28px))] md:w-[min(1120px,calc(100%-40px))]">
        {(eyebrow || title || description) && (
          <div className={`mb-9 max-w-3xl ${headClassName}`.trim()}>
            {eyebrow && <p className="mb-3 text-sm font-bold text-brand-700">{eyebrow}</p>}
            {title && <h2 className="text-[28px] font-bold leading-[1.24] tracking-normal break-keep md:text-[40px]">{title}</h2>}
            {description && (
              <p className={`mt-4 text-base leading-8 md:text-[17px] ${descriptionTone[tone]} ${descriptionClassName}`.trim()}>
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}