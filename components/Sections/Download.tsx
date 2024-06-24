import Link from "next/link";
import Image from "next/image";
import React from "react";
import cfg from '@/config.json'

export default function Download() {
  return (
    <section id="download" className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Доступно на iOS и Android</h2>
      <div className="mt-10 flex items-center justify-start gap-x-6 flex-wrap">
        <Link href={`apks/matryoshka_${cfg.APP_VERSION || ""}.apk`} className="transform hover:scale-110 transition duration-300 lg:mb-0 mb-2">
          <Image width={180} height={52} src="/download-icons/android_download.png" alt="Google Play" />
        </Link>
        <Link href="https://huawei.com" className="transform hover:scale-110 transition duration-300 lg:mb-0 mb-2">
          <Image width={180} height={52} src="/download-icons/huawei_download.png" alt="Huawei App Gallery" />
        </Link>
        <Link href="https://testflight.apple.com/join/gX8yT0AW" className="transform hover:scale-110 transition duration-300 lg:mb-0 mb-2">
          <Image width={180} height={52} src="/download-icons/ios_download.png" alt="App Store" />
        </Link>
        <p>Актуальная версия {cfg.APP_VERSION}</p>
      </div>
    </section>
  );
}
