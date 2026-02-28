import { SideBarMenu } from "@/shared/ui/SideBarMenu/SideBarMenu";
import { useLocation } from "react-router-dom";
import { menuBar } from "@/mock/menuBar";
import { Button } from "@/shared/ui";
import { Input } from "@/shared/ui/Input/Input";
import { BiSearch } from "react-icons/bi";
import TikTokLogo from "@/shared/assets/TikTok.svg";

export function SideBar() {
  const pathname = useLocation().pathname;
  return (
    <aside className="pt-5 px-4 flex flex-col gap-2 max-w-60 w-full">
      <div className="flex flex-col gap-4 items-start ">
        <div className="w-50 h-10.5 ml-2">
          <img src={TikTokLogo} alt="TikTok Logo" />
        </div>
        <Input placeholder="Поиск" icon={<BiSearch />} />
      </div>
      {menuBar.map((item) => (
        <SideBarMenu
          key={item.id}
          icon={item.icon}
          title={item.title}
          href={item.href}
          active={pathname === item.href}
        />
      ))}
      <Button title="Войти" className="mt-2" />
      <div className="flex flex-col gap-1 mt-3 text-sm text-white/50 font-semibold border-t border-white/20 pt-3">
        <span>Компания</span>
        <span>Программа</span>
        <span>Условия и политики</span>
        <span className="font-normal">© 2026 TikTok</span>
      </div>
    </aside>
  );
}
