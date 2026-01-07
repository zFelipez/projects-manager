"use server";
"server-only";

import { revalidatePath } from "next/cache";
import { FormSchema } from "../_schemas/form-schema";
import { redirect } from "next/navigation";

export async function CreateProject(data: FormSchema | undefined) {
  console.log("criando projeto com os dados: ", data);

  revalidatePath("/");
  redirect("/");
}
