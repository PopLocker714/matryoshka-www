import React from "react";
import Image from "next/image";
import { Download } from 'lucide-react'
import Link from "next/link";

const Hero = () => {
  return (
    <section>
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Добро пожаловать в Матрешку
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Матрешка - это не просто приложение для общения, это символ единства и доверия, который объединяет людей по всей России. Наш
            мессенджер предлагает широкий спектр возможностей для общения: от текстовых сообщений и аудио-вызовов до видеоконференций и
            обмена файлами.
          </p>
          <a
            href="#download"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 lg:mb-0 mb-2"
          >
            Загрузить
            <Download className="ml-2" />
          </a>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Примечания к выпуску
          </Link>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex justify-center">
          <Image src="/phone_home.jpg" className="rounded-lg" width={282} height={581} alt="screenshot" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
