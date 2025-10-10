"use client";

import { Card } from "@src/components/ui/card";
import { Icon } from "@iconify/react";

interface Review {
  text: string;
  rating: number;
}

const reviews: Review[] = [
  {
    text: "I sleep better knowing my mom’s knock visits are verified.",
    rating: 4,
  },
  {
    text: "Our admin dashboard helps us manage 50+ travelling staff.",
    rating: 4,
  },
  {
    text: "The hotel check-in saved me during a solo trip.",
    rating: 4,
  },
];

export default function ReviewSection(): JSX.Element {
  return (
    <section className="w-full bg-[#E6F8F8] py-10 px-4 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl py-10 sm:p-6 flex flex-col gap-4">
        {reviews.map((review, index) => (
          <Card
            key={index}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-transparent border-none shadow-none gap-4"
          >
            {/* Text Box */}
            <div className="flex items-center gap-3 bg-gray-300 px-4 py-3 rounded-xl flex-1">
              <div className="flex items-center justify-center w-8 h-8 rounded-full  flex-shrink-0">
                <Icon icon="mdi:emoticon-happy-outline" className="w-8 h-8 text-teal-800" />
              </div>
              <p className="text-sm sm:text-base text-teal-700">{review.text}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 sm:ml-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon
                  key={i}
                  icon="solar:star-bold"
                  className={`w-6 h-6 ${
                    i < review.rating ? "text-yellow-400" : "text-black"
                  }`}
                />
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
