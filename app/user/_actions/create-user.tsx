"use server";
"server-only";

import { prisma } from "@/lib/prisma";

import { UserFormSchema, userFormSchema } from "../_schemas/user-form";
import bcrypt from "bcryptjs";

export async function createUser(data: UserFormSchema) {
  const parsed = userFormSchema.safeParse(data);

  if (!parsed.success) {
    throw new Error("Dados Invalidos");
  }

  if (parsed.data.action !== "create") {
    throw new Error("Acao Invalida");
  }

  const { name, password, age } = parsed.data;

  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    await prisma.user.create({
      data: {
        name,
        password: hashedPassword,
        age,
      },
    });
  } catch (e: any) {
    if (e.code === "P2002") {
      return { success: false, error: "Ja existe um usuario com esse nome." };
    }
  }

  return { success: true };
}
