import type { Metadata } from "next";
import Image from "next/image";
import SectionReveal from "@/components/SectionReveal";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Wedding Hair & Makeup Kansas City — Posh Bride",
  description:
    "Kansas City wedding hair and makeup specialists. Posh Bride package includes trial, rehearsal & wedding day for $650. Bridal party pricing available. Featured on The Knot.",
};

const BOOKING_URL =
  "https://dashboard.boulevard.io/booking/businesses/3e4b294a-a93f-42ef-887d-613eaf4c9c5c/widget#/visit-type";

const faqs = [
  {
    question: "What's included in the Posh Bride package?",
    answer:
      "The $650 Posh Bride package includes your trial hair & makeup session, rehearsal hair & makeup, and full wedding day hair & makeup — plus 10% off all retail products.",
  },
  {
    question: "Do you offer on-location wedding services?",
    answer:
      "Yes! We offer both in-studio and on-location services for weddings. Contact us at info@poshkc.com to discuss your wedding day logistics.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least 6–12 months in advance for wedding dates, especially for popular spring and fall weekends. Submit your inquiry as soon as possible to secure your date.",
  },
  {
    question: "Can you accommodate my entire bridal party?",
    answer:
      "Absolutely. Our team of specialists can handle large bridal parties. Bridal party pricing is per person with separate rates for hair and makeup.",
  },
  {
    question: "Are you listed on The Knot?",
    answer:
      "Yes — Posh KC is a featured wedding vendor on The Knot. We have a proven track record of making brides and bridal parties look stunning on their big day.",
  },
];

export default function PoshBridePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Wedding Hair & Makeup Kansas City",
            provider: { "@type": "HairSalon", name: "Posh KC Blow Dry Bar" },
            description: "Complete bridal hair and makeup services — trial, rehearsal, and wedding day.",
            offers: { "@type": "Offer", price: "650", priceCurrency: "USD" },
          }),
        }}
      />

      {/* Hero */}
      <section className="relative h-[85vh] min-h-[560px] flex items-center overflow-hidden">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/b24171cb-d524-41f5-b1c2-d7369c353c3c/278939437_1847152505483198_2104908137125546696_n.jpg"
          alt="Wedding hair and makeup Kansas City"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-posh-dark/75 to-posh-dark/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <div className="max-w-lg">
            <p className="text-posh-lavender font-bold uppercase tracking-widest text-sm mb-4">
              Featured on The Knot
            </p>
            <h1 className="text-5xl font-black text-white mb-6 leading-tight">
              Wedding Hair & Makeup in Kansas City
            </h1>
            <p className="text-gray-200 text-lg mb-8 leading-relaxed">
              Your complete bridal journey — trial, rehearsal, and wedding day — with Kansas City&apos;s
              most trusted blow dry bar since 2015.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-posh-purple text-white font-black uppercase tracking-wider hover:bg-posh-purple-dark transition-colors"
            >
              Get on the List
            </a>
          </div>
        </div>
      </section>

      {/* Posh Bride Package */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <p className="text-posh-purple font-bold uppercase tracking-widest text-sm mb-4">
                The Complete Package
              </p>
              <h2 className="text-4xl font-black text-posh-dark mb-6 leading-tight">
                Posh Bride Package — $650
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Everything you need from engagement to &quot;I do.&quot; One package, no surprises —
                your entire bridal beauty journey handled by our expert team.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { label: "Trial Session", desc: "Full hair & makeup trial to perfect your look before the big day" },
                  { label: "Rehearsal Day", desc: "Complete hair & makeup for your rehearsal dinner" },
                  { label: "Wedding Day", desc: "Full bridal hair & makeup on your wedding day" },
                  { label: "10% Product Discount", desc: "Save on any retail products purchased during your journey" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 p-4 bg-posh-lavender-light">
                    <span className="text-posh-purple font-black text-lg mt-0.5">✓</span>
                    <div>
                      <p className="font-bold text-posh-dark">{item.label}</p>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-posh-purple text-white font-black uppercase tracking-wider hover:bg-posh-purple-dark transition-colors"
              >
                Inquire About Your Date
              </a>
            </SectionReveal>
            <SectionReveal delay={1}>
              <div className="relative h-[500px]">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/ccdda57e-0ff7-4050-ac2b-68f277ddad4c/195982932_1619296511602133_6039444116842447037_n.jpg"
                  alt="Bridal hair and makeup"
                  fill
                  className="object-cover"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* A La Carte Pricing */}
      <section className="py-20 bg-posh-gray">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="mb-10 text-center">
            <h2 className="text-3xl font-black text-posh-dark mb-2">
              A La Carte Bridal Pricing
            </h2>
            <p className="text-gray-500">
              Individual services for the bride, available in-studio or on-location.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <SectionReveal>
              <div className="bg-white p-6">
                <h3 className="font-black text-posh-dark uppercase tracking-wide mb-4 pb-2 border-b border-posh-lavender">
                  Bride — Individual Services
                </h3>
                <div className="space-y-3">
                  {[
                    { s: "Updo", p: "$115" },
                    { s: "Dry Style (hot tools)", p: "$90" },
                    { s: "Hollywood Waves", p: "$125" },
                    { s: "Makeup with Lashes", p: "$150" },
                  ].map((row) => (
                    <div key={row.s} className="flex justify-between items-center py-2 border-b border-gray-50">
                      <span className="text-posh-dark">{row.s}</span>
                      <span className="font-black text-posh-purple">{row.p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={1}>
              <div className="bg-white p-6">
                <h3 className="font-black text-posh-dark uppercase tracking-wide mb-4 pb-2 border-b border-posh-lavender">
                  Bridal Party Pricing
                </h3>
                <div className="space-y-3">
                  {[
                    { s: "Updo", p: "$100" },
                    { s: "Dry Style (hot tools)", p: "$75" },
                    { s: "Hollywood Waves", p: "$110" },
                    { s: "Children's Hair (10 & under)", p: "$50" },
                    { s: "Makeup with Lashes", p: "$125" },
                  ].map((row) => (
                    <div key={row.s} className="flex justify-between items-center py-2 border-b border-gray-50">
                      <span className="text-posh-dark">{row.s}</span>
                      <span className="font-black text-posh-purple">{row.p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-12">
            <h2 className="text-3xl font-black text-posh-dark">Your Bridal Journey</h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { n: "1", title: "Inquiry", desc: "Submit your inquiry and get on the list. We'll reach out with next steps." },
              { n: "2", title: "Trial Session", desc: "Try your full wedding look — hair & makeup — before the big day." },
              { n: "3", title: "Rehearsal Day", desc: "Look stunning at your rehearsal dinner with full glam." },
              { n: "4", title: "Wedding Day", desc: "We make sure you look absolutely perfect when it counts most." },
            ].map((step) => (
              <SectionReveal key={step.n} delay={(Number(step.n) - 1) as 0 | 1 | 2 | 3}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-posh-purple text-white text-xl font-black flex items-center justify-center mx-auto mb-4">
                    {step.n}
                  </div>
                  <h3 className="font-black text-posh-dark mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-6 bg-posh-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/b24171cb-d524-41f5-b1c2-d7369c353c3c/278939437_1847152505483198_2104908137125546696_n.jpg",
              "https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/ccdda57e-0ff7-4050-ac2b-68f277ddad4c/195982932_1619296511602133_6039444116842447037_n.jpg",
              "https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/497b23a6-57f9-4485-8748-887515c15a6d/277750432_1833366923528423_3193624877039814556_n.jpg",
            ].map((img, i) => (
              <div key={i} className="relative h-64 overflow-hidden">
                <Image src={img} alt={`Bridal work ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="mb-8">
            <h2 className="text-3xl font-black text-posh-dark">Bridal FAQs</h2>
          </SectionReveal>
          <SectionReveal>
            <FAQAccordion items={faqs} />
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-posh-dark text-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-4">Reserve Your Wedding Date</h2>
          <p className="text-gray-400 mb-8">
            Dates fill quickly — especially spring and fall. Submit your inquiry today.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-posh-purple text-white font-black uppercase tracking-wider hover:bg-posh-purple-dark transition-colors"
          >
            Get on the List
          </a>
        </div>
      </section>
    </>
  );
}
