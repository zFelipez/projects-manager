"use server";
import "server-only";

import { mockProjects } from "@/lib/mock-projects";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function DeleteProject(id: string | undefined) {
  const project = mockProjects.find((project) => project.id === id);

  if (!project) return;

  mockProjects.splice(mockProjects.indexOf(project), 1);

  revalidatePath("/");

  redirect("/");
}
