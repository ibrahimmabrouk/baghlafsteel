import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-6 text-center">
      <h1 className="font-heading text-4xl font-bold text-steel-950">404</h1>
      <p className="mt-4 text-steel-600">The page you requested could not be found.</p>
      <Link
        href="/en"
        className="mt-8 rounded-md bg-saudi-dark px-6 py-3 text-sm font-semibold text-white"
      >
        Back to home
      </Link>
    </section>
  );
}
