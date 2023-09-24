import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex-1">
      <UserButton />
      Hello World
    </div>
  );
}
