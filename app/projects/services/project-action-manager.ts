import { CreateProject } from "../_actions/create-project";
import { FormSchema } from "../_schemas/form-schema";

type ProjectActionManagerSchema = {
  data: FormSchema;
  action: "create" | "update";
};

export async function projectActionManager({
  data,
  action,
}: ProjectActionManagerSchema) {
  if (action === "create") {
    console.log(" criando projeto");
    await CreateProject(data);

    return;
  }

  if (action === "update") {
    console.log(" atualizando");

    return;
  }
}
