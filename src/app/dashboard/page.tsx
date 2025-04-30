import Chart from "@/features/chart/chart";
import { ProtectedRoute } from "@/features/protected-route/protected.route";
import React from "react";

export default function page() {
  return (
    <ProtectedRoute>
      <Chart />
    </ProtectedRoute>
  );
}
