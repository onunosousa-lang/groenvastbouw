import { useRef, useEffect, useState } from 'react';
import { Play, Pause } from 'lucide-react';

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function LazyVideo({ src, poster, className, children }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
            if (videoRef.current) {
              videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
            }
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 } // Start loading when 25% visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative group">
      <video
        ref={videoRef}
        className={className}
        loop
        muted
        playsInline
        poster={poster}
        onClick={togglePlay}
      >
        {isLoaded && <source src={src} type="video/mp4" />}
        {children}
      </video>
      
      <button
        onClick={togglePlay}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/70 text-foreground p-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:opacity-100"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? <Pause size={32} /> : <Play size={32} />}
      </button>
    </div>
  );
}
