"use client";

import { useParams, usePathname, useRouter } from "next/navigation";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PercentSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const ServerSelf = () => {
  const pathname = usePathname();

  const isAlert = false;
  const onClick = () => {
    // router.push(`/servers/${id}`);
  };

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
                pathname !== "/" && "group-hover:h-[20px]",
                isAlert && "h-[8px]",
                pathname === "/" && "h-[36px]"
              )}
            />
            <div
              className={cn(
                "relative justify-center items-center group flex mx-3 h-[48px] w-[48px] bg-discord-server-item rounded-[24px] group-hover:rounded-[16px] group-hover:bg-discord-green transition-all overflow-hidden",
                pathname === "/" &&
                  "text-primary rounded-[16px] bg-discord-green"
              )}
            >
              <PercentSquare />
            </div>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={12}>
            <p className="font-semibold text-sm capitalize">direct messages</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
export default ServerSelf;
