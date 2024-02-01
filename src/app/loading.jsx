import { Loader2 } from "lucide-react";
export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="h-full flex-col flex-1 flex items-center justify-center text-2xl">
      <div className="flex gap-4 items-center ">
        <Loader2 className="animate-spin" />
        <div>Načítám ...</div>
      </div>
    </div>
  );
}
