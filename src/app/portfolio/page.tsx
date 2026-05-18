import type { Metadata } from "next";
import Image from "next/image";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Portfolio — Posh KC Hair & Makeup Kansas City",
  description:
    "Browse Posh KC's portfolio of blowouts, updos, bridal hair, and makeup transformations in Kansas City.",
};

const BOOKING_URL =
  "https://dashboard.boulevard.io/booking/businesses/3e4b294a-a93f-42ef-887d-613eaf4c9c5c/widget#/visit-type";

const images = [
  { src: "https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/278939437_1847152505483198_2104908137125546696_n.jpg", alt: "Bridal updo" },
  { src: "https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/195982932_1619296511602133_6039444116842447037_n.jpg", alt: "Bridal makeup" },
  { src: "https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/298982791_1936418589889922_8600208534332243872_n.jpg", alt: "Event styling" },
  { src: "https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/306000079_516337510491447_6202244186304123306_n.jpg", alt: "Blowout styling" },
  { src: "https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/289758770_1895027984028983_6068103299200096023_n-1.jpg", alt: "Hair transformation" },
  { src: "https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/269736242_1759777000887416_6949414595763289026_n.jpg", alt: "Hollywood waves" },
  { src: "https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/281565676_1865628560302259_4276349832979820465_n.jpg", alt: "Party glam" },
  { src: "https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/277777882_1834121253452990_9203444710926996712_n-1.jpg", alt: "Makeup artistry" },
  { src: "https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/277750432_1833366923528423_3193626837039814556_n.jpg", alt: "Hair styling" },
  { src: "https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/244761626_1715745961957187_1588629831128628003_n.jpg", alt: "Blowout" },
  { src: "https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/b3eeb763-fa93-4ad5-af54-49adc6aca6b2/306728559_515641853894346_4189330445861076012_n.jpg", alt: "Makeup glam" },
  { src: "https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/7e347dac-98cf-4756-92a7-0c98d4ad4039/the_gallery_2022%28298of522%29.jpg", alt: "Studio gallery" },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-posh-purple text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-black mb-4">Portfolio</h1>
          <p className="text-posh-lavender text-lg max-w-xl mx-auto">
            Real work. Real clients. Real Kansas City transformations.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
            {images.map((img, i) => (
              <SectionReveal key={i} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
                <div className="relative overflow-hidden break-inside-avoid group">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={500}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-posh-lavender-light text-center">
        <div className="max-w-xl mx-auto px-4">
          <SectionReveal>
            <h2 className="text-3xl font-black text-posh-dark mb-4">
              Ready for Your Transformation?
            </h2>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-posh-purple text-white font-black uppercase tracking-wider hover:bg-posh-purple-dark transition-colors"
            >
              Book Now
            </a>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
