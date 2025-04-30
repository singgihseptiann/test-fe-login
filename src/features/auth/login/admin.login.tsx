"use client";

import { LoginForm } from "./components/login.form";

import NusantaraDataLogo from "@/assets/logo/nusantara-data-logo.png";
import Image from "next/image";

export default function AdminLogin() {
  return (
    <div>
      <div className="w-full rounded-lg bg-white p-8 shadow-sm">
        <div className="mb-6 text-center">
          <Image
            src={NusantaraDataLogo}
            alt="Logo"
            className="mx-auto h-auto w-32"
          />
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
