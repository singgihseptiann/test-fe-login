"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useLoginForm } from "../hooks/useLoginForm";
import { Spinner } from "@/components/spinner";
import { Eye, EyeOff } from "lucide-react";

export function LoginForm() {
  const {
    form,
    onSubmit,
    isSubmitting,
    showPassword,
    togglePasswordVisibility,
  } = useLoginForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        {/* Username Field */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="enter username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password Field */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="input password"
                    {...field}
                  />
                  <button
                    type="button"
                    className="absolute top-1/2 right-3 -translate-y-1/2 transform"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <EyeOff className="text-gray-400 cursor-pointer" />
                    ) : (
                      <Eye className="text-gray-400 cursor-pointer" />
                    )}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          className="focus:ring-opacity-50 w-full bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none active:bg-blue-700 cursor-pointer"
        >
          {isSubmitting ? (
            <Spinner
              label="Tunggu ya"
              labelClassName="text-white"
              size="sm"
              variant="white"
            />
          ) : (
            "Login"
          )}
        </Button>
      </form>
    </Form>
  );
}
