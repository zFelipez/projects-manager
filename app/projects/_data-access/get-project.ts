'server-only'
import { getCurrentUser } from "@/lib/get-current-user";
import { prisma } from "@/lib/prisma";


export async function getProject(id: string) {

   const session = await getCurrentUser();

   if (!session) {
    return null;
   }

    const project = await prisma.project.findUnique({
        where: {
            id,
            userId: session.id,
        },
    });

    return project;
}