"use client";

import { Controller, useForm } from "react-hook-form";
import { FormSchema, formSchema } from "../_schemas/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Spinner } from "@/components/ui/spinner";

import { projectActionManager } from "../services/project-action-manager";
import { redirect } from "next/navigation";

import { toast } from "sonner";
import { ComboboxStatus } from "./combobox";

type FormProps = {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  status?: "ACTIVE" | "INACTIVE" | "PAUSED";
  action: "create" | "update";
};

export function Form({
  title,
  description,
  children,
  status,
  action,
}: FormProps) {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: title || "",
      description: description || "",
      status: status || "ACTIVE",
    },
  });

  async function onSubmit(data: FormSchema) {
    const result = await projectActionManager({ data, action });
    if (!result) {
      toast.error("Erro ao criar projeto");
      return;
    }
    if (!result.success) {
      toast.error(result.error);
      return;
    }
    if (result.success) {
      toast.success("Projeto criado com sucesso");

      redirect("/");
    }
  }

  return (
    <form
      id="form-rhf-textarea"
      className="flex flex-col gap-4 w-full"
      onSubmit={form.handleSubmit(onSubmit)}
    >
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
              <ComboboxStatus value={field.value} onChange={field.onChange} />
              {fieldState.error && (
                <FieldError errors={[fieldState.error]}></FieldError>
              )}
            </Field>
          )}
        ></Controller>
      </FieldGroup>

      {children}
      <div className=" flex justify-end w-full flex-col gap-4 ">
        <Button disabled={form.formState.isSubmitting} type="submit">
          Salvar
        </Button>
        {form.formState.isSubmitting && (
          <Badge>
            <Spinner></Spinner>
          </Badge>
        )}
      </div>
    </form>
  );
}
