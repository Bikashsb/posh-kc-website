import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

export const metadata: Metadata = {
  title: "Posh KC Blow Dry Bar | Kansas City",
  description:
    "Kansas City's premier blow dry bar in the Power & Light District. Professional blowouts, makeup, wedding styling, memberships, and bachelorette party packages.",
};

const BOOKING_URL =
  "https://dashboard.boulevard.io/booking/businesses/3e4b294a-a93f-42ef-887d-613eaf4c9c5c/widget#/visit-type";

const services = [
  {
    title: "Blowouts & Styling",
    desc: "From wash & style to Hollywood Waves — look polished for any occasion. Starting at $35.",
    href: "/services",
    img: "https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/244761626_1715745961957187_1588629831128628003_n.jpg",
  },
  {
    title: "Makeup Services",
    desc: "Full glam makeovers, instruction sessions, and add-on lash applications. Starting at $65.",
    href: "/services",
    img: "https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/b3eeb763-fa93-4ad5-af54-49adc6aca6b2/306728559_515641853894346_4189330445861076012_n.jpg",
  },
  {
    title: "Posh Bride",
    desc: "Trial, rehearsal & wedding day hair and makeup. Your complete bridal journey with us.",
    href: "/posh-bride",
    img: "https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/278939437_1847152505483198_2104908137125546696_n.jpg",
  },
  {
    title: "Posh Party",
    desc: "Hair & makeup for 6 + champagne + swag bags + Power & Light wristbands. $660 package.",
    href: "/posh-party",
    img: "https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/298982791_1936418589889922_8600208534332243872_n.jpg",
  },
];

const usps = [
  {
    title: "10+ Years in Kansas City",
    desc: "Founded April 2015 by Ashley Starke. A decade of beauty expertise in the heart of KC.",
  },
  {
    title: "No Cuts, No Color — Just Posh Beauty",
    desc: "We specialize. Blowouts, styling, and makeup done better than anyone else in Kansas City.",
  },
  {
    title: "Downtown Power & Light Location",
    desc: "1211 Main St. — steps from KC's best venues. Look stunning before a night out or big event.",
  },
  {
    title: "Wedding Specialists",
    desc: "Featured on The Knot. Full bridal journey from trial to wedding day for you and your party.",
  },
  {
    title: "Membership Savings",
    desc: "Monthly blowout plans from $100/mo. Unlimited-style visits with exclusive member discounts.",
  },
  {
    title: "Featured in the Press",
    desc: "Recognized by The Knot and multiple Kansas City publications as the city's premier blow dry bar.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/7e347dac-98cf-4756-92a7-0c98d4ad4039/the_gallery_2022%28298of522%29.jpg"
          alt="Posh KC blow dry bar Kansas City"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-posh-dark/80 via-posh-dark/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <div className="max-w-xl">
            <p className="animate-fade-in text-posh-lavender uppercase tracking-widest text-sm font-bold mb-4">
              Kansas City Power & Light District
            </p>
            <h1 className="animate-fade-up text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Kansas City&apos;s Premier Blow Dry Bar
            </h1>
            <p className="animate-fade-up-delay-1 text-gray-200 text-lg leading-relaxed mb-8 max-w-md">
              No cuts. No color. Just posh beauty — everyday to special occasion and
              wedding styling since 2015.
            </p>
            <div className="animate-fade-up-delay-2 flex flex-col sm:flex-row gap-3">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-posh-purple text-white font-bold uppercase tracking-wider hover:bg-posh-purple-dark transition-colors"
              >
                Book Now
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-posh-dark transition-colors"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-posh-purple text-white py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: "2015", label: "Established" },
              { num: "10+", label: "Years of Excellence" },
              { num: "1211", label: "Main St — Downtown KC" },
              { num: "∞", label: "Posh Transformations" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-black">{stat.num}</p>
                <p className="text-posh-lavender text-xs uppercase tracking-wider mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-12">
            <p className="text-posh-purple font-bold uppercase tracking-widest text-sm mb-3">
              What We Do
            </p>
            <h2 className="text-4xl font-black text-posh-dark">
              Blow Dry Bar Services
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Specializing in blowouts, makeup, weddings, and events — nothing else.
              When you only do one thing, you do it better than anyone.
            </p>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => (
              <SectionReveal key={svc.title} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
                <Link
                  href={svc.href}
                  className="group block overflow-hidden bg-white border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={svc.img}
                      alt={svc.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-black text-posh-dark mb-2 uppercase tracking-wide text-sm">
                      {svc.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{svc.desc}</p>
                    <span className="inline-block mt-3 text-posh-purple text-xs font-bold uppercase tracking-wider">
                      Learn More →
                    </span>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
          <SectionReveal className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-posh-purple text-posh-purple font-bold uppercase tracking-wider hover:bg-posh-purple hover:text-white transition-colors"
            >
              See Full Service Menu
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* Hero image 2 + Why Posh KC */}
      <section className="bg-posh-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <div className="relative h-[500px] overflow-hidden">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/f1d4c812-e0fe-4445-bb03-18138ae905bb/244761626_1715745961957187_1588629831128628003_n.jpg"
                  alt="Posh KC styling"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-6 left-6 bg-posh-purple text-white px-4 py-3">
                  <p className="text-xs uppercase tracking-widest text-posh-lavender">Est.</p>
                  <p className="text-3xl font-black">2015</p>
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={1}>
              <p className="text-posh-purple font-bold uppercase tracking-widest text-sm mb-4">
                Why Choose Posh KC
              </p>
              <h2 className="text-4xl font-black text-posh-dark mb-8 leading-tight">
                Kansas City&apos;s Only Dedicated Blow Dry Bar
              </h2>
              <div className="grid grid-cols-1 gap-5">
                {usps.slice(0, 4).map((usp) => (
                  <div key={usp.title} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-posh-purple mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-posh-dark mb-1">{usp.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{usp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center px-8 py-4 bg-posh-purple text-white font-bold uppercase tracking-wider hover:bg-posh-purple-dark transition-colors"
              >
                Book Your Visit
              </a>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Memberships teaser */}
      <section className="py-20 bg-posh-purple text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <p className="text-posh-lavender font-bold uppercase tracking-widest text-sm mb-4">
                Members Save More
              </p>
              <h2 className="text-4xl font-black mb-6 leading-tight">
                Monthly Blowout Memberships — Starting at $100
              </h2>
              <p className="text-posh-lavender leading-relaxed mb-8">
                Like ClassPass for your hair. Choose the plan that fits your lifestyle
                and save big every month. All members get 10% off retail products.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { name: "The Chic", price: "$100/mo", visits: "2 visits" },
                  { name: "The Classy", price: "$200/mo", visits: "4 visits" },
                  { name: "The Luxe", price: "$150/mo", visits: "2 Luxe visits" },
                  { name: "The Socialite", price: "$400/mo", visits: "8 visits" },
                ].map((m) => (
                  <div key={m.name} className="border border-posh-purple-light p-4">
                    <p className="font-black text-sm">{m.name}</p>
                    <p className="text-posh-lavender text-xs mt-1">{m.visits}</p>
                    <p className="text-xl font-black mt-2">{m.price}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/memberships"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-posh-purple transition-colors"
              >
                View All Memberships
              </Link>
            </SectionReveal>
            <SectionReveal delay={1}>
              <div className="relative h-[450px]">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/269736242_1759777000887416_6949414595763289026_n.jpg"
                  alt="Posh KC membership"
                  fill
                  className="object-cover"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Posh Party teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <div className="relative h-[450px] overflow-hidden">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/281565676_1865628560302259_4276349832979820465_n.jpg"
                  alt="Posh Party bachelorette hair KC"
                  fill
                  className="object-cover"
                />
              </div>
            </SectionReveal>
            <SectionReveal delay={1}>
              <p className="text-posh-purple font-bold uppercase tracking-widest text-sm mb-4">
                Group Events
              </p>
              <h2 className="text-4xl font-black text-posh-dark mb-6 leading-tight">
                The Ultimate Bachelorette Experience in KC
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Hair + makeup for 6 people, 2 bottles of champagne, swag bags, and exclusive
                Power & Light District wristbands — all for $660. No other venue in Kansas City
                offers this experience.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Hair & Makeup for 6 guests",
                  "2 bottles of champagne",
                  "Swag bags with product samples",
                  "Power & Light District wristbands & offers",
                  "10% retail product discount",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-posh-purple flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4">
                <Link
                  href="/posh-party"
                  className="inline-flex items-center justify-center px-8 py-4 bg-posh-purple text-white font-bold uppercase tracking-wider hover:bg-posh-purple-dark transition-colors"
                >
                  Learn More — $660
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-posh-lavender-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-12">
            <p className="text-posh-purple font-bold uppercase tracking-widest text-sm mb-3">
              Client Love
            </p>
            <h2 className="text-4xl font-black text-posh-dark">
              What Kansas City Is Saying
            </h2>
          </SectionReveal>
          <SectionReveal>
            <TestimonialsCarousel />
          </SectionReveal>
        </div>
      </section>

      {/* Press / Featured */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs uppercase tracking-widest text-gray-400 mb-8">
            As Seen In
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/64cdb5ef-2e1a-4fdb-9b69-8dde8014ce0c/The-Knot-Logo-01.png"
              alt="The Knot"
              width={120}
              height={40}
              className="object-contain h-10 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            />
            <Image
              src="https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/54b3796e-3673-4147-b117-009fe343e821/Screen+Shot+2022-09-21+at+12.43.53+PM.png"
              alt="Press feature"
              width={120}
              height={40}
              className="object-contain h-10 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            />
            <Image
              src="https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/7d374641-c806-4111-8d34-5126960dcbf4/Unknown.png"
              alt="Press feature"
              width={120}
              height={40}
              className="object-contain h-10 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-posh-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <SectionReveal>
            <h2 className="text-4xl font-black mb-4">Ready to Look Posh?</h2>
            <p className="text-gray-400 mb-8 text-lg">
              Book your blowout, makeup, or event at 1211 Main St, Kansas City.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 bg-posh-purple text-white text-lg font-black uppercase tracking-wider hover:bg-posh-purple-dark transition-colors"
            >
              Book Now — It&apos;s Free to Schedule
            </a>
            <p className="mt-4 text-gray-500 text-sm">
              Or call{" "}
              <a href="tel:+18169747674" className="text-posh-lavender hover:text-white">
                816.974.7674
              </a>
            </p>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
