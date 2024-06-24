import Footer from "@/components/Navigation/Footer";
import Header from "../components/Navigation/Header";
import Hero from "@/components/Sections/Hero";
import Feature from "@/components/Sections/Feature";
import Download from "@/components/Sections/Download";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Feature />
        <Download />
      </main>
      <Footer />
    </>
  );
}
