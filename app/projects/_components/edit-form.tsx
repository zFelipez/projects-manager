"use client";

import { Button } from "@/components/ui/button";
import { DialogHeader } from "@/components/ui/dialog";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Form } from "./form";
 
 

type EditFormProps = {
  title: string;
  description: string;
  status: 'ACTIVE' | 'INACTIVE' | 'PAUSED'
};

export function EditForm({ title, description, status }: EditFormProps) {
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className=" bg-primary max-w-[400px] rounded-lg w-full hover:bg-primary/80 text-secondary">
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

       <Form title={title} status={status} description={description} action="update"/>
      </DialogContent>
    </Dialog>
  );
}
