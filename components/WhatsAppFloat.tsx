'use client';

import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/254740485416"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-5 bottom-5 z-[1100] w-14 h-14 bg-[#25d366] rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 hover:-translate-y-1 transition-all duration-300 animate-pulse"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} className="text-white fill-white" />
    </a>
  );
}
