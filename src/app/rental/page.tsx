import type { Metadata } from "next";
import Image from "next/image";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Private Beauty Studio Rental Kansas City — Posh KC",
  description:
    "Rent the Posh KC space for private events, photo shoots, corporate events, or bridal parties. Up to 4 hours for $2,500. Downtown Kansas City Power & Light District.",
};

export default function RentalPage() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/7e347dac-98cf-4756-92a7-0c98d4ad4039/the_gallery_2022%28298of522%29.jpg"
          alt="Posh KC space rental Kansas City"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-posh-dark/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <div className="max-w-lg">
            <p className="text-posh-lavender font-bold uppercase tracking-widest text-sm mb-4">
              Private Venue
            </p>
            <h1 className="text-5xl font-black text-white mb-6">Space Rental</h1>
            <p className="text-gray-200 text-lg mb-8">
              Reserve our entire studio exclusively for your event — bridal party, bachelorette,
              corporate, or photo shoot. Downtown Kansas City&apos;s most unique private venue.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <SectionReveal>
              <div className="inline-block bg-posh-purple text-white px-6 py-3 mb-6">
                <span className="text-4xl font-black">$2,500</span>
                <span className="text-posh-lavender ml-2 text-sm">flat rate</span>
              </div>
              <h2 className="text-3xl font-black text-posh-dark mb-6">Private Studio Rental</h2>
              <div className="space-y-4">
                {[
                  { h: "Up to 4 Hours", p: "Exclusive private use of the entire Posh KC studio." },
                  { h: "Mimosas & Light Brunch", p: "Included to set the mood for your event." },
                  { h: "Beauty Services Available", p: "Up to 5 guests can receive à la carte hair & makeup services at individual pricing." },
                  { h: "10% Retail Discount", p: "Shop our full product selection at a discount during your rental." },
                  { h: "20% Gratuity Included", p: "No need to calculate anything — gratuity is already included." },
                ].map((item) => (
                  <div key={item.h} className="flex gap-4 p-4 border border-gray-100">
                    <span className="text-posh-purple flex-shrink-0 font-black text-lg">✓</span>
                    <div>
                      <p className="font-bold text-posh-dark">{item.h}</p>
                      <p className="text-gray-500 text-sm mt-1">{item.p}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <p className="text-sm text-gray-500 mb-4">
                  To inquire about availability and book your rental:
                </p>
                <div className="flex gap-4">
                  <a
                    href="mailto:info@poshkc.com"
                    className="flex-1 text-center py-3.5 bg-posh-purple text-white font-bold uppercase tracking-wider text-sm hover:bg-posh-purple-dark transition-colors"
                  >
                    Email Us
                  </a>
                  <a
                    href="tel:+18169747674"
                    className="flex-1 text-center py-3.5 border-2 border-posh-purple text-posh-purple font-bold uppercase tracking-wider text-sm hover:bg-posh-purple hover:text-white transition-colors"
                  >
                    816.974.7674
                  </a>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={1}>
              <h3 className="font-black text-posh-dark text-xl mb-6">
                Perfect For
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "Bridal Parties",
                  "Bachelorette Events",
                  "Corporate Gatherings",
                  "Birthday Celebrations",
                  "Photo & Film Shoots",
                  "Brand Activations",
                ].map((use) => (
                  <div key={use} className="p-4 bg-posh-lavender-light text-center">
                    <p className="font-bold text-posh-dark text-sm">{use}</p>
                  </div>
                ))}
              </div>
              <div className="relative h-[300px]">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/b3eeb763-fa93-4ad5-af54-49adc6aca6b2/306728559_515641853894346_4189330445861076012_n.jpg"
                  alt="Posh KC studio space"
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
