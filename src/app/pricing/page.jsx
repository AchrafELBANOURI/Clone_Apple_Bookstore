import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { MotionCard, MotionGrid, PageIntro } from "@/components/PageMotion";

const plans = [
  { name: "Ebooks", price: "From $0.00", description: "Build a library one story at a time.", features: ["Browse free and paid ebooks", "Keep a personal reading list", "Discover curated collections"], featured: false },
  { name: "Audiobooks", price: "From $0.00", description: "Take a good story along for the ride.", features: ["Explore free and paid audiobooks", "Listen whenever it suits you", "Find picks for every moment"], featured: true },
];

export default function PricingPage() {
  return (
    <div className="bg-white dark:bg-gray-950">
      <PageIntro eyebrow="Simple, flexible, yours" title={<>A good story<br />at your own pace.</>} description="Browse for free and choose the ebooks or audiobooks you want. No bookstore subscription required." />
      <MotionGrid className="mx-auto grid max-w-4xl gap-5 px-6 pb-20 md:grid-cols-2">
        {plans.map(({ name, price, description, features, featured }) => <MotionCard key={name} className={`rounded-3xl border p-8 sm:p-10 ${featured ? "border-gray-950 bg-gray-950 text-white dark:border-white" : "border-gray-200 bg-white text-gray-950 dark:border-gray-700 dark:bg-gray-900 dark:text-white"}`}><p className={`text-sm font-medium ${featured ? "text-orange-300" : "text-orange-600"}`}>{name}</p><h2 className="mt-5 text-3xl font-semibold">{price}</h2><p className={`mt-3 min-h-14 leading-6 ${featured ? "text-gray-300" : "text-gray-600 dark:text-gray-300"}`}>{description}</p><ul className="mt-8 space-y-4">{features.map((feature) => <li key={feature} className={`flex gap-3 text-sm ${featured ? "text-gray-200" : "text-gray-700 dark:text-gray-200"}`}><FaCheck className="mt-1 shrink-0 text-orange-500" aria-hidden="true" />{feature}</li>)}</ul><Link href="/" className={`mt-10 inline-flex rounded-full px-6 py-3 text-sm font-medium transition ${featured ? "bg-white text-gray-950 hover:bg-orange-100" : "bg-gray-950 text-white hover:bg-gray-700 dark:bg-white dark:text-gray-950"}`}>Explore books</Link></MotionCard>)}
      </MotionGrid>
      <p className="mx-auto max-w-2xl px-6 pb-20 text-center text-sm leading-6 text-gray-500">Prices vary by title and region. Some books may be available for free. Prices shown by the bookstore at purchase are final.</p>
    </div>
  );
}
