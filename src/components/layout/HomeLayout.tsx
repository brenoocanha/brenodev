"use client"

import Image from "next/image";
import ReactLogo from "@/assets/react-logo.png";

interface SHeroTexts {
  translation: {
    description: string;
    headline: string;
    name: string;
    subtitle: string;
  }
}

export default function HomeLayout({
  translation,
}: SHeroTexts) {

  return (
    <>
      <div className='flex-col-reverse laptop:flex-row laptop:container mx-auto flex justify-between items-center relative py-44 px-10'>

        <div className="flex laptop:justify-start laptop:items-start flex-col justify-center items-center w-full">
          <h3 className="text-white font-bold text-center laptop:text-left tablet:text-2xl laptop:text-3xl">{translation.headline}</h3>
          <h1 className="text-white font-bold leading-none whitespace-nowrap text-center laptop:text-left text-[4rem] laptop:text-[4.5rem]">{translation.name}</h1>
          <h2 className="text-[#F2E7DC] font-bold leading-none my-4 text-center laptop:text-left text-2xl laptop:text-[2.5rem]">{translation.subtitle}</h2>
          <p className="text-white text-xl laptop:text-2xl text-center laptop:text-left">{translation.description}</p>
        </div>
        <div className="flex w-full justify-between">
          <div className="w-full flex justify-center scale-50 laptop:scale-100">
            <Image
              src={ReactLogo}
              sizes="(max-width: 1024px) 33vw, 100vw"
              alt='react-logo'
              style={{
                width: '100%',
                maxWidth: '40.1875rem',
                maxHeight: '36.0625rem',
              }}
              className="animate-spin-slow absolute top-0 laptop:static"
            />
          </div>
        </div>
      </div>
    </>
  )
}