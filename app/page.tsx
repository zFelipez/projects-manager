import { ProjectCard } from "./_components/projects-card";
import { DashboardHeader } from "./_components/dahsboard-header";
import { mockProjects } from "@/lib/mock-projects";

export default function Home() {
  return (
    <div className="flex flex-col  min-h-screen  bg-zinc-50 font-sans dark:bg-black p-8 overflow-y-auto ">
      <DashboardHeader title="Projects Dashboard " />

      <div className=" w-full  flex-1 flex  items-center justify-center flex-wrap gap-4 p-8">
        {mockProjects.map((item) => {
          return (
            <ProjectCard
              key={item.id}
              title={item.title}
              description={item.description}
              action={'Action'}
              status={item.status}
              footer={item.updatedAt}
            />
          );
        })}
      </div>
    </div>
  );
}
