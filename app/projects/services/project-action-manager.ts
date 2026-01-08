import { createProject } from "../_actions/create-project";
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
    const result = await createProject(data);

    return result;
  }

  if (action === "update") {
    return;
  }
}
