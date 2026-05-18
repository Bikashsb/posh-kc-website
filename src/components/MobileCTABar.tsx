"use client";

const BOOKING_URL =
  "https://dashboard.boulevard.io/booking/businesses/3e4b294a-a93f-42ef-887d-613eaf4c9c5c/widget#/visit-type";

export default function MobileCTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white border-t border-gray-200 flex">
      <a
        href="tel:+18169747674"
        className="flex-1 py-4 flex flex-col items-center justify-center text-posh-purple border-r border-gray-200"
      >
        <span className="text-lg leading-none">📞</span>
        <span className="text-xs font-bold mt-1 uppercase tracking-wide">Call</span>
      </a>
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-4 flex flex-col items-center justify-center bg-posh-purple text-white"
      >
        <span className="text-xs font-bold uppercase tracking-wide">Book Now</span>
        <span className="text-xs text-posh-lavender mt-0.5">Free Consultation</span>
      </a>
    </div>
  );
}
