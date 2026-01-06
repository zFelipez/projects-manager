'use client'

import { Controller, useForm } from "react-hook-form";
import { FormSchema, formSchema } from "../_schemas/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Spinner } from "@/components/ui/spinner";


type FormProps = {
  title?: string;
  description?: string;
  status?: string;
};


export function Form({ title, description, status }: FormProps) {
    const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: title || "",
      description: description || "",
      status: status || "",
    },
  });

    
    return (
        <form id="form-rhf-textarea" className="flex flex-col gap-4 w-full">
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

          <Button disabled={form.formState.isSubmitting} type="submit">
            Salvar
          </Button>
          <div className=" flex justify-end w-full ">
            {/* { form.formState.isSubmitting && ( */}
            <Badge>
              {" "}
              <Spinner></Spinner>
            </Badge>
            {/* )} */}
          </div>
        </form>
    )
}