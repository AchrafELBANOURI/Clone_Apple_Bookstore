import Link from "next/link";
import { FaEnvelope, FaQuestionCircle } from "react-icons/fa";
import { PageIntro } from "@/components/PageMotion";

const topics = [
  { title: "Using the bookstore", text: "Questions about browsing, reading, or listening? We’re happy to point you in the right direction." },
  { title: "Your account or a purchase", text: "For account, billing, or order help, contact the support team for the store where you made your purchase." },
  { title: "Press and partnerships", text: "For editorial, media, or partnership inquiries, send us a note and tell us a little about your project." },
];

export default function ContactPage() {
  return (
    <div className="bg-white dark:bg-gray-950">
      <PageIntro eyebrow="We’re here to help" title={<>Let’s talk<br />books.</>} description="A question, an idea, or a recommendation? Pick the best place to start and we’ll help you find your way." />
      <section className="mx-auto grid max-w-6xl gap-5 px-6 pb-24 md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl bg-gray-50 p-8 sm:p-10 dark:bg-gray-900"><h2 className="text-2xl font-semibold text-gray-950 dark:text-white">How can we help?</h2><div className="mt-8 divide-y divide-gray-200 dark:divide-gray-700">{topics.map(({ title, text }) => <article key={title} className="py-5 first:pt-0 last:pb-0"><h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">{text}</p></article>)}</div></div>
        <div className="flex flex-col justify-between rounded-3xl bg-orange-50 p-8 sm:p-10 dark:bg-gray-800"><div><FaEnvelope className="text-2xl text-orange-600" aria-hidden="true" /><h2 className="mt-6 text-2xl font-semibold text-gray-950 dark:text-white">Send us a note</h2><p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">Email is the best way to reach our bookstore team. We’ll get back to you as soon as we can.</p></div><a href="mailto:hello@bookstore.example" className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-gray-950 px-6 py-3 font-medium text-white transition hover:bg-gray-700 dark:bg-white dark:text-gray-950"><FaEnvelope aria-hidden="true" /> Email the team</a></div>
      </section>
      <section className="border-t border-gray-100 px-6 py-14 text-center dark:border-gray-800"><FaQuestionCircle className="mx-auto text-2xl text-orange-500" aria-hidden="true" /><p className="mt-4 text-gray-600 dark:text-gray-300">Looking for something to read?</p><Link href="/" className="mt-2 inline-block font-medium text-blue-600 hover:underline">Visit the bookstore</Link></section>
    </div>
  );
}
