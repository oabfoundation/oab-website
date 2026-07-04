"use client";

const FALLBACK_SRC = "https://via.placeholder.com/400?text=No+Image";

/**
 * A thin client wrapper around <img> that provides an onError fallback.
 * Use this inside server components where onError cannot be used directly.
 */
export default function ClientImage({ src, alt, className }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        e.target.src = FALLBACK_SRC;
      }}
    />
  );
}
