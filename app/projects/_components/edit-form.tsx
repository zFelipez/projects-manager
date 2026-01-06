'use client'

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DialogHeader } from "@/components/ui/dialog";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Spinner } from "@/components/ui/spinner";

const formSchema = z.object({
  title: z.string("Deve ser somente letras ").min(5, "Deve ser no minimo 5"),
  description: z
    .string("Deve ser somente letras")
    .min(10, "Descrição muito curta "),
  status: z.string("Deve ser somente letras").min(10, "Descrição muito curta "),
});

type FormSchema = z.infer<typeof formSchema>;

type EditFormProps = {
  title: string;
  description: string;
  status: string;
};

export function EditForm({ title, description, status }: EditFormProps) {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: title,
      description: description,
      status: status,
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className=" bg-secondary max-w-[400px] rounded-lg w-full hover:bg-secondary/80 text-primary">
          Editar
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edição do projeto</DialogTitle>
          <DialogDescription>
            Edite as informações que deseja sobre o projeto.
          </DialogDescription>
        </DialogHeader>

        <form id="form-rhf-textarea" className="flex flex-col gap-4">
          <FieldGroup>
            <Controller
              name="title"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel htmlFor="title">Titulo</FieldLabel>
                  <Input
                    {...field}
                    id="title"
                    aria-invalid={fieldState.invalid}
                    placeholder="Digite o titulo do projeto"
                    autoComplete="off"
                  />
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]}></FieldError>
                  )}
                </Field>
              )}
            ></Controller>
          </FieldGroup>

          <FieldGroup>
            <Controller
              name="description"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel htmlFor="description">Descrição</FieldLabel>
                  <Input
                    {...field}
                    id="description"
                    aria-invalid={fieldState.invalid}
                    placeholder="Digite a descrição do projeto"
                    autoComplete="off"
                  />
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]}></FieldError>
                  )}
                </Field>
              )}
            ></Controller>
          </FieldGroup>

          <FieldGroup>
            <Controller
              name="status"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel htmlFor="status">Status</FieldLabel>
                  <Input
                    {...field}
                    id="status"
                    aria-invalid={fieldState.invalid}
                    placeholder="Digite o status do projeto"
                    autoComplete="off"
                  />
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]}></FieldError>
                  )}
                </Field>
              )}
            ></Controller>
          </FieldGroup>

          <Button disabled= { form.formState.isSubmitting}type="submit">Salvar</Button>
          <div className=" flex justify-end w-full ">
             {/* { form.formState.isSubmitting && ( */}
                <Badge> <Spinner></Spinner></Badge>
             {/* )} */}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
