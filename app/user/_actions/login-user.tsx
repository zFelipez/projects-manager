"use server";
"server-only";

import { prisma } from "@/lib/prisma";
import { userFormSchema, UserFormSchema } from "../_schemas/user-form";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

export async function loginUser(data: UserFormSchema) {
  const parsed = userFormSchema.safeParse(data);

  if (!parsed.success) {
    return { success: false, error: "Dados Invalidos" };
  }
  if (parsed.data.action !== "login") {
    return { success: false, error: "Ação invalida" };
  }
  try {
    const userCreated = await prisma.user.findUnique({
      where: { name: data.name },
    });

    if (!userCreated) {
      return { success: false, error: "Usuario invalido" };
    }

    const correctPassword = await bcrypt.compare(
      data.password,
      userCreated.password
    );

    if (!correctPassword) {
      return {
        success: false,
        error: "Usuario invalido ou senha invalida,tente novamente",
      };
    }

    (await cookies()).set({
      name: "session",
      value: userCreated.id,
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });
  } catch (e) {
    return { success: false, error: "Erro ao criar usuario" };
  }

  return { success: true };
}
