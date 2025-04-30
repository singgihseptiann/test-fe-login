import { UserDropdown } from "./components/header.dropdown";
import { HeaderTitle } from "./components/header.title";
import { SidebarToggle } from "./components/header.toggle";

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-4 shadow-sm">
      <div className="flex items-center gap-4">
        <SidebarToggle />
        <HeaderTitle headerTitle="Dashboard" />
      </div>

      <div className="flex items-center gap-4">
        <UserDropdown />
      </div>
    </header>
  );
}
