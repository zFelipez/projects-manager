 


import { Badge } from "@/components/ui/badge";
 

import { DeleteProjectBtn } from "../_components/delete-btn";
import { StatusBadge } from "@/app/_components/status-badge";
 
import { EditForm } from "../_components/edit-form";
import { getProject } from "../_data-access/get-project";
 

type ProjectDetailsProps = {
  params: Promise<{ id: string }>;
};

export default async function ProjectDetails({ params }: ProjectDetailsProps) {
  const { id } = await params;
  const project = await getProject(id);

  return (
    <div className="flex flex-col  min-h-screen  bg-secondary font-sans  p-8 overflow-y-auto ">
       
       

      <div className=" w-full  flex-1 flex  flex-col  items-center justify-center flex-wrap gap-4 p-8">
        {project && (
          <div className=" w-full flex flex-col items-center gap-4 ">
            <div className="flex flex-col gap-4 text-primary border  shadow-lg rounded-sm max-w-[600px] p-8 ">
              <h1 className="text-xl font-bold text-center">{project.title}</h1>
              <p className=" text-primary ">
                
                <span className="font-bold  ">Descrição:</span>{" "}
                {project.description}
              </p>
              <p className="  ">
                {" "}
                <span className="font-bold ">Status:</span>{" "}
                <StatusBadge status={project.status} />
              </p>
              <p className="  ">
                {" "}
                <span className="font-bold ">
                  Ultima vez atualizado em:
                </span>{" "}
                <Badge className="text-secondary hover:bg-secondary/80">
                  {project.updatedAt.toLocaleDateString()}
                </Badge>
              </p>
              <p className=" ">
                {" "}
                <span className="font-bold ">
                  Ultima vez atualizado em:
                </span>{" "}
                <StatusBadge status={project.status} />
              </p>
            </div>

            <EditForm title={project.title} id={project.id} description={project.description} status={project.status}/>
            <DeleteProjectBtn id={project.id} />
          </div>
        )}
      </div>
    </div>
  );
}
