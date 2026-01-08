"use server";
"server-only";

import { FormSchema, formSchema } from "../_schemas/form-schema";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/get-current-user";
import { revalidatePath } from "next/cache";

export async function createProject(formData: FormSchema) {
  const userSession = await getCurrentUser();

  if (!userSession) return { success: false, error: "Usuário não autenticado" };

  const parsed = formSchema.parse(formData);

  if (!parsed) return { success: false, error: "Dados inválidos" };
  try {
    await prisma.project.create({
      data: {
        title: parsed.title,
        description: parsed.description,
        status: parsed.status,
        userId: userSession.id,
        name: userSession.name,
      },
    });
    revalidatePath("/");
  } catch (error) {
    return { success: false, error: "Erro ao criar projeto" };
  }
  return { success: true, error: "" };
}
