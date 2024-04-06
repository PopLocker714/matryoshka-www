import Image from "next/image";
import React from "react";
import Link from "next/link";

export const Hero = () => {
  return (
    // <section className="mx-auto flex max-w-7xl items-center justify-between p-8">
    <section className="mx-auto max-w-4xl px-4 py-32 sm:py-48 lg:py-56">
      {/* <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56"> */}
      <div className="sm:mb-8 flex justify-center mb-12">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 dark:text-gray-300 ring-1 ring-gray-900/10 dark:ring-gray-200 hover:ring-gray-900/20 dark:hover:ring-indigo-300">
          Матрешка Beta 0.12.2{" "}
          <a href="#" className="font-semibold text-indigo-600 dark:text-indigo-400">
            <span className="absolute inset-0" aria-hidden="true" />
            Подробнее <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>

      <div className="flex align-center justify-center">
        <div className="w-1/4 pr-6 lg:flex hidden">
          <Image alt="phone" src="/phone_chat.png" width={282} height={581} />
        </div>
        <div className="text-left lg:w-3/4 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-slate-100 sm:text-6xl">Добро пожаловать в Матрешку</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Матрешка - это не просто приложение для общения, это символ единства и доверия, который объединяет людей по всей России. Наш
              мессенджер предлагает широкий спектр возможностей для общения: от текстовых сообщений и аудио-вызовов до видеоконференций и
              обмена файлами.
            </p>
          </div>
          <div className="mt-10 flex items-center justify-start gap-x-6">
            <Link href="/matryoshka_1.0.apk" className="transform hover:scale-110 transition duration-300">
              <Image width={180} height={52} src="/android_download.png" alt="Скачать матрешку на android" />
            </Link>
            <Link href="/" className="transform hover:scale-110 transition duration-300">
              <Image width={180} height={52} src="/ios_download.png" alt="Скачать матрешку на ios" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
