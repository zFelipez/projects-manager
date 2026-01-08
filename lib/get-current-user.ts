import { cookies } from "next/headers";
import { prisma } from "./prisma";

export async function getCurrentUser() {
  const session = (await cookies()).get("session");

  if (!session) return null;

  return prisma.user.findFirst({
    where: { id: session.value },
    select: {
      id: true,
      name: true,
    },
  });
}
