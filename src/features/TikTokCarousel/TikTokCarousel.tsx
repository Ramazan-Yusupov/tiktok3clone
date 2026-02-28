import { useState, useRef } from "react";
import { VideoCard } from "@/shared/ui/";
import { videos } from "@/mock/videoData";

export const TikTokCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [likedVideos, setLikedVideos] = useState<Set<string>>(new Set());

  const handleLike = (videoId: string) => {
    setLikedVideos((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(videoId)) {
        newSet.delete(videoId);
      } else {
        newSet.add(videoId);
      }
      return newSet;
    });
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    setStartY(clientY);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    const diff = startY - clientY;

    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex < videos.length - 1) {
        setCurrentIndex((prev) => prev + 1);
        setIsDragging(false);
      } else if (diff < 0 && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
        setIsDragging(false);
      }
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY > 0 && currentIndex < videos.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (e.deltaY < 0 && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full h-screen bg-black overflow-hidden relative">
      <div
        ref={containerRef}
        className="w-full h-full relative"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        onWheel={handleWheel}
        style={{
          transform: `translateY(-${currentIndex * 100}%)`,
          transition: isDragging ? "none" : "transform 0.3s ease-out",
        }}
      >
        {videos.map((video, index) => (
          <div key={video.id} className="flex flex-col gap-6">
            <VideoCard
              data={video}
              isActive={index === currentIndex}
              onLike={() => handleLike(video.id)}
              isLiked={likedVideos.has(video.id)}
            />
          </div>
        ))}
      </div>

      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-20">
        {videos.map((_, index) => (
          <div
            key={index}
            className={`w-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? "h-6 bg-white" : "h-1.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
