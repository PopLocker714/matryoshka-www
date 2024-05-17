import Footer from "@/components/Navigation/Footer";
import Header from "../components/Navigation/Header";
import Hero from "@/components/Pages/Hero";
import Feature from "@/components/Pages/Feature";
import Download from "@/components/Pages/Download";
// import { Hero } from "@/components/Hero/Hero";
// import Feature from "@/components/Feature";
// import Download from "@/components/Download";

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
