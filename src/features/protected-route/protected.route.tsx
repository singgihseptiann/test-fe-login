"use client";

import { Spinner } from "@/components/spinner";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (!token) {
      router.replace("/");
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (isAuthenticated === null) {
    return <Spinner />;
  }

  if (!isAuthenticated) {
    return (
      <p className="items center flex h-screen justify-center text-center text-2xl text-red-500">
        Anda belum login
      </p>
    );
  }

  return <>{children}</>;
}
