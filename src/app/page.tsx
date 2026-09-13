import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import SelectedWork from "@/components/SelectedWork";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Introduction />
        <SelectedWork />
        <Services />
        <Process />
        <About />
      </main>
      <CtaFinal />
      <Footer />
    </>
  );
}
