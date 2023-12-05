import {useTranslations} from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { ParamsLocale } from '@/types/Params';
import { GetTranslation } from '@/utils/GetTranslation';
import Image from 'next/image';
import HomeLayout from '@/components/layout/HomeLayout';
 
export default function Index({
  params: { locale }
}: ParamsLocale) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('S-Hero');

  const HomeTexts = {
    headline: t('headline'),
    name: t('name'),
    subtitle: t('subtitle'),
    description: t('description')
  }

  return (
    <section className='h-full bg-main pt-16'>
      <HomeLayout translation={HomeTexts}/>
    </section>
  );
}