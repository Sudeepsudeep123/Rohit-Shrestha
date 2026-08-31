import { useState } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
}

/**
 * Image with a subtle skeleton shimmer until loaded.
 * Use `loading="eager"` and `fetchPriority="high"` for above-the-fold hero images.
 */
export default function LazyImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  loading = 'lazy',
  fetchPriority = 'auto',
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-ink-700/60" aria-hidden />
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        // @ts-expect-error fetchpriority is a valid HTML attribute
        fetchpriority={fetchPriority}
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-all duration-700 ${
          loaded ? 'opacity-100' : 'opacity-0'
        } ${imgClassName}`}
      />
    </div>
  );
}
