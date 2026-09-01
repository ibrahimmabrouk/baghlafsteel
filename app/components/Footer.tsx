import type { Locale } from '@/lib/i18n';

type FooterProps = {
  locale: Locale;
};

export function Footer({ locale }: FooterProps) {
  const year = new Date().getFullYear();
  const label =
    locale === 'ar'
      ? `© ${year} بغلف للحديد. جميع الحقوق محفوظة.`
      : `© ${year} Baghlaf Steel. All rights reserved.`;

  return (
    <footer className="border-t border-steel-200 bg-steel-50">
      <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-steel-600">{label}</div>
    </footer>
  );
}
