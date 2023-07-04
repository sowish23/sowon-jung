'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import {getString} from '@/utils/lang'
import { useTheme } from "next-themes";


export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  console.log(systemTheme, theme)
  const [lang, setLang] = useState<string>('en');


  return (
    <main className="flex min-h-screen flex-col md:px-10 px-4 pt-10 bg-white dark:bg-neutral-800 text-black dark:text-white">
      <section className='flex justify-end pb-8'>
        <div>
          <button 
            onClick={() => lang === 'en' ? setLang('ko') : setLang('en')}
            className='dark:border-white border-black px-4 rounded-full border text-xl mr-4 drop-shadow-lg bg-white text-black'>
            {lang === 'en' ? '🇰🇷 KOR' : '🇺🇸 ENG'}
          </button>
          <button 
            onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}
            className='dark:border-white border-black px-4 rounded-full border text-xl drop-shadow-lg bg-white text-black'>
            {lang === 'en' ? '🌙 DARK' : '✨ LIGHT'}
          </button>
        </div>
      </section>
      <section className='flex flex-col md:flex-row justify-start items-center'>
        <div className='md:pr-10 pr-0 flex justify-center w-full md:w-1/2'>
          <Image 
            className='border-4 dark:border-white border-black w-full h-fit'
            src={'/images/profileImage.jpeg'}
            width={500}
            height={500}
            alt={''}/>
        </div>
        <div className='w-full md:w-1/2'>
          <div className='md:pt-0 pt-4'>
            <p className='lg:text-5xl text-4xl pb-2 text-right'>{getString('HELLO', lang)}</p>
            <p className='lg:text-5xl text-4xl pb-2 text-right'>{getString('IAM', lang)} <span className='font-bold bg-gradient-to-t from-[#fecaca] from-50% to-transperant-60 to-50%'>{getString('SOWONJUNG', lang)},</span></p>
            <p className='lg:text-5xl text-4xl font-bold text-right'>{getString('FE', lang)}<span className='font-normal'> {getString('FE_KO', lang)}</span></p>
          </div>
          <div className='pt-10'>
            <p className='font-bold lg:text-3xl text-2xl'>📮 Contact</p>
            <p className='lg:text-xl text-lg pt-2'><span className='font-bold lg:text-xl text-lg'>EMAIL: </span>sowon2266@gmail.com</p>
            <p className='lg:text-xl text-lg pt-2'><span className='font-bold lg:text-xl text-lg'>TEL: </span>(USA)+1 415 200 9220 / (KOR)+82 10 8520 1180</p>
            <p className='lg:text-xl text-lg pt-2'>
              <span className='font-bold lg:text-xl text-lg'>GITHUB: </span>
              <a className='underline' href='https://github.com/sowish23'>https://github.com/sowish23</a>
            </p>
          </div>
        </div>
      </section>
      <section className='pt-20'>
        <div>
          <p className='lg:text-3xl text-2xl font-bold'>
            ✔️ {getString('CAREER_TITLE', lang)} <span className='font-bold bg-gradient-to-t from-[#fecaca] from-50% to-transperant-60 to-50%'>{getString('CAREER', lang)}</span>{getString('CAREER_KO', lang)}!
          </p>
        </div>
      </section>
    </main>
  )
}
