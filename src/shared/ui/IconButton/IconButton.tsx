import type { IconButtonProps } from "@/types/carousel.type";
import { Link } from "react-router-dom";

export const IconButton = ({
  icon,
  href,
  count,
  onClick,
  active = false,
}: IconButtonProps) => {
  const formatCount = (num: number): string => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toString();
  };

  return href ? (
    <Link
      to={href}
      className="flex flex-col items-center gap-1 cursor-pointer group"
    >
      <div
        onClick={onClick}
        className={`p-2 rounded-full transition-all duration-200 ${
          active ? "text-red-500 scale-110" : "text-white hover:scale-110"
        }`}
      >
        {icon}
      </div>
      {count !== undefined && (
        <span className="text-white text-xs font-semibold drop-shadow-md">
          {formatCount(count)}
        </span>
      )}
    </Link>
  ) : (
    <div
      onClick={onClick}
      className="flex flex-col items-center gap-1 cursor-pointer group"
    >
      <div
        className={`p-2 rounded-full transition-all duration-200 ${
          active ? "text-red-500 scale-110" : "text-white hover:scale-110"
        }`}
      >
        {icon}
      </div>
      {count !== undefined && (
        <span className="text-white text-xs font-semibold drop-shadow-md">
          {formatCount(count)}
        </span>
      )}
    </div>
  );
};
