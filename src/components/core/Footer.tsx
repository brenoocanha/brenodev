import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";

import Logo from "@/assets/svg/logo-breno.svg";
import Link from "next/link";

import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";


export default function Footer({ locale }: { locale: string }) {

  unstable_setRequestLocale(locale);
  const tFooter = useTranslations('Footer');

  return (
    <footer className="w-full">
      <div className="bg-slate-100 h-full flex justify-start py-10">
        <div className="flex flex-col items-center text-center gap-8 justify-between tablet:flex-row tablet:items-start tablet:text-left tablet:gap-0 tablet:container mx-auto">
          <div className="flex justify-center items-start">
            <Link href='/'>
              <Image
                src={Logo}
                width={120}
                height={120}
                alt="breno-logo"
              />
            </Link>
          </div>
          <nav className="flex">
            <ul className="flex flex-col justify-start">
              <h3 className="text-2xl font-bold mb-2">{tFooter('social')}</h3>
              <div className="flex flex-col gap-2">
                <li>
                  <Link href='https://www.linkedin.com/in/brenoocanha/' target="_blank" className="flex items-center">
                    <CiLinkedin />
                    <span className="pl-[4px] text-lg relative underlineAnim">LinkedIn</span>
                  </Link>
                </li>
                <li>
                  <Link href='https://github.com/brenoocanha/' target="_blank" className="flex items-center">
                    <VscGithub />
                    <span className="pl-[4px] text-lg relative underlineAnim">GitHub</span>
                  </Link>
                </li>
              </div>
            </ul>
          </nav>
          <nav className="flex justify-start items flex-col">
            <h3 className="text-2xl font-bold mb-2">{tFooter('contact')}</h3>
            <ul className="flex flex-col justify-start items gap-2">
              <li>
                <Link href='mailto:brenoocanha@hotmail.com' className="flex items-center justify-center tablet:justify-start gap-1">
                  <MdOutlineEmail />
                  <span className="relative underlineAnim text-lg">brenoocanha@hotmail.com</span>
                </Link>
              </li>
              <li>
                <Link href={tFooter('whatsapp_hook')} className="flex items-center justify-center tablet:justify-start gap-1">
                  <FaWhatsapp />
                  <span className="relative underlineAnim text-lg">WhatsApp</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

      </div>
      <div className="bg-slate-700 h-12 flex justify-center items-center">
        <div className="flex justify-center tablet:container mx-auto">
          <h3 className="text-white mobile:text-sm tablet:text-lg ">{tFooter('copyright')}</h3>
        </div>
      </div>
    </footer>
  )
}