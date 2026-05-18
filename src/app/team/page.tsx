import type { Metadata } from "next";
import Image from "next/image";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Meet the Posh KC Team — Kansas City Hair & Makeup Artists",
  description:
    "Meet the talented team of hair stylists and makeup artists at Posh KC Blow Dry Bar in Kansas City. Led by manager Rachel McMillan.",
};

const BOOKING_URL =
  "https://dashboard.boulevard.io/booking/businesses/3e4b294a-a93f-42ef-887d-613eaf4c9c5c/widget#/visit-type";

const BASE = "https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22";

const team = [
  { name: "Rachel McMillan", role: "Manager / Lead Makeup Artist", highlight: "Self-taught with a theater & stage makeup background. Specializes in colorful glam, bold lips, and bridal work.", img: `${BASE}/44470a83-ded5-46b0-b042-e838eee33007/KANSAS-CITY-BRANDING-PHOTOGRAPHER%28222of334%29.jpg` },
  { name: "Lauren Schnoor", role: "Hair & Makeup Artist", highlight: "Expert in both hair and full glam makeup for any occasion.", img: `${BASE}/bd47e645-ca46-4a3a-b88d-327c31d68a60/unnamed-1.jpg` },
  { name: "Kianna Evans", role: "Hair Stylist", highlight: "Specializes in blowouts, updos, and Hollywood waves.", img: `${BASE}/900ec006-494e-4362-b00b-87cd6eb88c3d/unnamed-5.jpg` },
  { name: "Kaitlyn Epperson", role: "Makeup Artist", highlight: "Dedicated to perfecting flawless, long-lasting makeup looks.", img: `${BASE}/4218c41e-5d85-4c56-aa5a-268d9458f114/unnamed.jpg` },
  { name: "Summer", role: "Hair + Makeup Artist", highlight: "Versatile artist skilled in both hair styling and full makeup application.", img: `${BASE}/5ceff98e-2042-4370-aead-ff4ab44d8502/unnamed-3.jpg` },
  { name: "Taylor", role: "Makeup Artist", highlight: "Stage makeup background — creates stunning bronzey soft glam looks.", img: `${BASE}/17c21919-be4e-4363-a02a-f9decc7230bf/KANSAS-CITY-BRANDING-PHOTOGRAPHER%28195of334%29.jpg` },
  { name: "Lori Barnes", role: "Makeup Artist", highlight: "Classic, timeless makeup looks for every skin tone and occasion.", img: `${BASE}/ccbe679c-9fb4-410c-91c7-9be5c2841eda/unnamed-6.jpg` },
  { name: "Melody McKee", role: "Makeup Artist", highlight: "Detail-oriented artist known for perfecting every finish.", img: `${BASE}/5b3dca14-2de1-4ed5-83d3-5539f6abb3b7/unnamed-2.jpg` },
  { name: "Lydia Small", role: "Makeup Artist", highlight: "Fresh, natural looks and editorial-inspired transformations.", img: `${BASE}/3ec68a3b-fb56-420b-9150-8ca504fdb513/unnamed-4.jpg` },
  { name: "Shiloh Hawthorn", role: "Front Desk & Makeup Artist", highlight: "Your first smile at Posh KC — also a skilled makeup artist.", img: `${BASE}/6dd6403d-1523-4bfe-a3b1-4c64cf767363/tempImageKZDY2e.jpg` },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-posh-purple text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-posh-lavender font-bold uppercase tracking-widest text-sm mb-4">
            Our Specialists
          </p>
          <h1 className="text-5xl font-black mb-4">Meet the Team</h1>
          <p className="text-posh-lavender text-lg max-w-xl mx-auto">
            10 talented artists dedicated to making you look and feel posh — every single visit.
          </p>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <SectionReveal key={member.name} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
                <div className="group overflow-hidden bg-white border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={member.img}
                      alt={`${member.name} — ${member.role}`}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-posh-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="text-white text-xs leading-relaxed">{member.highlight}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-black text-posh-dark">{member.name}</h3>
                    <p className="text-posh-purple text-xs font-bold uppercase tracking-wider mt-1">
                      {member.role}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-posh-lavender-light text-center">
        <div className="max-w-xl mx-auto px-4">
          <SectionReveal>
            <h2 className="text-3xl font-black text-posh-dark mb-4">
              Ready to Meet Your Artist?
            </h2>
            <p className="text-gray-500 mb-8">
              Book online and we&apos;ll pair you with the perfect stylist for your service.
            </p>
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
