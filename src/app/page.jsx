import Filter from "@/components/Filter";
import Hero from "@/components/Hero";
import MobileGallery from "@/components/MobileGallery";
import Faq from "@/components/Faq"

export default function Home() {
  return (
    <>
      <Hero />
      <MobileGallery/>
      <Filter/>
      <Faq/>
    </>
  );
}
