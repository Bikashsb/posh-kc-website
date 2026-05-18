"use client";

import { useState, useEffect } from "react";

interface Testimonial {
  text: string;
  author: string;
  stars?: number;
}

const testimonials: Testimonial[] = [
  {
    text: "Posh KC is the only place I trust with my hair before big events. Every blowout is perfect — smooth, shiny, and lasts for days. The team is so professional and the vibe is amazing.",
    author: "Kelly C.",
    stars: 5,
  },
  {
    text: "I got my wedding hair and makeup done here and I couldn't have been more thrilled. The trial, rehearsal, and wedding day were all seamless. My whole bridal party looked stunning.",
    author: "Leah G.",
    stars: 5,
  },
  {
    text: "We hosted our bachelorette party at Posh KC and it was INCREDIBLE. Hair, makeup, champagne, swag bags — the whole experience was so luxurious and fun. 10/10 recommend!",
    author: "Madison R.",
    stars: 5,
  },
  {
    text: "The membership is worth every penny. I come in twice a month and always leave feeling like a million dollars. Rachel and the team are the best in Kansas City.",
    author: "Stephanie M.",
    stars: 5,
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <div className="max-w-3xl mx-auto text-center">
      <div className="flex justify-center gap-1 mb-6">
        {Array.from({ length: t.stars ?? 5 }).map((_, i) => (
          <span key={i} className="text-posh-purple text-xl">★</span>
        ))}
      </div>
      <blockquote className="text-xl text-posh-dark italic leading-relaxed mb-6 min-h-24">
        &ldquo;{t.text}&rdquo;
      </blockquote>
      <p className="font-bold uppercase tracking-widest text-sm text-posh-purple">
        — {t.author}
      </p>
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current ? "bg-posh-purple w-8" : "bg-posh-lavender"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
