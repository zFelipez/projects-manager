import { ProjectCard } from "./_components/projects-card";
 
import { mockProjects } from "@/lib/mock-projects";
import { getCurrentUser } from "@/lib/get-current-user";
import { redirect } from "next/navigation";

export default async function Home() {
  const userSession = await getCurrentUser();

  if(!userSession ) redirect('/user/login')
  
  
  return (
    <div className="flex flex-col  min-h-screen  bg-zinc-50 font-sans dark:bg-black p-8 overflow-y-auto ">
    

      <div className=" w-full  flex-1 flex  items-center justify-center flex-wrap gap-4 p-8">
        {mockProjects.map((item) => {
          return (
            <ProjectCard
              key={item.id}
              title={item.title}
              description={item.description}
              action={item.id}
              status={item.status}
              footer={item.updatedAt}
            />
          );
        })}
      </div>
    </div>
  );
}
