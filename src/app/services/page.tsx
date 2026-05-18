import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Blow Dry Bar Services Kansas City",
  description:
    "Full service menu for Posh KC blow dry bar. Blowouts, styling, makeup, extensions, and add-ons. Prices from $25. Located in downtown Kansas City.",
};

const BOOKING_URL =
  "https://dashboard.boulevard.io/booking/businesses/3e4b294a-a93f-42ef-887d-613eaf4c9c5c/widget#/visit-type";

const hairServices = [
  { name: "The Posh", price: "$60", desc: "Wash & Style — our signature blowout" },
  { name: "The Quickie", price: "$35", desc: "Dry Style with hot tools — no wash" },
  { name: "Hollywood Waves", price: "$75", desc: "Glamorous styled waves (add wash +$25)" },
  { name: "The Classic Updo", price: "$65", desc: "Polished upstyle for any occasion (add wash +$25)" },
  { name: "The Luxe Treatment", price: "$80", desc: "Wash, deep conditioning & sleek style — ideal for curly & extra curly hair" },
  { name: "The Princess", price: "$35", desc: "Wash (optional), style, glitter spray & lip gloss — 10 & under" },
  { name: "The Gentleman", price: "$25", desc: "Wash & style" },
];

const makeupServices = [
  { name: "The Makeover", price: "$65", desc: "Full makeup application by our expert artists" },
  { name: "Makeup Instruction", price: "$75", desc: "1-hour personalized makeup tutorial — learn techniques from our pros" },
];

const combos = [
  { name: "The Signature", price: "$125", desc: "Wash, Style & Makeup — the ultimate all-in-one" },
  { name: "High Society", price: "$130", desc: "Upstyle & Makeup (add wash +$25)" },
];

const addOns = [
  "Scalp Massage",
  "Conditioning Treatment",
  "Buns & Braids",
  "Lashes (strip or individual)",
  "A-la-carte Makeup",
  "Clip-in Extensions",
  "Tape-in Extensions",
  "Hand-Tied Extensions",
];

const faqs = [
  {
    question: "What is a blow dry bar?",
    answer:
      "A blow dry bar is a salon that specializes exclusively in blowouts, styling, and makeup — no cuts, no color. We focus on what we do best so every service is perfected. In and out faster than a traditional salon, with better results.",
  },
  {
    question: "How long does a blowout last?",
    answer:
      "Most blowouts last 3–5 days depending on your hair type, activity level, and how you care for it overnight. We recommend using a silk pillowcase and dry shampoo to extend the life of your style.",
  },
  {
    question: "Do I need an appointment?",
    answer:
      "We recommend booking ahead through our Boulevard booking platform to guarantee your preferred time. Walk-ins are welcome based on availability.",
  },
  {
    question: "Do you offer extensions?",
    answer:
      "Yes! We offer clip-in, tape-in, and hand-tied extension services as add-ons. We also offer extension training for stylists.",
  },
  {
    question: "Can I just get makeup without a hair service?",
    answer:
      "Absolutely. Makeup services stand alone — The Makeover ($65) and Makeup Instruction ($75) can be booked independently.",
  },
];

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Blow Dry Bar Services Kansas City",
  provider: {
    "@type": "HairSalon",
    name: "Posh KC Blow Dry Bar",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1211 Main St",
      addressLocality: "Kansas City",
      addressRegion: "MO",
      postalCode: "64106",
    },
  },
  areaServed: "Kansas City, MO",
  description: "Professional blowouts, styling, and makeup services in downtown Kansas City.",
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-posh-purple text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/f1d4c812-e0fe-4445-bb03-18138ae905bb/244761626_1715745961957187_1588629831128628003_n.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-posh-lavender font-bold uppercase tracking-widest text-sm mb-4">
            Posh KC — Downtown Kansas City
          </p>
          <h1 className="text-5xl font-black mb-4">Blow Dry Bar Services</h1>
          <p className="text-posh-lavender text-lg max-w-2xl mx-auto mb-8">
            No cuts, no color — just expert blowouts, styling, and makeup. Every service
            performed by our team of specialists.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-posh-purple font-black uppercase tracking-wider hover:bg-posh-lavender transition-colors"
          >
            Book Now
          </a>
        </div>
      </section>

      {/* Hair Services */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="mb-10">
            <h2 className="text-3xl font-black text-posh-dark mb-2">Hair Services</h2>
            <p className="text-gray-500">
              From a quick dry style to our signature Luxe Treatment — we have the perfect blowout for every hair type.
            </p>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {hairServices.map((svc, i) => (
              <SectionReveal key={svc.name} delay={(i % 3) as 0 | 1 | 2}>
                <div className="flex items-start justify-between p-5 border border-gray-100 hover:border-posh-lavender hover:shadow-sm transition-all group">
                  <div className="pr-4">
                    <h3 className="font-black text-posh-dark group-hover:text-posh-purple transition-colors">
                      {svc.name}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">{svc.desc}</p>
                  </div>
                  <span className="font-black text-posh-purple text-lg flex-shrink-0">
                    {svc.price}
                  </span>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Image break */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/b3eeb763-fa93-4ad5-af54-49adc6aca6b2/306728559_515641853894346_4189330445861076012_n.jpg"
          alt="Posh KC makeup services"
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-posh-dark/40" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <p className="text-white text-2xl font-black uppercase tracking-widest">
            Makeup Services
          </p>
        </div>
      </div>

      {/* Makeup Services */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
            {makeupServices.map((svc, i) => (
              <SectionReveal key={svc.name} delay={(i % 2) as 0 | 1}>
                <div className="flex items-start justify-between p-5 border border-gray-100 hover:border-posh-lavender hover:shadow-sm transition-all group">
                  <div className="pr-4">
                    <h3 className="font-black text-posh-dark group-hover:text-posh-purple transition-colors">
                      {svc.name}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">{svc.desc}</p>
                  </div>
                  <span className="font-black text-posh-purple text-lg flex-shrink-0">
                    {svc.price}
                  </span>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal className="mb-10">
            <h2 className="text-3xl font-black text-posh-dark mb-2">Combo Services</h2>
            <p className="text-gray-500">Get hair and makeup together and save.</p>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {combos.map((svc, i) => (
              <SectionReveal key={svc.name} delay={(i % 2) as 0 | 1}>
                <div className="flex items-start justify-between p-5 bg-posh-lavender-light border border-posh-lavender hover:shadow-sm transition-all group">
                  <div className="pr-4">
                    <h3 className="font-black text-posh-dark group-hover:text-posh-purple transition-colors">
                      {svc.name}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">{svc.desc}</p>
                  </div>
                  <span className="font-black text-posh-purple text-lg flex-shrink-0">
                    {svc.price}
                  </span>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-16 bg-posh-gray">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="mb-8">
            <h2 className="text-3xl font-black text-posh-dark mb-2">Add-On Indulges</h2>
            <p className="text-gray-500">Enhance any service with our luxe add-ons.</p>
          </SectionReveal>
          <div className="flex flex-wrap gap-3">
            {addOns.map((addon) => (
              <span
                key={addon}
                className="px-4 py-2.5 bg-white border border-posh-lavender text-sm font-medium text-posh-dark hover:bg-posh-lavender-light transition-colors"
              >
                {addon}
              </span>
            ))}
          </div>
          <p className="mt-4 text-gray-400 text-sm">
            Pricing for add-ons available upon booking. Free consultations available.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="mb-8">
            <h2 className="text-3xl font-black text-posh-dark mb-2">
              Frequently Asked Questions
            </h2>
          </SectionReveal>
          <SectionReveal>
            <FAQAccordion items={faqs} />
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-posh-purple text-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-4">Ready for Your Blowout?</h2>
          <p className="text-posh-lavender mb-8">
            Book online or call us at 816.974.7674. Walk-ins welcome based on availability.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-posh-purple font-black uppercase tracking-wider hover:bg-posh-lavender transition-colors"
          >
            Book Now
          </a>
        </div>
      </section>
    </>
  );
}
