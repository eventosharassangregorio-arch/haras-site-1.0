import { useEffect, useState } from 'react'

export function ResponsiveImage({
  image,
  alt,
  className = '',
  imgClassName = '',
  loading = 'lazy',
  sizes = '100vw',
  fetchPriority
}) {
  const [src, setSrc] = useState(image.src)
  const srcSet = src === image.src ? image.srcSet : undefined

  useEffect(() => {
    setSrc(image.src)
  }, [image.src])

  return (
    <picture className={className}>
      <img
        src={src}
        srcSet={srcSet}
        alt={alt}
        loading={loading}
        decoding="async"
        sizes={sizes}
        fetchPriority={fetchPriority}
        className={imgClassName}
        onError={() => {
          if (src !== image.fallback) {
            setSrc(image.fallback)
          }
        }}
      />
    </picture>
  )
}
