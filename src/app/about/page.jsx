import Link from "next/link";
import { FaBookOpen, FaHeadphones, FaHeart } from "react-icons/fa";
import { MotionCard, MotionGrid, PageIntro } from "@/components/PageMotion";

const values = [
  { icon: FaBookOpen, title: "A world of stories", text: "Find your next favorite in a thoughtfully curated collection of ebooks and audiobooks." },
  { icon: FaHeadphones, title: "Read your way", text: "Pick up a book, press play, and move between reading and listening at your own pace." },
  { icon: FaHeart, title: "Made for readers", text: "Save the books you love, discover something unexpected, and make every shelf your own." },
];

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-gray-950">
      <PageIntro eyebrow="About Book Store" title={<>For the love<br className="hidden sm:block" /> of a good story.</>} description="A welcoming place to find the books you came for—and the ones you didn't know you needed." />
      <section className="mx-auto max-w-6xl px-6 pb-20"><div className="rounded-[2rem] bg-orange-50 px-8 py-12 text-center sm:px-16 sm:py-16 dark:bg-gray-900"><p className="mx-auto max-w-3xl text-2xl font-medium leading-relaxed text-gray-800 sm:text-3xl dark:text-gray-100">“Every book opens a door. We’re here to help you find the right one.”</p><p className="mt-5 text-sm text-gray-500">The Book Store team</p></div></section>
      <MotionGrid className="mx-auto grid max-w-6xl gap-5 px-6 pb-24 md:grid-cols-3">
        {values.map(({ icon: Icon, title, text }) => <MotionCard key={title} className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900"><Icon className="mb-6 text-2xl text-orange-500" aria-hidden="true" /><h2 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h2><p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">{text}</p></MotionCard>)}
      </MotionGrid>
      <section className="bg-gray-950 px-6 py-16 text-center text-white"><h2 className="text-3xl font-semibold">Ready for your next chapter?</h2><Link href="/services" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 font-medium text-gray-950 transition hover:bg-orange-100">Explore the experience</Link></section>
    </div>
  );
}
