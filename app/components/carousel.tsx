import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageItem {
  src: string;
  alt?: string;
}

interface ImageCarouselProps {
  images: (string | ImageItem)[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  className?: string;
  imageClassName?: string;
  aspectRatio?: string;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ 
  images = [], 
  autoPlay = false, 
  autoPlayInterval = 3000,
  showDots = true,
  showArrows = true,
  className = "",
  imageClassName = "",
  aspectRatio = "aspect-video" // Can be aspect-square, aspect-video, etc.
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, images.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!images.length) {
    return (
      <div className={`w-full ${aspectRatio} bg-gray-200 flex items-center justify-center rounded-lg ${className}`}>
        <p className="text-gray-500">No images to display</p>
      </div>
    );
  }

  return (
    <div className={`relative w-full group cursor-pointer ${className}`}>
      {/* Main image container */}
      <div className={`relative w-full ${aspectRatio} overflow-hidden rounded-lg`}>
        <img
          src={typeof images[currentIndex] === 'string' ? images[currentIndex] : (images[currentIndex] as ImageItem).src}
          alt={typeof images[currentIndex] === 'string' ? `Slide ${currentIndex + 1}` : (images[currentIndex] as ImageItem).alt || `Slide ${currentIndex + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 hover:scale-105 ${imageClassName}`}
        />
        
        {/* Loading overlay for better UX */}
        <div className="absolute inset-0 bg-gray-200 animate-pulse" 
             style={{ zIndex: -1 }} />
      </div>

      {/* Navigation arrows */}
      {showArrows && images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Dot indicators */}
      {showDots && images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                index === currentIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image counter */}
      <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

// Example usage component
const CarouselDemo = () => {
  // Example with image objects (recommended for better accessibility)
  const imagesWithAlt = [
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      alt: "Mountain landscape with lake"
    },
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
      alt: "Forest path in autumn"
    },
    {
      src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&h=600&fit=crop",
      alt: "Ocean waves at sunset"
    },
    {
      src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=600&fit=crop",
      alt: "Desert dunes landscape"
    }
  ];

  // Example with simple string array
  const simpleImages = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&h=600&fit=crop"
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Auto-playing Carousel</h2>
        <ImageCarousel 
          images={imagesWithAlt}
          autoPlay={true}
          autoPlayInterval={2000}
          className="max-w-2xl"
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Square Aspect Ratio</h2>
        <ImageCarousel 
          images={simpleImages}
          aspectRatio="aspect-square"
          className="max-w-lg"
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Minimal Controls</h2>
        <ImageCarousel 
          images={imagesWithAlt}
          showDots={false}
          className="max-w-3xl"
        />
      </div>
    </div>
  );
};

export default CarouselDemo;