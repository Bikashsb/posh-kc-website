import type { Metadata } from "next";
import Image from "next/image";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Contact Posh KC — Downtown Kansas City",
  description:
    "Contact Posh KC Blow Dry Bar at 1211 Main St., Kansas City, MO 64106. Call 816.974.7674 or email info@poshkc.com. Book online anytime.",
};

const BOOKING_URL =
  "https://dashboard.boulevard.io/booking/businesses/3e4b294a-a93f-42ef-887d-613eaf4c9c5c/widget#/visit-type";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-posh-purple text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-black mb-4">Get in Touch</h1>
          <p className="text-posh-lavender text-lg max-w-xl mx-auto">
            Book online, call us, or stop by at 1211 Main St. in the Kansas City Power & Light District.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <SectionReveal>
              <h2 className="text-3xl font-black text-posh-dark mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-posh-lavender-light flex items-center justify-center flex-shrink-0">
                    <span className="text-posh-purple font-black text-lg">📍</span>
                  </div>
                  <div>
                    <p className="font-black text-posh-dark mb-1">Location</p>
                    <p className="text-gray-600">1211 Main St.</p>
                    <p className="text-gray-600">Kansas City, MO 64106</p>
                    <p className="text-sm text-posh-purple mt-1">Power & Light Entertainment District</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-posh-lavender-light flex items-center justify-center flex-shrink-0">
                    <span className="text-posh-purple font-black text-lg">📞</span>
                  </div>
                  <div>
                    <p className="font-black text-posh-dark mb-1">Phone</p>
                    <a
                      href="tel:+18169747674"
                      className="text-gray-600 hover:text-posh-purple transition-colors text-lg"
                    >
                      816.974.7674
                    </a>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-posh-lavender-light flex items-center justify-center flex-shrink-0">
                    <span className="text-posh-purple font-black text-lg">✉️</span>
                  </div>
                  <div>
                    <p className="font-black text-posh-dark mb-1">Email</p>
                    <a
                      href="mailto:info@poshkc.com"
                      className="text-gray-600 hover:text-posh-purple transition-colors"
                    >
                      info@poshkc.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-posh-lavender-light flex items-center justify-center flex-shrink-0">
                    <span className="text-posh-purple font-black text-lg">🔗</span>
                  </div>
                  <div>
                    <p className="font-black text-posh-dark mb-2">Follow Us</p>
                    <div className="flex gap-4">
                      <a
                        href="https://www.facebook.com/thePoshKC"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-posh-purple transition-colors text-sm font-medium"
                      >
                        Facebook
                      </a>
                      <a
                        href="https://www.instagram.com/poshkc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-posh-purple transition-colors text-sm font-medium"
                      >
                        Instagram
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-posh-purple text-white">
                <h3 className="font-black text-xl mb-3">Book Your Appointment</h3>
                <p className="text-posh-lavender text-sm mb-5">
                  The easiest way to secure your spot. Book online 24/7 through our scheduling platform.
                </p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-3.5 bg-white text-posh-purple font-black uppercase tracking-wider hover:bg-posh-lavender transition-colors"
                >
                  Book Online Now
                </a>
              </div>
            </SectionReveal>

            <SectionReveal delay={1}>
              <div className="relative h-[350px] mb-8">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/7e347dac-98cf-4756-92a7-0c98d4ad4039/the_gallery_2022%28298of522%29.jpg"
                  alt="Posh KC location Kansas City"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-posh-gray p-6">
                <h3 className="font-black text-posh-dark mb-4">Service Inquiries</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <strong className="text-posh-dark">Weddings & Bridal:</strong>{" "}
                    <a href="mailto:info@poshkc.com" className="text-posh-purple hover:underline">
                      Email us with your date
                    </a>
                  </p>
                  <p>
                    <strong className="text-posh-dark">Posh Party / Events:</strong>{" "}
                    <a href="mailto:info@poshkc.com" className="text-posh-purple hover:underline">
                      Email us for availability
                    </a>
                  </p>
                  <p>
                    <strong className="text-posh-dark">Space Rental:</strong>{" "}
                    <a href="mailto:info@poshkc.com" className="text-posh-purple hover:underline">
                      Contact for pricing & details
                    </a>
                  </p>
                  <p>
                    <strong className="text-posh-dark">Memberships:</strong>{" "}
                    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-posh-purple hover:underline">
                      Start online
                    </a>
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </>
  );
}
