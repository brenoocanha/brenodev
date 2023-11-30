import {useTranslations} from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { locales } from '@/i18n/Locales';
 
export default function Index({
  params: { locale }
}: {
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Index');
  return <h1>{t('title')}</h1>;
}