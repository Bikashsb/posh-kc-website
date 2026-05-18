import type { Metadata } from "next";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Prepaid Blowout Packages Kansas City — Posh KC",
  description:
    "Save with prepaid blowout and indulge packages at Posh KC Kansas City. 4-pack, 8-pack, 12-pack options. The more you buy, the more you save.",
};

const BOOKING_URL =
  "https://dashboard.boulevard.io/booking/businesses/3e4b294a-a93f-42ef-887d-613eaf4c9c5c/widget#/visit-type";

export default function PackagesPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-posh-dark text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-black mb-4">Prepaid Packages</h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Stock up and save. Buy blowouts and indulge upgrades in advance at discounted rates.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="mb-12">
            <h2 className="text-3xl font-black text-posh-dark mb-2">Posh Packs</h2>
            <p className="text-gray-500">Blowouts or makeup applications — use however you like.</p>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { pack: "4-Pack", price: "$220", savings: "Save $20", visits: "4 visits" },
              { pack: "8-Pack", price: "$440", savings: "Save $40", visits: "8 visits", popular: true },
              { pack: "12-Pack", price: "$660", savings: "Save $80", visits: "12 visits" },
            ].map((p) => (
              <SectionReveal key={p.pack}>
                <div className={`relative border-2 text-center p-8 ${p.popular ? "border-posh-purple" : "border-gray-200"}`}>
                  {p.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-posh-purple text-white text-xs font-black px-4 py-1 uppercase tracking-wider">
                        Best Value
                      </span>
                    </div>
                  )}
                  <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">{p.visits}</p>
                  <p className="text-5xl font-black text-posh-dark mb-1">{p.price}</p>
                  <p className="text-posh-purple font-bold text-sm mb-6">{p.savings}</p>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block py-3 font-bold uppercase tracking-wider text-sm transition-colors ${
                      p.popular
                        ? "bg-posh-purple text-white hover:bg-posh-purple-dark"
                        : "border-2 border-posh-purple text-posh-purple hover:bg-posh-purple hover:text-white"
                    }`}
                  >
                    Buy {p.pack}
                  </a>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal className="mb-12">
            <h2 className="text-3xl font-black text-posh-dark mb-2">Indulge Packs</h2>
            <p className="text-gray-500">Prepaid add-on upgrades — scalp massage, lashes, conditioning, and more.</p>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { pack: "5-Pack", price: "$40", savings: "Save $10", desc: "5 indulge add-ons" },
              { pack: "10-Pack", price: "$75", savings: "Save $25", desc: "10 indulge add-ons" },
            ].map((p) => (
              <SectionReveal key={p.pack}>
                <div className="border-2 border-gray-200 p-8 text-center hover:border-posh-purple transition-colors group">
                  <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">{p.desc}</p>
                  <p className="text-5xl font-black text-posh-dark mb-1">{p.price}</p>
                  <p className="text-posh-purple font-bold text-sm mb-6">{p.savings}</p>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-3 border-2 border-posh-purple text-posh-purple font-bold uppercase tracking-wider text-sm hover:bg-posh-purple hover:text-white transition-colors"
                  >
                    Buy {p.pack}
                  </a>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
