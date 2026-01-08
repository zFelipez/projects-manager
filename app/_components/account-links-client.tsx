"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { logout } from "@/app/_actions/logout";

export function AccountLinksClient({ session }: { session: any }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="p-2 hover:bg-secondary   rounded-sm hover:[&_svg]:text-primary cursor-pointer">
        <User className="text-white" size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Conta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" asChild>
          <Link href={"/user/login"}>Login</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" asChild>
          <Link href={"/user/signup"}>Sign Up</Link>
        </DropdownMenuItem>

        {session && (
          <DropdownMenuItem className="cursor-pointer" asChild>
            <Button
              onClick={logout}
              className="w-full bg-zinc-100 text-primary border-none hover:bg-transparent "
            >
              Logout
            </Button>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
