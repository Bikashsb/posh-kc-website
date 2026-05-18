import Link from "next/link";
import Image from "next/image";

const BOOKING_URL =
  "https://dashboard.boulevard.io/booking/businesses/3e4b294a-a93f-42ef-887d-613eaf4c9c5c/widget#/visit-type";

export default function Footer() {
  return (
    <footer className="bg-posh-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Image
              src="https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/c2a5ddb3-7b98-4303-a270-eea58e6f6f9a/1-3.jpg?format=300w"
              alt="Posh KC"
              width={120}
              height={48}
              className="object-contain h-12 w-auto brightness-0 invert mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              No cuts, no color — just posh beauty. Everyday to special
              occasion and wedding styling in Kansas City.
            </p>
          </div>

          <div>
            <h3 className="font-bold uppercase tracking-wider text-sm mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/services" className="hover:text-white transition-colors">Blowouts & Styling</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Makeup Services</Link></li>
              <li><Link href="/memberships" className="hover:text-white transition-colors">Memberships</Link></li>
              <li><Link href="/posh-bride" className="hover:text-white transition-colors">Posh Bride</Link></li>
              <li><Link href="/posh-party" className="hover:text-white transition-colors">Posh Party</Link></li>
              <li><Link href="/packages" className="hover:text-white transition-colors">Packages</Link></li>
              <li><Link href="/rental" className="hover:text-white transition-colors">Space Rental</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold uppercase tracking-wider text-sm mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/team" className="hover:text-white transition-colors">Our Team</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold uppercase tracking-wider text-sm mb-4">
              Visit Us
            </h3>
            <address className="not-italic text-sm text-gray-400 space-y-2">
              <p>1211 Main St.<br />Kansas City, MO 64106</p>
              <p>Power & Light District</p>
              <a
                href="tel:+18169747674"
                className="block hover:text-white transition-colors"
              >
                816.974.7674
              </a>
              <a
                href="mailto:info@poshkc.com"
                className="block hover:text-white transition-colors"
              >
                info@poshkc.com
              </a>
            </address>
            <div className="mt-4 flex gap-3">
              <a
                href="https://www.facebook.com/thePoshKC"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center hover:border-posh-lavender hover:text-posh-lavender transition-colors text-gray-400"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="https://www.instagram.com/poshkc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center hover:border-posh-lavender hover:text-posh-lavender transition-colors text-gray-400"
                aria-label="Instagram"
              >
                IG
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Posh KC Blow Dry Bar. All rights
            reserved.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-posh-purple text-white text-sm font-bold uppercase tracking-wider hover:bg-posh-purple-dark transition-colors"
          >
            Book Your Appointment
          </a>
        </div>
      </div>
    </footer>
  );
}
