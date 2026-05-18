import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "About Posh KC — Kansas City Blow Dry Bar",
  description:
    "Posh KC was founded in April 2015 by Ashley Starke in the Kansas City Power & Light District. Learn about our story, mission, and team of beauty specialists.",
};

const BOOKING_URL =
  "https://dashboard.boulevard.io/booking/businesses/3e4b294a-a93f-42ef-887d-613eaf4c9c5c/widget#/visit-type";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/7e347dac-98cf-4756-92a7-0c98d4ad4039/the_gallery_2022%28298of522%29.jpg"
          alt="Posh KC blow dry bar"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-posh-dark/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white pt-20">
          <p className="text-posh-lavender font-bold uppercase tracking-widest text-sm mb-4">
            Our Story
          </p>
          <h1 className="text-5xl font-black mb-4">About Posh KC</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Kansas City&apos;s original blow dry bar — founded on the belief that everyone deserves to
            look and feel posh every single day.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <p className="text-posh-purple font-bold uppercase tracking-widest text-sm mb-4">
                Founded April 2015
              </p>
              <h2 className="text-4xl font-black text-posh-dark mb-6 leading-tight">
                One Idea. One Mission.
                <br />
                Pure Posh Beauty.
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Posh KC was founded by <strong className="text-posh-dark">Ashley Starke</strong> in
                  April 2015 with a simple but powerful concept: a salon that does one thing and
                  does it better than anyone else in Kansas City.
                </p>
                <p>
                  No cuts. No color. Just exceptional blowouts, styling, and makeup — every time,
                  for every client, for every occasion. Whether you&apos;re heading into the office,
                  attending a wedding, or just want to feel amazing on a Tuesday, Posh KC is
                  your place.
                </p>
                <p>
                  Located in the heart of Kansas City&apos;s Power & Light District at 1211 Main St.,
                  we&apos;ve become the go-to destination for KC women who want to look polished without
                  the full salon commitment.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={1}>
              <div className="relative h-[500px]">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/f1d4c812-e0fe-4445-bb03-18138ae905bb/244761626_1715745961957187_1588629831128628003_n.jpg"
                  alt="Posh KC story"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-6 left-6 bg-posh-purple text-white px-5 py-4">
                  <p className="text-posh-lavender text-xs uppercase tracking-widest">Serving KC Since</p>
                  <p className="text-4xl font-black">2015</p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-posh-lavender-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-12">
            <h2 className="text-3xl font-black text-posh-dark">What We Stand For</h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "✦", title: "Specialization", desc: "We only do blowouts, styling, and makeup. That focus means every service is done at the highest possible level." },
              { icon: "✦", title: "Community", desc: "We're rooted in Kansas City. Power & Light is our neighborhood, and our clients are our community." },
              { icon: "✦", title: "Accessibility", desc: "Posh beauty shouldn't be reserved for special occasions. Our memberships and pricing make it a regular part of your routine." },
            ].map((v, i) => (
              <SectionReveal key={v.title} delay={(i % 3) as 0 | 1 | 2}>
                <div className="text-center">
                  <div className="text-posh-purple text-2xl mb-4">{v.icon}</div>
                  <h3 className="font-black text-posh-dark text-xl mb-3">{v.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{v.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <p className="text-gray-400 text-xs uppercase tracking-widest mb-8">As Seen In</p>
            <div className="flex flex-wrap items-center justify-center gap-12">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/64cdb5ef-2e1a-4fdb-9b69-8dde8014ce0c/The-Knot-Logo-01.png"
                alt="The Knot"
                width={130}
                height={44}
                className="h-11 w-auto object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
              />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-posh-dark text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <h2 className="text-3xl font-black mb-6">Find Us in the Power & Light District</h2>
              <div className="space-y-4 text-gray-300">
                <div>
                  <p className="font-bold text-white">Address</p>
                  <p>1211 Main St., Kansas City, MO 64106</p>
                  <p className="text-sm text-gray-500">Power & Light Entertainment District, Downtown KC</p>
                </div>
                <div>
                  <p className="font-bold text-white">Phone</p>
                  <a href="tel:+18169747674" className="hover:text-posh-lavender transition-colors">816.974.7674</a>
                </div>
                <div>
                  <p className="font-bold text-white">Email</p>
                  <a href="mailto:info@poshkc.com" className="hover:text-posh-lavender transition-colors">info@poshkc.com</a>
                </div>
              </div>
              <div className="mt-8 flex gap-4">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-posh-purple text-white font-bold uppercase tracking-wider text-sm hover:bg-posh-purple-dark transition-colors"
                >
                  Book Now
                </a>
                <Link
                  href="/contact"
                  className="px-6 py-3 border border-gray-600 text-white font-bold uppercase tracking-wider text-sm hover:border-white transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </SectionReveal>
            <SectionReveal delay={1}>
              <div className="relative h-[350px]">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/f1d4c812-e0fe-4445-bb03-18138ae905bb/244761626_1715745961957187_1588629831128628003_n.jpg"
                  alt="Posh KC location"
                  fill
                  className="object-cover"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </>
  );
}
