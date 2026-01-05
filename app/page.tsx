import { ProjectCard } from "./_components/projects-card";

export default function Home() {
  return (
    <div className="flex flex-col  min-h-screen  bg-zinc-50 font-sans dark:bg-black p-8 overflow-y-auto ">
      <div className=" w-full  flex-1 flex p-8 bg-black rounded-2xl ">
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
