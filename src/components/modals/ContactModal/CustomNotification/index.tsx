"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

export default function CustomNotification({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {}, 3000);
    return () => clearTimeout(timer);
  }, []);
 
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      >
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 w-[90%] max-w-md text-center">
          <div className="flex flex-col items-center space-y-3">
            <Icon icon="mdi:check-circle-outline" className="text-5xl text-emerald-600" />
            <h2 className="text-lg font-semibold text-gray-800">Message Received!</h2>
            <p className="text-sm text-gray-500">
              Thank you for contacting TruthHub. Our support team typically replies within 24–48 hours.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
