import { Header, SideBar } from "./widgets";

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <div className="flex justify-between w-full">
      <SideBar />
      <main>{children}</main>
      <Header />
    </div>
  );
}
