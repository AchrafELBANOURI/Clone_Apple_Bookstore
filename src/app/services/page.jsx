import Link from "next/link";
import { FaBookmark, FaHeadphones, FaLightbulb, FaMobileAlt } from "react-icons/fa";
import { MotionCard, MotionGrid, PageIntro } from "@/components/PageMotion";

const services = [
  { icon: FaBookmark, number: "01", title: "A library for every mood", text: "Browse handpicked collections, fresh releases, timeless favorites, and books chosen around your interests." },
  { icon: FaHeadphones, number: "02", title: "Stories you can hear", text: "Explore audiobooks for your commute, your walk, or a quiet moment at the end of the day." },
  { icon: FaLightbulb, number: "03", title: "Find your next read", text: "Get inspired by recommendations, reader favorites, and collections curated to spark your curiosity." },
  { icon: FaMobileAlt, number: "04", title: "Your shelf, close at hand", text: "Keep your reading list and saved titles together so it’s easy to pick up where you left off." },
];

export default function ServicesPage() {
  return (
    <div className="bg-white dark:bg-gray-950">
      <PageIntro eyebrow="The experience" title={<>More than a shelf.<br />A little reading ritual.</>} description="Everything you need to discover a book, settle into a story, and keep your favorites close." />
      <MotionGrid className="mx-auto grid max-w-6xl gap-5 px-6 pb-24 sm:grid-cols-2">
        {services.map(({ icon: Icon, number, title, text }) => <MotionCard key={number} className="group rounded-3xl bg-gray-50 p-8 transition-colors hover:bg-orange-50 sm:p-10 dark:bg-gray-900 dark:hover:bg-gray-800"><div className="flex items-center justify-between"><Icon className="text-2xl text-orange-500" aria-hidden="true" /><span className="text-sm text-gray-400">{number}</span></div><h2 className="mt-10 text-2xl font-semibold text-gray-950 dark:text-white">{title}</h2><p className="mt-4 max-w-lg leading-7 text-gray-600 dark:text-gray-300">{text}</p></MotionCard>)}
      </MotionGrid>
      <section className="bg-orange-50 px-6 py-16 text-center dark:bg-gray-900"><h2 className="text-3xl font-semibold text-gray-950 dark:text-white">Your next favorite is waiting.</h2><Link href="/" className="mt-6 inline-flex rounded-full bg-gray-950 px-6 py-3 font-medium text-white transition hover:bg-gray-700 dark:bg-white dark:text-gray-950">Browse the bookstore</Link></section>
    </div>
  );
}
