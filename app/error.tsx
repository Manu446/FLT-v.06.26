'use client';

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream-warm px-6">
      <div className="text-center max-w-xl">
        <div className="font-display text-6xl text-gold mb-4">Oops!</div>
        <h1 className="font-display text-3xl mb-4">Something went wrong</h1>
        <p className="text-stone-muted mb-8">An unexpected error occurred while loading the page. Please try again.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={reset} className="btn-gold">
            Try Again
          </button>
          <Link href="/" className="btn-outline">
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
