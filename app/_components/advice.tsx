"use client";

export function Advice() {
  return (
    <div className=" w-full flex-1 flex  items-center justify-center">
      <div className="w-[400px] h-[400px] flex flex-col items-center justify-center p-6 bg-zinc-200 dark:bg-zinc-900 rounded-md   border border-zinc-300 hover:border-zinc-400     dark:border-zinc-800">
        <p className="text-center   text-xl ">Nenhum projeto encontrado</p>
        <p className="text-center text-sm ">
          Crie um projeto para aparecer aqui
        </p>
      </div>
    </div>
  );
}
