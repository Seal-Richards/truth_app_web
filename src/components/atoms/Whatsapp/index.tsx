"use client";

import { RiWhatsappFill } from "react-icons/ri";

export default function Whatsapp() {
  return (
    <div
      className="
        fixed z-[9999]
        bottom-6 right-4 sm:bottom-8 sm:right-8
        flex items-center
      "
    >
      <button
        className="
          transition-transform hover:scale-105
          flex items-center justify-center
          sm:inline-flex sm:items-center sm:gap-3
          sm:rounded-full sm:px-4 sm:py-2
          sm:shadow-2xl sm:border-[3px] sm:border-emerald-500 sm:bg-white
          hover:sm:shadow-lg
        "
        aria-label="Chat with us on WhatsApp"
        onClick={() => {
          window.open("https://wa.me/2348134996425", "_blank"); //  Replace with your WhatsApp number
        }}
      >
        {/* Icon */}
        <span
          className="
            flex items-center justify-center
            p-0 sm:p-2
            animate-pulse sm:animate-none
          "
        >
          <RiWhatsappFill
            className="h-8 w-8 sm:h-6 sm:w-6 text-emerald-600"
          />
        </span>

        {/* Text — hidden on smaller screens */}
        <span className="hidden sm:inline text-sm font-medium text-emerald-700 whitespace-nowrap">
          Chat with us on WhatsApp
        </span>
      </button>
    </div>
  );
}
