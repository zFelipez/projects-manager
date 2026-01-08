"use server";
import "server-only";

import { mockProjects } from "@/lib/mock-projects";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/get-current-user";
import { prisma } from "@/lib/prisma";
import { success } from "zod";

export async function deleteProject(id: string | undefined) {
  const session = await getCurrentUser();

  if (!session) return { success: false, error: "Usuario nao autenticado" };
  try {
    const project = await prisma.project.findUnique({
      where: {
        id,
      },
    });

    if (!project) return { success: false, error: "Projeto nao encontrado" };

    await prisma.project.delete({
      where: {
        id,
      },
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: "Erro ao deletar projeto" };
  }
}
