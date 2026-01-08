import { getCurrentUser } from "@/lib/get-current-user";
import { AccountLinksClient } from "./account-links-client";

export async function AccountLinks() {
  const userSession = await getCurrentUser();

  return <AccountLinksClient session={userSession} />;
}
