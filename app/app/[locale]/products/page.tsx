import Link from 'next/link';
import type { Locale } from '@/lib/i18n';

type ProductsPageProps = {
  params: { locale: Locale };
};

export default function ProductsPage({ params }: ProductsPageProps) {
  const isAr = params.locale === 'ar';

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-heading text-3xl font-bold text-steel-950">
        {isAr ? 'المنتجات' : 'Products'}
      </h1>
      <p className="mt-6 leading-relaxed text-steel-600">
        {isAr
          ? 'قائمة المنتجات المعتمدة ستُضاف هنا. الصفحات الحالية placeholder للبنية التقنية.'
          : 'The approved product catalog will be added here. Current pages are placeholders for the technical foundation.'}
      </p>
      <Link
        href={`/${params.locale}/contact`}
        className="mt-8 inline-block text-sm font-semibold text-saudi-dark underline-offset-4 hover:underline"
      >
        {isAr ? 'قدّم متطلباً' : 'Submit a requirement →'}
      </Link>
    </section>
  );
}
