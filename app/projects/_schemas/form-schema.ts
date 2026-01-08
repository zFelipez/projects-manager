import z from "zod";

export const formSchema = z.object({
  title: z.string("Deve ser somente letras ").min(5, "Deve ser no minimo 5"),
  description: z
    .string("Deve ser somente letras")
    .min(10, "Descrição muito curta "),
  status: z.enum(["ACTIVE", "INACTIVE", "PAUSED"]),
});

export type FormSchema = z.infer<typeof formSchema>;
