import { useState, useRef, useEffect } from "react";
import {
  IoVolumeHigh,
  IoMusicalNote,
  IoEllipsisHorizontal,
  IoVolumeMute,
} from "react-icons/io5";
import {
  IoHeart,
  IoChatbubble,
  IoBookmark,
  IoShareSocial,
} from "react-icons/io5";
import { IconButton } from "../IconButton/IconButton";
import { Avatar } from "../Avatar/Avatar";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import type { VideoCardProps } from "@/types/carousel.type";

export const VideoCard = ({
  data,
  isActive,
  onLike,
  isLiked,
}: VideoCardProps) => {
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (isActive && videoRef.current) {
      videoRef.current.play().catch(() => {});
    } else if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isActive]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isActive && !isMuted) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + 0.5;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isActive, isMuted]);

  return (
    <div className="relative w-full h-screen bg-black snap-start snap-always shrink-0 max-w-125 py-4">
      {/* Video */}
      <video
        ref={videoRef}
        src={data.videoUrl}
        className="w-full h-full object-cover rounded-xl "
        loop
        muted={isMuted}
        playsInline
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/60 pointer-events-none" />

      {/* Header Controls */}
      <div className="absolute top-6 left-4 right-4 flex justify-between items-center z-10">
        <IconButton
          icon={
            isMuted ? (
              <IoVolumeMute className="w-6 h-6 opacity-50" />
            ) : (
              <IoVolumeHigh className="w-6 h-6" />
            )
          }
          onClick={() => setIsMuted(!isMuted)}
        />
        <IconButton icon={<IoEllipsisHorizontal className="w-6 h-6" />} />
      </div>

      {/* Right Sidebar */}
      <div className="absolute right-4 bottom-20 flex flex-col items-center gap-4 z-10000">
        <Avatar src={data.userAvatar} size="md" hasPlus={true} />
        <IconButton
          icon={
            <IoHeart
              className={`w-8 h-8 ${isLiked ? "fill-red-500 text-red-500" : ""}`}
            />
          }
          count={data.likes}
          onClick={onLike}
          active={isLiked}
        />
        <IconButton
          icon={<IoChatbubble className="w-8 h-8" />}
          count={data.comments}
        />
        <IconButton
          icon={<IoBookmark className="w-8 h-8" />}
          count={data.saves}
        />
        <IconButton
          icon={<IoShareSocial className="w-8 h-8" />}
          count={data.shares}
        />
        <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center animate-spin-slow">
          <img
            src={data.userAvatar}
            className="w-10 h-10 rounded-full object-cover"
            alt="music"
          />
        </div>
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-10 left-4 right-20 z-10 text-white">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-bold text-base">@{data.username}</span>
          <span className="text-xs bg-gray-600/50 px-2 py-0.5 rounded">
            Follow
          </span>
        </div>
        <p className="text-sm mb-2 line-clamp-2 drop-shadow-md">
          {data.description}
        </p>
        <div className="flex items-center gap-2 text-sm">
          <IoMusicalNote className="w-4 h-4" />
          <div className="overflow-hidden w-48">
            <div className="whitespace-nowrap animate-marquee">
              {data.musicTitle} • {data.username}
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <ProgressBar progress={progress} />
    </div>
  );
};
