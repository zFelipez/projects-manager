import { DashboardHeader } from "@/app/_components/dahsboard-header";

import {Form} from '../_components/form'

export  default function NewProject() {
  return (
    <div className="flex flex-col  min-h-screen  bg-zinc-50 gap-4 font-sans dark:bg-black p-8 overflow-y-auto ">
      <DashboardHeader title="New Project " />

      <div className=" w-full  flex-1 flex  items-center justify-center flex-wrap gap-4 border rounded-lg border-zinc-200">
         <Form title="" description="" status="" />
      </div>
    </div>
  );
}
