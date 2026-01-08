import { createProject } from "../_actions/create-project";

import { FormSchema } from "../_schemas/form-schema";
import { editProject } from "../_actions/edit-project";



type ProjectActionManagerSchema = {
  data: FormSchema;
  action: "create" | "update";
  id?: string;
};

export async function projectActionManager({
  data,
  action,
  id,
}: ProjectActionManagerSchema) {
  if (action === "create") {
    const result = await createProject(data);

    return result;
  }

  if (action === "update") {
    if (!id) return { success: false, error: "ID do projeto não fornecido" };
    const result = await editProject(data,id);

    return result;
  }
}
