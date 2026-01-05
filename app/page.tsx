import { ProjectCard } from "./_components/projects-card";
import { DashboardMenu } from "./_components/dahsboard-menu";

export default function Home() {
  return (
    <div className="flex flex-col  min-h-screen  bg-zinc-50 font-sans dark:bg-black p-8 overflow-y-auto ">
      
      <DashboardMenu title="Projects Dashboard " />
      
      <div className=" w-full  flex-1 flex  items-center justify-center flex-wrap gap-4 p-8">
        <ProjectCard
          title="Card Title"
          description="Card Description"
          action="Card Action"
          content="Card Content"
          footer="Card Footer"
        />

         <ProjectCard
          title="Card Title"
          description="Card Description"
          action="Card Action"  
          content="Card Content"
          footer="Card Footer"
        />

         <ProjectCard
          title="Card Title"
          description="Card Description"
          action="Card Action"
          content="Card Content"
          footer="Card Footer"
        />
         <ProjectCard
          title="Card Title"
          description="Card Description"
          action="Card Action"
          content="Card Content"
          footer="Card Footer"
        />
        <ProjectCard
          title="Card Title"
          description="Card Description"
          action="Card Action"
          content="Card Content"
          footer="Card Footer"
        />

        <ProjectCard
          title="Card Title"
          description="Card Description"
          action="Card Action"
          content="Card Content"
          footer="Card Footer"
        />
        <ProjectCard
          title="Card Title"
          description="Card Description"
          action="Card Action"
          content="Card Content"
          footer="Card Footer"
        />
        <ProjectCard
          title="Card Title"
          description="Card Description"
          action="Card Action"
          content="Card Content"
          footer="Card Footer"
        />

       
      </div>
    </div>
  );
}
