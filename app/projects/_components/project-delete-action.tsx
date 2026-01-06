"use client";

import { Button } from "@/components/ui/button";
import { DeleteProject } from "../_actions/delete-project";

export function DeleteProjectAction({ id }: { id: string }) {
 
    async function handleDeleteProject(id: string) {
    const confirmDelete = confirm(
      "Tem certeza que deseja deletar este projeto?"
    );

    if (!confirmDelete) return;

    await DeleteProject(id);
  }



  return(

     <Button onClick={ async () => await handleDeleteProject( id )} className=" bg-red-500 text-primary w-full max-w-[400px] hover:bg-red-500/80">Deletar</Button>
  )
}
