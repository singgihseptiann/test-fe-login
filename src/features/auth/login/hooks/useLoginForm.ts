import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useLogin } from "./useLogin";
import { useState } from "react";
import { LoginFormValues, loginSchema } from "../schema/login.schema";

export function useLoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
      id_kelompok: 44,
      id_daerah: 0,
      tahun: 2025,
    },
  });

  const loginMutation = useLogin();

  async function onSubmit(data: LoginFormValues) {
    try {
      const response = await loginMutation.mutateAsync(data);
      return response;
    } catch (error) {
      console.error("Login error:", error);
    }
  }

  return {
    form,
    onSubmit,
    isSubmitting: loginMutation.isPending,
    showPassword,
    togglePasswordVisibility,
  };
}
