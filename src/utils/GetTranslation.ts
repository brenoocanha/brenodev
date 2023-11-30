import {useTranslations} from 'next-intl';

export function GetTranslation(parent: string, child: string) {
  const t = useTranslations(parent);
  return t(child);
}