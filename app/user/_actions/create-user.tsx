"use server";
"server-only";

import { prisma } from "@/lib/prisma";

import { UserFormSchema, userFormSchema } from "../_schemas/user-form";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";




export async function CreateUser(data: UserFormSchema) {
  const parsed = userFormSchema.safeParse(data);

  if (!parsed.success) {
    throw new Error("Dados Invalidos");
  }

  if (parsed.data.action !== "create") {
    throw new Error("Acao Invalida");
  }

  const userCreated = await prisma.user.findUnique({
    where: { name: data.name },
  });


  if (!userCreated) {
    const { name, password, age } = parsed.data
 
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
        throw new Error("Usuario ja cadastrado");
      }
    }
  }
  redirect("/user/login");
}
