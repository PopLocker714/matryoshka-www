import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Download() {
  return (
    <section id="download" className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Доступно на iOS и Android</h2>
      <div className="mt-10 flex items-center justify-start gap-x-6">
        <Link href={`apks/matryoshka_${process.env.APP_VERSION || ""}.apk`} className="transform hover:scale-110 transition duration-300">
          <Image width={180} height={52} src="/download-icons/android_download.png" alt="" />
        </Link>
        <Link href="https://huawei.com" className="transform hover:scale-110 transition duration-300">
          <Image width={180} height={52} src="/download-icons/huawei_download.png" alt="" />
        </Link>
        <Link href="https://testflight.apple.com/join/gX8yT0AW" className="transform hover:scale-110 transition duration-300">
          <Image width={180} height={52} src="/download-icons/ios_download.png" alt="" />
        </Link>
      </div>
    </section>
  );
}
