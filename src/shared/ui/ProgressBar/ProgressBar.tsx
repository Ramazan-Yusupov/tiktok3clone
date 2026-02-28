import type { ProgressBarProps } from "@/types/carousel.type";

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className="absolute bottom-6 left-0 right-0 h-1 bg-gray-600/50 z-20">
      <div
        className="h-full bg-red-500 transition-all duration-100 ease-linear"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
