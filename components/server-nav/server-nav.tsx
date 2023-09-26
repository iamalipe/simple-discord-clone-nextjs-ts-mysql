import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

import ServerItem from "./server-item";
import ServerAdd from "./server-add";
import ServerSelf from "./server-self";

const ServerNav = () => {
  return (
    <div className="bg-discord-server-nav w-[72px] flex flex-col items-center h-full overflow-hidden">
      <ServerSelf />
      <Separator className="flex-none" />
      <ScrollArea className="flex-1 w-full">
        <ServerItem
          id="id2"
          name="od2"
          imageUrl="https://dummyimage.com/600x400/000/fff"
        />
        <ServerItem
          id="id3"
          name="od3"
          imageUrl="https://dummyimage.com/600x400/000/fff"
        />
        <ServerItem
          id="id4"
          name="od4"
          imageUrl="https://dummyimage.com/600x400/000/fff"
        />
      </ScrollArea>
      <Separator className="flex-none" />
      <ServerAdd />
    </div>
  );
};
export default ServerNav;
