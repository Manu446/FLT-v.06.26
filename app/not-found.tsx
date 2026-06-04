'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream-warm px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg"
      >
        <div className="font-display text-8xl text-gold mb-4">404</div>
        <h1 className="font-display text-3xl mb-4">Page Not Found</h1>
        <p className="text-stone-muted mb-8">The page you are looking for doesn't exist or has been moved. Let's get you back on track.</p>
        <div className="flex gap-4 justify-center">
          <MagneticButton href="/">
            <span className="btn-gold"><Home size={16} /> Back Home</span>
          </MagneticButton>
          <button onClick={() => history.back()} className="btn-outline">
            <ArrowLeft size={16} /> Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
}
