 
import { createUser } from "../_actions/create-user";
import { loginUser } from "../_actions/login-user";
import { UserFormSchema } from "../_schemas/user-form";
 

export async function userActionManager(
  data: UserFormSchema,
  action: "create" | "login"
) {
  if (action === "create") {
    console.log("criando usuario");

     return await createUser(data);
   
  }

  if (action === "login") {
    console.log("logando");
      return await loginUser(data);
  }
}
