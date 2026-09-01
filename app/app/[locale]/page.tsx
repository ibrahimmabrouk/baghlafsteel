import Link from 'next/link';
import type { Locale } from '@/lib/i18n';

type HomePageProps = {
  params: { locale: Locale };
};

const copy = {
  en: {
    title: 'Baghlaf Steel',
    subtitle: 'Saudi steel trading & supply for international B2B buyers',
    description:
      'Baghlaf Steel connects international buyers with Saudi steel supply through requirement-based sourcing and commercial coordination.',
    ctaProducts: 'Explore products',
    ctaRequirement: 'Submit a requirement',
  },
  ar: {
    title: 'بغلف للحديد',
    subtitle: 'تجارة وتوريد الحديد السعودي للمشترين الدوليين',
    description:
      'تربط بغلف للحديد المشترين الدوليين بمصادر التوريد السعودية من خلال تقييم المتطلبات والتنسيق التجاري.',
    ctaProducts: 'استكشف المنتجات',
    ctaRequirement: 'قدّم متطلباً',
  },
} as const;

export default function HomePage({ params }: HomePageProps) {
  const t = copy[params.locale];

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <p className="mb-4 text-sm font-medium uppercase tracking-wider text-saudi-gold">
        {params.locale === 'ar' ? 'المملكة العربية السعودية' : 'Saudi Arabia'}
      </p>
      <h1 className="font-heading text-4xl font-bold tracking-tight text-steel-950 sm:text-5xl">
        {t.title}
      </h1>
      <p className="mt-4 text-xl text-steel-700">{t.subtitle}</p>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel-600">{t.description}</p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href={`/${params.locale}/products`}
          className="rounded-md bg-saudi-dark px-6 py-3 text-sm font-semibold text-white transition hover:bg-steel-800"
        >
          {t.ctaProducts}
        </Link>
        <Link
          href={`/${params.locale}/contact`}
          className="rounded-md border border-steel-300 px-6 py-3 text-sm font-semibold text-steel-800 transition hover:border-steel-500"
        >
          {t.ctaRequirement}
        </Link>
      </div>
    </section>
  );
}
