"use client";
import { usePathname } from "next/navigation";
import { Header } from "./header/header";
import { Sidebar } from "./sidebar/sidebar";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname === "/home" || pathname === "/register") {
    return <>{children}</>;
  }

  return (
    <div className="">
      <Sidebar />

      <div className="ml-0 flex flex-1 flex-col md:ml-64">
        <Header />
        <main className="flex-1 overflow-hidden bg-gray-50 p-4">
          {children}
        </main>
      </div>
    </div>
  );
}
