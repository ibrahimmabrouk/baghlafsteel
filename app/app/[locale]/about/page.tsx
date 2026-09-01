import type { Locale } from '@/lib/i18n';

type AboutPageProps = {
  params: { locale: Locale };
};

export default function AboutPage({ params }: AboutPageProps) {
  const isAr = params.locale === 'ar';

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-heading text-3xl font-bold text-steel-950">
        {isAr ? 'من نحن' : 'About Baghlaf Steel'}
      </h1>
      <p className="mt-6 leading-relaxed text-steel-600">
        {isAr
          ? 'بغلف للحديد شركة سعودية لتجارة وتوريد الحديد، تركز على المشترين الدوليين في قطاع B2B. هذه الصفحة placeholder حتى اعتماد المحتوى النهائي.'
          : 'Baghlaf Steel is a Saudi steel trading and supply company focused on international B2B buyers. This page is a placeholder until final content is approved.'}
      </p>
    </section>
  );
}
