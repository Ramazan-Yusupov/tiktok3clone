import { BsTiktok } from "react-icons/bs";
import { Button, IconButton } from "@/shared/ui";
import { BiMobile } from "react-icons/bi";

export function Header() {
  return (
    <header className="mt-5 me-6 bg-slate-800 flex items-center gap-4 ps-3 py-2 pe-2 rounded-full h-min">
      <div className="flex items-center gap-2 border-r-2 border-gray-600 pr-4">
        <IconButton icon={<BsTiktok />} href="/home" />
        <IconButton icon={<BiMobile size={20} />} href="/home" />
      </div>
      <Button title="Войти" size="sm" />
    </header>
  );
}
