import { Playfair_Display } from 'next/font/google';
import '../globals.css';
import { notFound } from 'next/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';
import { locales } from '@/i18n/Locales';
import { getTranslations } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import Header from '@/components/core/Header';
import Footer from '@/components/core/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
})

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const t = await getTranslations({locale, namespace: 'Metadata'});
  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode,
  params: { locale: string }
}) {
  
  if (!locales.includes(locale as any)) notFound();

  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={playfair.className}>
        <Header locale={locale}/>
        {children}
        <Footer locale={locale}/>
      </body>
    </html>
  )
}

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}