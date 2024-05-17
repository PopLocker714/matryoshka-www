import { Metadata } from "next";
import Markdown from "@/components/Markdown";
import Footer from "@/components/Navigation/Footer";
import Header from "@/components/Navigation/Header";

export const metadata: Metadata = {
  title: "Пользовательское соглашение Матрешка",
  description: "Пользовательское соглашение для приложения Матрешка",
};

export default function Privacy() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-4">
        <section>
          <Markdown name="privacy" pathFolder="./public/docs" version="1" />
        </section>
      </main>
      <Footer />
    </>
  );
}
