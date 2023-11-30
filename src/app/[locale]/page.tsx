import {useTranslations} from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { ParamsLocale } from '@/types/Params';
import { GetTranslation } from '@/utils/GetTranslation';
 
export default function Index({
  params: { locale }
}: ParamsLocale) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Index');
  return (
    <section className='h-40 bg-main pt-16'>
      <h1 className=''>{t('title')}</h1>
    </section>
  );
}