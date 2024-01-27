import { Loader2 } from "lucide-react";
export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="min-h-screen flex items-center justify-center text-3xl">
      <div className="flex gap-4 items-center ">
        <Loader2 className="animate-spin" />
        <div>Načítám ...</div>
      </div>
    </div>
  );
}
