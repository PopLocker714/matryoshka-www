import Footer from "@/components/Navigation/Footer";
import Header from "@/components/Navigation/Header";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import Link from "next/link";
import cfg from "@/config.json";
import { useEffect } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Загрузить Mатрешку",
  description: "Скачать матрешку",
};

export default function Download() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-4 h-full">
        <section className="h-full">
          <div className="flex flex-col">
            {/* <DownloadButton /> */}
            <Link className="mb-2" download={true} href={`/apks/${cfg.APP_VERSION}/app-universal-release.apk`}>
              <Button>
                Матрешка universal.apk
                <DownloadIcon className="ml-2" />
              </Button>
            </Link>
            <Link className="mb-2" download={true} href={`/apks/${cfg.APP_VERSION}/app-arm64-v8a-release.apk`}>
              <Button>
                Матрешка arm64-v8a.apk
                <DownloadIcon className="ml-2" />
              </Button>
            </Link>
            <Link className="mb-2" download={true} href={`/apks/${cfg.APP_VERSION}/app-armeabi-v7a-release.apk`}>
              <Button>
                Матрешка armeabi-v7a.apk
                <DownloadIcon className="ml-2" />
              </Button>
            </Link>
            <Link className="mb-2" download={true} href={`/apks/${cfg.APP_VERSION}/app-x86_64-release.apk`}>
              <Button>
                Матрешка x86_64.apk
                <DownloadIcon className="ml-2" />
              </Button>
            </Link>
            <Link className="mb-2" download={true} href={`/apks/${cfg.APP_VERSION}/app-x86-release.apk`}>
              <Button>
                Матрешка x86.apk
                <DownloadIcon className="ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
