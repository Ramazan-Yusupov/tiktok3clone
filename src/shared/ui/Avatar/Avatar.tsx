import type { AvatarProps } from "@/types/carousel.type";

export const Avatar = ({ src, size = "md", hasPlus = false }: AvatarProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <div className="relative">
      <img
        src={src}
        alt="Avatar"
        className={`${sizeClasses[size]} rounded-full border-2 border-white object-cover`}
      />
      {hasPlus && (
        <div className="absolute -bottom-1 -right-1 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center border-2 border-black">
          <span className="text-white text-xs font-bold">+</span>
        </div>
      )}
    </div>
  );
};
