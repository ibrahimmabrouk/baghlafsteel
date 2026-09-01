import Link from 'next/link';
import type { Locale } from '@/lib/i18n';

const nav = {
  en: [
    { href: 'products', label: 'Products' },
    { href: 'about', label: 'About' },
    { href: 'verification', label: 'Verification' },
    { href: 'contact', label: 'Contact' },
  ],
  ar: [
    { href: 'products', label: 'المنتجات' },
    { href: 'about', label: 'من نحن' },
    { href: 'verification', label: 'التحقق' },
    { href: 'contact', label: 'تواصل' },
  ],
} as const;

type HeaderProps = {
  locale: Locale;
};

export function Header({ locale }: HeaderProps) {
  const items = nav[locale];
  const alternateLocale = locale === 'en' ? 'ar' : 'en';

  return (
    <header className="border-b border-steel-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href={`/${locale}`} className="font-heading text-lg font-bold text-steel-950">
          {locale === 'ar' ? 'بغلف للحديد' : 'Baghlaf Steel'}
        </Link>
        <nav className="flex items-center gap-6">
          {items.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}/${item.href}`}
              className="text-sm font-medium text-steel-700 transition hover:text-steel-950"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={`/${alternateLocale}`}
            className="rounded border border-steel-200 px-2 py-1 text-xs font-semibold uppercase text-steel-600"
          >
            {alternateLocale}
          </Link>
        </nav>
      </div>
    </header>
  );
}
