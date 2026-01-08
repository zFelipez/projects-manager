"use client";

import { Button } from "@/components/ui/button";
import { deleteProject } from "../_actions/delete-project";
import { redirect } from "next/navigation";
import { toast } from "sonner";

export function DeleteProjectBtn({ id }: { id: string }) {
  async function handleDeleteProject(id: string) {
    const confirmDelete = confirm(
      "Tem certeza que deseja deletar este projeto?"
    );

    if (!confirmDelete) return;

    const result = await deleteProject(id);

    if (result.success) {
      toast.success("Projeto deletado com sucesso");
      redirect("/");
    }

    toast.error(result.error);
  }

  return (
    <Button
      onClick={async () => await handleDeleteProject(id)}
      className=" bg-red-500 text-primary w-full max-w-[400px] hover:bg-red-500/80"
    >
      Deletar
    </Button>
  );
}
