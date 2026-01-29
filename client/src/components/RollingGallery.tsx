import { useEffect, useRef } from 'react';

interface RollingGalleryProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
  speed?: number; // pixels per second
  height?: string;
}

export default function RollingGallery({ 
  images, 
  speed = 30,
  height = "300px" 
}: RollingGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;

    const animate = () => {
      if (!scrollContainer) return;
      
      scrollPosition += speed / 60; // 60fps
      
      // Reset when we've scrolled through half the content (since we duplicate)
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [speed]);

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-hidden"
        style={{ 
          scrollBehavior: 'auto',
          height 
        }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 rounded-lg overflow-hidden border-2 border-gray-700 hover:border-[#8eb564] transition-colors"
            style={{ height }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-auto object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
