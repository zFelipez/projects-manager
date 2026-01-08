"use client";

import { Controller, useForm } from "react-hook-form";
import { userFormSchema, UserFormSchema } from "../_schemas/user-form";
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
import { UserActionManager } from "../services/user-action-manager";

export function UserForm({ BtnText ,action}: { BtnText: string , action:'create' | 'login'}) {
  const userform = useForm<UserFormSchema>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      name: "",
      password: "",
      age: undefined,
    },
  });

  function onSubmit(data:UserFormSchema) {
    
    UserActionManager(data , action)
    return;
  }

  return (
    <form
      id="rhf-user-form"
      className=" p-4 flex flex-col gap-4 "
      onSubmit={userform.handleSubmit(onSubmit)}
    >
      <FieldGroup>
        <Controller
          name="name"
          control={userform.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor="name"> Nome de usuario </FieldLabel>
              <Input
                {...field}
                id="name"
                aria-invalid={fieldState.invalid}
                placeholder=" Digite seu nome de usuario"
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
          name="password"
          control={userform.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor="password"> Senha </FieldLabel>
              <Input
                {...field}
                id="password"
                aria-invalid={fieldState.invalid}
                placeholder=" Digite sua senha"
                autoComplete="off"
                type="password"
                {...userform.register("password")}
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
          name="age"
          control={userform.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor="age"> Idade </FieldLabel>
              <Input
                {...field}
                id="age"
                aria-invalid={fieldState.invalid}
                placeholder=" Digite sua idade"
                autoComplete="off"
                type="number"
                value={field.value ?? ""}
                onChange={(e) =>
                  field.onChange(
                    e.target.value == "" ? undefined : Number(e.target.value)
                  )
                }
              />
              {fieldState.error && (
                <FieldError errors={[fieldState.error]}></FieldError>
              )}
            </Field>
          )}
        ></Controller>
      </FieldGroup>

      <div className="flex justify-end gap-2 flex-col w-full">
        <Button type="submit">{BtnText}</Button>
        {/* { userform.formState.isSubmitting && ( */}
        <Badge>
          {" "}
          <Spinner></Spinner>
        </Badge>
        {/* )} */}
      </div>
    </form>
  );
}
