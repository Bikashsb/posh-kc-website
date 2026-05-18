import type { Metadata } from "next";
import Image from "next/image";
import SectionReveal from "@/components/SectionReveal";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Blowout Bar Memberships Kansas City",
  description:
    "Monthly blowout memberships at Posh KC. Starting at $100/mo for 2 blowouts. Save on every visit plus 10% off retail. Kansas City's best blow dry bar membership.",
};

const BOOKING_URL =
  "https://dashboard.boulevard.io/booking/businesses/3e4b294a-a93f-42ef-887d-613eaf4c9c5c/widget#/visit-type";

const tiers = [
  {
    name: "The Chic",
    price: "$100",
    period: "/month",
    value: "Value $120/mo",
    visits: "2 visits/month",
    color: false,
    features: [
      "2 blowouts or makeup applications per month",
      "1 Indulge upgrade included",
      "10% off all retail products",
      "Member priority booking",
    ],
  },
  {
    name: "The Luxe",
    price: "$150",
    period: "/month",
    value: "Value $170/mo",
    visits: "2 Luxe visits/month",
    color: false,
    features: [
      "2 Luxe Treatments or makeup applications per month",
      "1 Indulge upgrade included",
      "10% off all retail products",
      "Member priority booking",
    ],
  },
  {
    name: "The Classy",
    price: "$200",
    period: "/month",
    value: "Value $240/mo",
    visits: "4 visits/month",
    color: true,
    popular: true,
    features: [
      "4 blowouts or makeup applications per month",
      "2 Indulge upgrades included",
      "10% off all retail products",
      "Member priority booking",
      "Complimentary birthday service",
    ],
  },
  {
    name: "The Socialite",
    price: "$400",
    period: "/month",
    value: "Value $460/mo",
    visits: "8 visits/month",
    color: false,
    features: [
      "8 blowouts or makeup applications per month",
      "4 Indulge upgrades included",
      "10% off all retail products",
      "Member priority booking",
      "VIP event invitations",
    ],
  },
];

const faqs = [
  {
    question: "Can I roll over unused visits?",
    answer:
      "Membership visits are monthly and reset each billing cycle. We recommend choosing the tier that matches your typical visit frequency.",
  },
  {
    question: "Can I use my membership for makeup services?",
    answer:
      "Yes! All membership plans allow you to use your monthly visits for either blowouts or makeup applications — interchangeably.",
  },
  {
    question: "What is an Indulge upgrade?",
    answer:
      "Indulge upgrades are premium add-ons like scalp massages, conditioning treatments, lashes, braids, and more. Each membership tier includes a set number each month.",
  },
  {
    question: "Can I pause or cancel my membership?",
    answer:
      "Contact us at info@poshkc.com or call 816.974.7674 to discuss membership changes. We're always happy to work with you.",
  },
  {
    question: "Is the 10% product discount automatic?",
    answer:
      "Yes — your 10% discount on all retail products applies automatically at the time of purchase when your membership is active.",
  },
];

export default function MembershipsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-posh-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/269736242_1759777000887416_6949414595763289026_n.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-posh-lavender font-bold uppercase tracking-widest text-sm mb-4">
            Save Every Month
          </p>
          <h1 className="text-5xl font-black mb-4">Blowout Memberships</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Like ClassPass for your hair. Choose the plan that fits your life and save big every
            single month — plus 10% off all retail products.
          </p>
        </div>
      </section>

      {/* Membership tiers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, i) => (
              <SectionReveal key={tier.name} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
                <div
                  className={`relative h-full flex flex-col border-2 ${
                    tier.popular
                      ? "border-posh-purple"
                      : "border-gray-200"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-posh-purple text-white text-xs font-black uppercase tracking-wider px-4 py-1.5">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div
                    className={`p-6 ${tier.popular ? "bg-posh-purple text-white" : "bg-posh-gray"}`}
                  >
                    <h2 className="text-xl font-black mb-1">{tier.name}</h2>
                    <p
                      className={`text-sm mb-4 ${tier.popular ? "text-posh-lavender" : "text-gray-500"}`}
                    >
                      {tier.visits}
                    </p>
                    <div className="flex items-end gap-1">
                      <span className="text-4xl font-black">{tier.price}</span>
                      <span
                        className={`text-sm mb-1.5 ${tier.popular ? "text-posh-lavender" : "text-gray-500"}`}
                      >
                        {tier.period}
                      </span>
                    </div>
                    <p
                      className={`text-xs mt-1 ${tier.popular ? "text-posh-lavender" : "text-gray-400"}`}
                    >
                      {tier.value}
                    </p>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <ul className="space-y-3 flex-1 mb-6">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-posh-purple mt-0.5 flex-shrink-0">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block text-center py-3 font-bold uppercase tracking-wider text-sm transition-colors ${
                        tier.popular
                          ? "bg-posh-purple text-white hover:bg-posh-purple-dark"
                          : "border-2 border-posh-purple text-posh-purple hover:bg-posh-purple hover:text-white"
                      }`}
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
          <SectionReveal className="mt-8 text-center text-sm text-gray-400">
            <p>
              Questions? Call{" "}
              <a href="tel:+18169747674" className="text-posh-purple hover:underline">
                816.974.7674
              </a>{" "}
              or email{" "}
              <a href="mailto:info@poshkc.com" className="text-posh-purple hover:underline">
                info@poshkc.com
              </a>
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Why membership */}
      <section className="py-20 bg-posh-lavender-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <h2 className="text-3xl font-black text-posh-dark mb-6">
                Why Become a Member?
              </h2>
              <div className="space-y-5">
                {[
                  { h: "Guaranteed Savings", p: "Members always pay less per visit than walk-in pricing. The more you visit, the more you save." },
                  { h: "Priority Booking", p: "Members get first access to prime time slots — no more scrambling for weekend appointments." },
                  { h: "10% Product Discount", p: "Every retail product — shampoos, treatments, styling products — at 10% off for the life of your membership." },
                  { h: "Flexible Services", p: "Use your monthly visits for blowouts or makeup — whatever you need that month." },
                ].map((item) => (
                  <div key={item.h} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-posh-purple flex items-center justify-center flex-shrink-0 text-white text-xs font-black">
                      ✓
                    </div>
                    <div>
                      <h3 className="font-bold text-posh-dark">{item.h}</h3>
                      <p className="text-gray-500 text-sm mt-1">{item.p}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>
            <SectionReveal delay={1}>
              <div className="relative h-[400px]">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/277777882_1834121253452990_9203444710926996712_n-1.jpg"
                  alt="Posh KC membership"
                  fill
                  className="object-cover"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="mb-8">
            <h2 className="text-3xl font-black text-posh-dark">Membership FAQs</h2>
          </SectionReveal>
          <SectionReveal>
            <FAQAccordion items={faqs} />
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
