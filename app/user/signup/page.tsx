import { DashboardHeader } from "@/app/_components/dahsboard-header";
import { UserForm } from "../_components/user-form";

export default function Signup() {
    return (
<div className="flex flex-col  min-h-screen  bg-zinc-50 font-sans dark:bg-black p-8 overflow-y-auto ">
      <DashboardHeader title="Cadastro" />

      <div className="flex  flex-1 w-full justify-center items-center">
        <div className="flex flex-col gap-4 w-full max-w-[800px] max-sm:max-w-[400px] bg-zinc-100 p-4 rounded-lg border border-zinc-200">
          <UserForm BtnText="Cadastrar" />
        </div>
      </div>
    </div>
    )
}