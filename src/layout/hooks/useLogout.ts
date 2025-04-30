"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function useLogout() {
  const [openDialog, setOpenDialog] = useState(false);
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("expired_at");

    setOpenDialog(false);
    router.push("/");
  };

  return {
    openDialog,
    setOpenDialog,
    handleLogout,
  };
}
