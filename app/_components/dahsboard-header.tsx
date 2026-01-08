"use client";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AccountLinks } from "./account-links";

interface DashboardMenuProps {
  title: string;
}

export function DashboardHeader({ title }: DashboardMenuProps) {
  const path = usePathname();
  console.log(path);
  return (
    <div className="flex items-center justify-between w-full bg-primary h-[50px] rounded-sm p-4">
      <h1 className="text-2xl shadow-sm font-bold flex items-center justify-center rounded-sm text-white">
        {title}
      </h1>

      <div className=" flex gap-4 items-center">
        <AccountLinks />
        {path === "/" && (
          <Link href="/projects/new">
            <Button className=" bg-white text-primary hover:bg-secondary/80 rounded-sm">
              Adicionar Projeto
            </Button>
          </Link>
        )}
        {path.startsWith("/projects") && (
          <Link href="/">
            <Button className=" bg-white  text-primary hover:bg-secondary/80 rounded-sm">
              Home
            </Button>
          </Link>
        )}{" "}
      </div>
    </div>
  );
}
