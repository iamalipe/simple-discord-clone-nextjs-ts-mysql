"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

import { cn } from "@/lib/utils";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ServerItemProps {
  data: {
    id: string;
    name: string;
    imageUrl: string;
    inviteCode: string;
    profileId: string;
    createdAt: Date;
    updatedAt: Date;
  };
}
const ServerItem = ({ data }: ServerItemProps) => {
  const { id, name, imageUrl, inviteCode } = data;

  const params = useParams();
  const router = useRouter();
  const onClick = () => {
    router.push(`/servers/${id}`);
  };

  const isAlert = false;

  return (
    <div className="flex items-center flex-none justify-center my-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger
            onClick={onClick}
            className="group relative flex items-center"
          >
            <div
              className={cn(
                "absolute left-0 bg-primary rounded-r-full transition-all w-[4px]",
                params?.serverId !== id && "group-hover:h-[20px]",
                isAlert && "h-[8px]",
                params?.serverId === id && "h-[36px]"
              )}
            />
            <div
              className={cn(
                "relative group flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden",
                params?.serverId === id &&
                  "bg-primary/10 text-primary rounded-[16px]"
              )}
            >
              <Image fill src={imageUrl} alt="Channel" />
            </div>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={12}>
            <p className="font-semibold text-sm capitalize">
              {name.toLowerCase()}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
export default ServerItem;
