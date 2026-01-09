import { Form } from "../_components/form";

export default function NewProject() {
  return (
    <div className="flex flex-col  min-h-screen  bg-zinc-50 gap-4 font-sans dark:bg-black p-8 overflow-y-auto ">
      <div className="flex  flex-1 w-full justify-center items-center">
        <div className="flex flex-col gap-4 w-full max-w-[800px] max-sm:max-w-[400px] bg-zinc-100 p-4 rounded-lg border border-zinc-200">
          <Form action="create" />
        </div>
      </div>
    </div>
  );
}
