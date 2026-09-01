import type { Locale } from '@/lib/i18n';

type VerificationPageProps = {
  params: { locale: Locale };
};

export default function VerificationPage({ params }: VerificationPageProps) {
  const isAr = params.locale === 'ar';

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-heading text-3xl font-bold text-steel-950">
        {isAr ? 'التحقق من الهوية الرقمية' : 'Digital Verification'}
      </h1>
      <p className="mt-6 leading-relaxed text-steel-600">
        {isAr
          ? 'ستتيح هذه الصفحة للزوار التحقق من أنهم يتعاملون مع بغلف للحديد الرسمية.'
          : 'This page will help visitors verify they are dealing with the official Baghlaf Steel company.'}
      </p>
    </section>
  );
}
