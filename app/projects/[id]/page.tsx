import { DashboardHeader } from "@/app/_components/dahsboard-header";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { getMockedProject } from "@/lib/mock-projects";

type ProjectDetailsProps = {
  params: Promise<{ id: string }>;
};

export default async function ProjectDetails({ params }: ProjectDetailsProps) {
  const { id } = await params;
  const project = await getMockedProject(id);
  console.log(project);

  return (
    <div className="flex flex-col  min-h-screen  bg-primary font-sans  p-8 overflow-y-auto ">
      <DashboardHeader title="Project Details" />

      <div className=" w-full  flex-1 flex  flex-col bg-primary items-center justify-center flex-wrap gap-4 p-8">
        {project && (
          <div className="flex flex-col gap-4 text-secondary border p-8 ">
            <h1 className="text-xl font-bold text-center">{project.title}</h1>
            <p className=" "> Descrição : {project.description}</p>
            <p>Status : {project.status}</p>
            <p>Atualizado em : {project.updatedAt}</p>
          </div>
        )}
      </div>
    </div>
  );
}
