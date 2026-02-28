export interface VideoData {
  id: string;
  username: string;
  userAvatar: string;
  description: string;
  videoUrl: string;
  likes: number;
  comments: number;
  saves: number;
  shares: number;
  musicTitle: string;
}

export interface IconButtonProps {
  icon: React.ReactNode;
  href?: string;
  count?: number;
  onClick?: () => void;
  active?: boolean;
}

export interface AvatarProps {
  src: string;
  size?: "sm" | "md" | "lg";
  hasPlus?: boolean;
}

export interface ProgressBarProps {
  progress: number;
}

export interface VideoCardProps {
  data: VideoData;
  isActive: boolean;
  onLike: () => void;
  isLiked: boolean;
}
