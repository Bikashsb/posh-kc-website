import type { Metadata } from "next";
import Image from "next/image";
import SectionReveal from "@/components/SectionReveal";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Bachelorette Party Hair & Makeup Kansas City — Posh Party",
  description:
    "The ultimate bachelorette party experience in Kansas City. Hair & makeup for 6, champagne, swag bags, and Power & Light wristbands — $660. Book your Posh Party today.",
};

const BOOKING_URL =
  "https://dashboard.boulevard.io/booking/businesses/3e4b294a-a93f-42ef-887d-613eaf4c9c5c/widget#/visit-type";

const faqs = [
  {
    question: "What exactly is included in the $660 Posh Party package?",
    answer:
      "The $660 package includes hair & makeup for 6 people (updo, dry style, and makeup application), 2 bottles of champagne, swag bags with product samples, Power & Light District wristbands and special venue offers, 10% off retail products, and 20% gratuity.",
  },
  {
    question: "Can we add more people to the party?",
    answer:
      "Yes! Additional guests can be accommodated at individual à la carte pricing rates. Contact us to discuss your group size.",
  },
  {
    question: "Can we add wash services?",
    answer: "Absolutely — hair washing is available as an add-on at $25 per person.",
  },
  {
    question: "Can we add lash services?",
    answer: "Individual lash extensions are available at $15 per person.",
  },
  {
    question: "Does the party package include bridal services?",
    answer:
      "The Posh Party package is separate from bridal services. If you're a bride looking for your full wedding package, please see our Posh Bride page.",
  },
  {
    question: "How do I book a Posh Party?",
    answer:
      "Contact us at info@poshkc.com or call 816.974.7674 to check availability and reserve your date. We recommend booking at least 2–4 weeks in advance for weekend availability.",
  },
];

export default function PoshPartyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[560px] flex items-center overflow-hidden">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/281565676_1865628560302259_4276349832979820465_n.jpg"
          alt="Bachelorette party hair makeup Kansas City"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-posh-purple/90 to-posh-dark/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <div className="max-w-lg">
            <p className="text-posh-lavender font-bold uppercase tracking-widest text-sm mb-4">
              Kansas City Power & Light District
            </p>
            <h1 className="text-5xl font-black text-white mb-6 leading-tight">
              The Ultimate Bachelorette Experience
            </h1>
            <p className="text-gray-200 text-lg mb-4">
              Hair + makeup + champagne + swag + Power & Light wristbands — all for $660.
            </p>
            <p className="text-posh-lavender text-sm mb-8 uppercase tracking-widest font-bold">
              No other venue in Kansas City offers this.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-posh-purple font-black uppercase tracking-wider hover:bg-posh-lavender transition-colors"
            >
              Book Your Posh Party
            </a>
          </div>
        </div>
      </section>

      {/* Package breakdown */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-12">
            <p className="text-posh-purple font-bold uppercase tracking-widest text-sm mb-3">
              Everything Included
            </p>
            <h2 className="text-4xl font-black text-posh-dark">
              Posh Party Package — $660
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              One flat price covers everything for your group of 6. No surprises, no nickel-and-diming —
              just a posh experience from start to finish.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "💇", title: "Hair & Makeup", desc: "For all 6 guests — updo, dry style, and full makeup application included" },
              { icon: "🥂", title: "2 Bottles of Champagne", desc: "Toast to the occasion with bubbly provided for your entire party" },
              { icon: "🎁", title: "Swag Bags", desc: "Product samples and goodies for every guest to take home" },
              { icon: "🎟️", title: "Power & Light Wristbands", desc: "Exclusive venue offers and wristbands for KC's top entertainment district" },
              { icon: "🛍️", title: "10% Product Discount", desc: "Shop our retail products at a discount during your visit" },
              { icon: "✨", title: "20% Gratuity Included", desc: "Gratuity is included — no need to calculate anything after your experience" },
            ].map((item, i) => (
              <SectionReveal key={item.title} delay={(i % 3) as 0 | 1 | 2}>
                <div className="text-center p-6 bg-posh-lavender-light border border-posh-lavender hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-black text-posh-dark mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal className="bg-posh-purple text-white p-8 text-center">
            <p className="text-posh-lavender text-sm uppercase tracking-widest mb-2">Add-Ons Available</p>
            <div className="flex flex-wrap justify-center gap-6 mt-4">
              <div>
                <p className="font-black text-2xl">+$25</p>
                <p className="text-posh-lavender text-sm">per person hair wash</p>
              </div>
              <div>
                <p className="font-black text-2xl">+$15</p>
                <p className="text-posh-lavender text-sm">per person lash extensions</p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-6 bg-posh-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/298982791_1936418589889922_8600208534332243872_n.jpg",
              "https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/306000079_516337510491447_6202244186304123306_n.jpg",
              "https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/281565676_1865628560302259_4276349832979820465_n.jpg",
              "https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/289758770_1895027984028983_6068103299200096023_n-1.jpg",
            ].map((img, i) => (
              <div key={i} className="relative h-56 overflow-hidden">
                <Image src={img} alt={`Posh Party ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="mb-8">
            <h2 className="text-3xl font-black text-posh-dark">Posh Party FAQs</h2>
          </SectionReveal>
          <SectionReveal>
            <FAQAccordion items={faqs} />
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-posh-purple text-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-4">Book Your Posh Party</h2>
          <p className="text-posh-lavender mb-8">
            Email info@poshkc.com or call 816.974.7674 to check availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@poshkc.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-posh-purple font-black uppercase tracking-wider hover:bg-posh-lavender transition-colors"
            >
              Email Us
            </a>
            <a
              href="tel:+18169747674"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-black uppercase tracking-wider hover:bg-white hover:text-posh-purple transition-colors"
            >
              Call 816.974.7674
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
