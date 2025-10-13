import Image from "next/image";
import SlideGameMode from "@/components/slide-gamemode";
import Hero from "@/components/hero";
import Welcome from "@/components/welcome";
import WeaponsSection from "@/components/weapon";
import EquipmentSection from "@/components/equipment";
import NewsSection from "@/components/news";
import FooterSection from "@/components/footer";
import FloatingDownload from "@/components/floating-download";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="overview">
          <Welcome />
        </section>
        <section id="gamemode">
          <SlideGameMode />
        </section>
        <section id="equipment">
          <EquipmentSection />
        </section>
        <section id="news">
          <NewsSection />
        </section>
      <FooterSection/>
        {/* <WeaponsSection/> */}
      </main>
      <div className="hidden md:block">
        <FloatingDownload />
      </div>
    </div>
  );
}
