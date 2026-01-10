import { ProjectCard } from "./_components/projects-card";

import { getCurrentUser } from "@/lib/get-current-user";
import { redirect } from "next/navigation";
import { getProjects } from "./_data-access/projects/get-projects";
import { Advice } from "./_components/advice";
 

export const dynamic = "force-dynamic";

export default async function Home() {
  const userSession = await getCurrentUser();

  if (!userSession) redirect("/user/login");

  const projects = await getProjects();
  console.log(projects.length);

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black p-8 pt-20">
     
      {projects.length > 0 ? (
        <div className="w-full flex-1 flex items-center justify-center flex-wrap gap-4">
          {projects.map((item) => {
            return (
              <ProjectCard
                key={item.id}
                title={item.title}
                description={item.description}
                action={item.id}
                status={item.status}
                footer={item.updatedAt.toISOString()}
              />
            );
          })}
        </div>
      ) : (
        <Advice />
      )}
    </div>
  );
}
