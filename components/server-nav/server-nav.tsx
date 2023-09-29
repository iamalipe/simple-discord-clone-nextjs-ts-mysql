import { redirect } from "next/navigation";

import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

import ServerItem from "./server-item";
import ServerAdd from "./server-add";
import ServerSelf from "./server-self";

const ServerNav = async () => {
  const profile = await currentProfile();

  if (!profile) {
    return redirect("/");
  }

  const servers = await db.server.findMany({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  return (
    <div className="bg-discord-server-nav w-[72px] flex flex-col items-center h-full overflow-hidden">
      <ServerSelf />
      <Separator className="flex-none" />
      <ScrollArea className="flex-1 w-full">
        {servers.map((e, index) => (
          <ServerItem key={index} data={e} />
        ))}
      </ScrollArea>
      <Separator className="flex-none" />
      <ServerAdd />
    </div>
  );
};
export default ServerNav;
