import { ProtectedRoute } from "@/features/protected-route/protected.route";
import React from "react";

export default function page() {
  return (
    <ProtectedRoute>
      <h1>Dashboard</h1>
    </ProtectedRoute>
  );
}
