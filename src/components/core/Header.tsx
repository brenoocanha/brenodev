import Image from "next/image";
import Logo from "@/assets/svg/logo-breno.svg";
import Link from "next/link";

import {useTranslations} from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

export default function Header({ locale }: { locale: string }) {

  unstable_setRequestLocale(locale);
  const tHeader = useTranslations('Header');

  return (
    <header className="bg-transparent h-16 fixed w-full top-0 left-0 backdrop-blur-xl shadow-lg flex z-50">
      <div className="w-full px-4 laptop:container laptop:px-0 flex justify-between mx-auto">
        <div className="flex justify-center items-center">
          <Link href='/'>
            <Image 
              src={Logo}
              height={64}
              width={64}
              alt="breno-logo"
            />
          </Link>
        </div>
        <nav className="flex justify-center items-center">
          <ul className="flex gap-4 items-center">
            <li>
              <Link href='#about'><p className="hidden laptop:block text-white tracking-wider hover:text-slate-300 transition-all">{tHeader('about')}</p></Link>
            </li>
            <li>
              <Link href='#experience'><p className="hidden laptop:block text-white tracking-wider hover:text-slate-300 transition-all">{tHeader('experience')}</p></Link>
            </li>
            <li>
              <Link href='#contact'><p className="hidden laptop:block text-white tracking-wider hover:text-slate-300 transition-all">{tHeader('contact')}</p></Link>
            </li>
            <Link href={locale === 'pt-BR' ? '/resume-pt.pdf' : '/resume-en.pdf'} target="_blank">
              <li className="p-2 ml-2 border rounded bg-[#F2E7DC] hover:bg-[#F6FAF9] transition-all ease-in-out">
                <p className="tracking-wider hover:text-slate-950 transition-all">{tHeader('resume')}</p>
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  )
}