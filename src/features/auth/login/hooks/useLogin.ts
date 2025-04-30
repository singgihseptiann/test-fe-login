import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import userAuth from "@/api/auth";
import { LoginPayload } from "@/types/auth.types";

export function useLogin() {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: LoginPayload) => userAuth.post("login", data),
    onSuccess: (response) => {
      localStorage.setItem("access_token", response.access_token);
      localStorage.setItem("refresh_token", response.refresh_token);
      localStorage.setItem("expired_at", response.expired_at.toString());

      alert("Login berhasil!");
      router.push("/dashboard");
    },

    onError: (error: any) => {
      console.error("Login error:", error);
    },
  });
}
