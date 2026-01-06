"use client";
import { Button } from "@/components/ui/button";
import { House } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelectedLayoutSegment } from "next/navigation";



interface DashboardMenuProps {
  title: string;
}

export function DashboardHeader({ title }: DashboardMenuProps) {
  const path = usePathname();
  
  const detailsPage =  path.startsWith('/projects') && path !== '/projects/new'
   
  console.log(detailsPage)
 

  console.log(path);
  return (
    <div className="flex items-center justify-between w-full bg-primary h-[50px] rounded-sm p-4">
      <h1 className="text-2xl shadow-sm font-bold flex items-center justify-center rounded-sm text-white">
        {title}
      </h1>

      {path === "/" && (
        <Link href="/new">
          <Button className=" bg-white text-primary hover:bg-secondary/80 rounded-sm">
            Adicionar Projeto
          </Button>
        </Link>
      )}

      {detailsPage && (
        <Link href="/" >
          <House className="inline text-secondary hover:text-secondary/80" />
        </Link>
      )}
    </div>
  );
}
