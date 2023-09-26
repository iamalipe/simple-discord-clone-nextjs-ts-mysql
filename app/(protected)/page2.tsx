import { UserButton } from "@clerk/nextjs";
import ModeToggle from "@/components/mode-toggle";

export default function Home() {
  return (
    <div className="flex-1">
      <UserButton />
      <ModeToggle />
      this is protected Hello World
    </div>
  );
}
