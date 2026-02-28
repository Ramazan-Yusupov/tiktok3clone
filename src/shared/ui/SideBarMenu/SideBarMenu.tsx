import { Link } from "react-router-dom";

interface MenuProps {
  icon: React.ReactNode;
  title: string;
  href: string;
  active?: boolean;
}

export function SideBarMenu({ icon, title, href, active }: MenuProps) {
  return (
    <Link
      to={href}
      className={`flex items-center gap-3 p-2 hover:bg-slate-100 rounded-md w-full ${active ? "text-pink" : ""}`}
    >
      <span className="text-2xl">{icon}</span>
      <span>{title}</span>
    </Link>
  );
}
