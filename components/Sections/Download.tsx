import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import cfg from "@/config.json";
import { Button } from "../ui/button";
import { DownloadIcon } from "lucide-react";
import { DownloadDropDown } from "../DownloadDropDown";

export default function Download() {
  return (
    <section id="download" className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <h2 className="mb-6 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Доступно на iOS и Android</h2>
      <DownloadDropDown />
      <h3 className="text-xl mb-4 text-gray-900 dark:text-white">Магазины приложений</h3>
      <div className="flex items-center justify-start gap-x-6 flex-wrap">
        <Link href={cfg.DOWNLOADS_URLS.APP_GALLERY} className="transform hover:scale-110 transition duration-200 lg:mb-0 mb-2">
          <Image width={180} height={52} src="/download-icons/huawei_download.png" alt="Huawei App Gallery" />
        </Link>

        <Link href={cfg.DOWNLOADS_URLS.APP_STORE} className="transform hover:scale-110 transition duration-200 lg:mb-0 mb-2">
          <Image width={180} height={52} src="/download-icons/ios_download.png" alt="App Store" />
        </Link>
        {/* <p>Актуальная версия {cfg.APP_VERSION}</p> */}
      </div>
    </section>
  );
}
