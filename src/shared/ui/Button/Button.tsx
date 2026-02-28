import clsx from "clsx";
import { Link } from "react-router-dom";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  title?: string;
  maxWidth?: number;
  className?: string;
  size?: "sm" | "md";
  onCLick?: () => void;
  children?: React.ReactNode;
}

export function Button({
  href,
  title,
  onCLick,
  maxWidth,
  children,
  className,
  size = "md",
  ...props
}: ButtonProps) {
  const sizes = {
    sm: "text-[15px] rounded-full py-1",
    md: "rounded-md py-2",
  };

  const baseStyles =
    "transition-colors duration-200 bg-accent w-full px-4 hover:bg-accent/80 flex items-center justify-center";

  return href ? (
    <Link
      to={href}
      className={clsx(baseStyles, className, sizes[size || "md"])}
      style={{ maxWidth: maxWidth }}
    >
      {title}
      {children}
    </Link>
  ) : (
    <button
      onClick={onCLick}
      className={clsx(baseStyles, className, sizes[size || "md"])}
      style={{
        maxWidth: maxWidth,
      }}
      {...props}
    >
      {title}
      {children}
    </button>
  );
}
