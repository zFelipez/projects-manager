"use server";
"server-only";

import { FormSchema, formSchema } from "../_schemas/form-schema";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/get-current-user";
import { revalidatePath } from "next/cache";

export async function editProject(formData: FormSchema, id: string) {
  const userSession = await getCurrentUser();

  if (!userSession) return { success: false, error: "Usuário não autenticado" };

  const parsed = formSchema.parse(formData);

  if (!parsed) return { success: false, error: "Dados inválidos" };
  try {


    const project = await prisma.project.findUnique({
      where: {
        id,
      },
    });

    if (!project) return { success: false, error: "Projeto não encontrado" };

    await prisma.project.update({
      where: {
        id,
      },
      data: {
        ...project,
        ...parsed,
      },
    });
     
  } catch (error) {
    return { success: false, error: "Erro ao editar projeto" };
  }
  return { success: 'Projeto editado com sucesso' };
}
