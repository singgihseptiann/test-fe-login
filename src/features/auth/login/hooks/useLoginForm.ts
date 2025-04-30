import { useState } from "react";
import { useLogin } from "./useLogin";
import { useForm } from "react-hook-form";
import { LoginFormValues, loginSchema } from "../schema/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";

export function useLoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
    setError(null);
    try {
      await loginMutation.mutateAsync(data);
    } catch (error: any) {
      if (error.response?.data?.message) {
        setError(error.response.data.message);
      } else if (error.message) {
        setError(error.message);
      } else {
        setError("Login gagal. Silakan coba lagi.");
      }
    }
  }

  return {
    form,
    onSubmit,
    isSubmitting: loginMutation.isPending,
    showPassword,
    togglePasswordVisibility,
    error,
  };
}
