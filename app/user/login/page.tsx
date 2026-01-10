"use client";
import { UserForm } from "../_components/user-form";

export default function Login() {
  return (
   
     
      <div className=" relative z-10 flex  flex-1 w-full justify-center items-center">
        <div className="flex flex-col gap-4 w-full max-w-[800px] max-sm:max-w-[400px] bg-zinc-100 p-4 rounded-lg border border-zinc-200">
          <UserForm BtnText="Fazer login" action="login" />
        </div>
      </div>
   
  );
}
