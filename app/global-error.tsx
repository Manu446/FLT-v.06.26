'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="antialiased bg-cream-warm">
        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center max-w-xl">
            <div className="font-display text-6xl text-gold mb-4">Oops!</div>
            <h1 className="font-display text-3xl mb-4 text-stone-text">Something went wrong</h1>
            <p className="text-stone-muted mb-8">
              An unexpected error occurred. Please refresh the page or return home.
            </p>
            <button type="button" onClick={reset} className="btn-gold">
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
