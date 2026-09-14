import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import SelectedConcepts from "@/components/SelectedConcepts";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Philosophy from "@/components/Philosophy";
import About from "@/components/About";
import CtaFinal from "@/components/CtaFinal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SelectedWork />
        <SelectedConcepts />
        <Services />
        <Process />
        <Philosophy />
        <About />
      </main>
      <CtaFinal />
      <Contact />
      <Footer />
    </>
  );
}
