import type { Metadata } from "next"
import FinanceDashboard from "@/components/finance/FinanceDashboard"

export const metadata: Metadata = {
  title: "Finance Dashboard",
  description: "Manage your finances with ease",
}

export default function FinancePage() {
  return <FinanceDashboard />
}

