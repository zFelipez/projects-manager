import { DashboardHeader } from "@/app/_components/dahsboard-header";
import { Button } from "@/components/ui/button";

import { getMockedProject } from "@/lib/mock-projects";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { House } from "lucide-react";
type ProjectDetailsProps = {
  params: Promise<{ id: string }>;
};

export default async function ProjectDetails({ params }: ProjectDetailsProps) {
  const { id } = await params;
  const project = getMockedProject(id);
  
  return (
    <div className="flex flex-col  min-h-screen  bg-primary font-sans  p-8 overflow-y-auto ">
      <DashboardHeader title="Project Details" />
      <div className=" text-secondary text-xl text-center"> <Link href="/"><House className="inline hover:text-secondary/80" /></Link></div>

      <div className=" w-full  flex-1 flex  flex-col  items-center justify-center flex-wrap gap-4 p-8">
        {project && (
          <div className=" w-full flex flex-col items-center gap-4 ">
            <div className="flex flex-col gap-4 text-secondary border rounded-lg max-w-[600px] p-8 ">
              <h1 className="text-xl font-bold text-center">{project.title}</h1>
              <p className=" "> Descrição : {project.description}</p>
              <p>  status : <Badge className="bg-secondary text-primary hover:bg-secondary/80">{project.status}</Badge></p>
              <p>Atualizado em : <Badge className="bg-secondary text-primary hover:bg-secondary/80">{project.updatedAt}</Badge></p>
            </div>

            <Button className=" bg-secondary text-primary w-full max-w-[400px] hover:bg-secondary/80">Editar</Button>
            <Button className=" bg-red-500 text-primary w-full max-w-[400px] hover:bg-red-500/80">Deletar</Button>
          </div>
        )}
      </div>  
    </div>
  );
}
