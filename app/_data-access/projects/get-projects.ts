'server-only'

import { getCurrentUser } from "@/lib/get-current-user"
import { prisma } from "@/lib/prisma"


export async function getProjects(){
    const session=  await getCurrentUser()

    const projects=  await prisma.project.findMany( {where : {
        userId : session?.id
    }})

    return projects
}