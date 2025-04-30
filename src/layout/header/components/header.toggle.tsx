
import { Menu } from "lucide-react";
import { useSidebar } from "@/context/sidebar.context";

export function SidebarToggle() {
  const { toggle } = useSidebar();

  return (
    <button
      onClick={toggle}
      className="rounded p-1 hover:bg-gray-100 md:hidden"
      aria-label="Toggle sidebar"
    >
      <Menu className="h-6 w-6" />
    </button>
  );
}
