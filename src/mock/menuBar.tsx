import { FaRegPlusSquare } from "react-icons/fa";
import { HiOutlineDotsHorizontal, HiOutlineHome } from "react-icons/hi";
import { IoCompassOutline } from "react-icons/io5";
import { LuUserRound, LuUserRoundPlus } from "react-icons/lu";
import { RiBroadcastLine } from "react-icons/ri";
import { TbShoppingBag } from "react-icons/tb";

export const menuBar = [
  {
    id: 1,
    title: "Рекомендации",
    href: "/",
    icon: <HiOutlineHome />,
  },
  {
    id: 2,
    title: "Магазин",
    href: "/shop",
    icon: <TbShoppingBag />,
  },
  {
    id: 3,
    title: "Смотреть",
    href: "/watch",
    icon: <IoCompassOutline />,
  },
  {
    id: 4,
    title: "Подписки",
    href: "/subscriptions",
    icon: <LuUserRoundPlus />,
  },
  {
    id: 5,
    title: "Трансляция",
    href: "/live",
    icon: <RiBroadcastLine />,
  },
  {
    id: 6,
    title: "Загрузить",
    href: "/upload",
    icon: <FaRegPlusSquare />,
  },
  {
    id: 7,
    title: "Профиль",
    href: "/profile",
    icon: <LuUserRound />,
  },
  {
    id: 8,
    title: "Еще",
    href: "/more",
    icon: <HiOutlineDotsHorizontal />,
  },
];
