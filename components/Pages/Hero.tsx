import React from "react";
import Link from "next/link";
import Image from "next/image";

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
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Загрузить
            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Примечания к выпуску
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex justify-center">
          <Image src="/phone_chat.png" width={282} height={581} alt="screenshot" />
          {/* <Image src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"> */}
        </div>
      </div>
    </section>
  );

  return (
    // <section className="mx-auto flex max-w-7xl items-center justify-between p-8">
    <section className="mx-auto max-w-4xl px-4 py-32 sm:py-48 lg:py-56">
      {/* <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56"> */}
      <div className="sm:mb-8 flex justify-center mb-12">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 dark:text-gray-300 ring-1 ring-gray-900/10 dark:ring-gray-200 hover:ring-gray-900/20 dark:hover:ring-indigo-300">
          🎉 Матрешка бета <span className="font-semibold">{process.env.APP_VERSION}</span> уже доступна!
          <a href="#" className="font-semibold text-indigo-600 dark:text-indigo-400">
            <span className="absolute inset-0" aria-hidden="true" /> Подробнее <span aria-hidden="true">&rarr;</span>
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
            <Link
              href={`apks/matryoshka_${process.env.APP_VERSION || ""}.apk`}
              className="transform hover:scale-110 transition duration-300"
            >
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

export default Hero;
