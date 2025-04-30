import { X } from "lucide-react";
import { useSidebar } from "@/context/sidebar.context";

export function SidebarHeader() {
  const { close } = useSidebar();

  return (
    <div className="flex items-center justify-between border-b border-blue-700 p-4">
      <h2 className="text-xl font-semibold">Admin Panel</h2>
      <button
        onClick={close}
        className="cursor-pointer rounded p-1 hover:bg-blue-700 md:hidden"
      >
        <X className="h-5 w-5" />
        <span className="sr-only">Close sidebar</span>
      </button>
    </div>
  );
}
