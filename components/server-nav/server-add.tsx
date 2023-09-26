"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Plus } from "lucide-react";

const ServerAdd = () => {
  const onClick = () => {
    // router.push(`/servers/${id}`);
  };

  return (
    <div className="flex items-center flex-none justify-center my-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <button
              onClick={onClick}
              className="group relative flex items-center"
            >
              <div className="relative group flex items-center justify-center bg-discord-server-item mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden">
                <Plus />
              </div>
            </button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={12}>
            <p className="font-semibold text-sm capitalize">add a server</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
export default ServerAdd;
