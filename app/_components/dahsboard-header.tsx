"use client";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { usePathname } from "next/navigation";
 

interface DashboardMenuProps {
  title: string;
  children: React.ReactNode;
}

export function DashboardHeader({ title, children }: DashboardMenuProps) {
  const path = usePathname();
  console.log(path);
  return (
    <div className="flex items-center justify-between w-full bg-primary h-[50px]  p-4 absolute top-0 z-50">
      <h1 className="text-2xl shadow-sm font-bold flex items-center justify-center rounded-sm text-white">
        {title}
      </h1>

      <div className=" flex gap-4 items-center">
        {children}
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
