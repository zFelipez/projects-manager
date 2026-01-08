 
import { CreateUser } from "../_actions/create-user";
import { UserFormSchema } from "../_schemas/user-form";
 

export async function UserActionManager(
  data: UserFormSchema,
  action: "create" | "login"
) {
  if (action === "create") {
    console.log("criando usuario");

     return await CreateUser(data);
   
  }

  if (action === "login") {
    console.log("logando");
  }
}
