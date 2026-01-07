import z from "zod";

export const userFormSchema = z.object({
  name: z.string("Deve ser somente letras").min(3, "Nome muito curto,deve ser nominomo 3 caracteres"),
  password: z
    .number(" Deve ser somente numeros ")
    .min(5, "Senha deve ser no minimo 5 caracteres"),
  age: z.number("Deve ser somente numero").min(1, "Idade deve ser no minimo 1 caracteres"),
});

export type UserFormSchema = z.infer<typeof userFormSchema>;



