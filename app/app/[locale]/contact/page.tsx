import type { Locale } from '@/lib/i18n';

type ContactPageProps = {
  params: { locale: Locale };
};

export default function ContactPage({ params }: ContactPageProps) {
  const isAr = params.locale === 'ar';

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-heading text-3xl font-bold text-steel-950">
        {isAr ? 'تواصل معنا' : 'Contact'}
      </h1>
      <p className="mt-6 leading-relaxed text-steel-600">
        {isAr
          ? 'نموذج تقديم المتطلبات وقنوات التواصل الرسمية ستُضاف بعد اعتماد بيانات الاتصال.'
          : 'The requirement submission form and official contact channels will be added after contact details are approved.'}
      </p>
    </section>
  );
}
