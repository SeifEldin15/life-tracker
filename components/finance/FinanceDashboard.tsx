"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/finance/Overview"
import { RecentTransactions } from "@/components/finance/RecentTransactions"
import { ExpenseCategoryChart } from "@/components/finance/ExpenseCategoryChart"
import { IncomeChart } from "@/components/finance/IncomeChart"
import { SavingsAccounts } from "@/components/finance/SavingsAccounts"
import { TrendAnalysis } from "@/components/finance/TrendAnalysis"
import { CalendarView } from "@/components/finance/CalendarView"

export default function FinanceDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">Finance Dashboard</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="savings">Savings</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <Overview />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Expense Categories</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <ExpenseCategoryChart />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Income Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <IncomeChart />
              </CardContent>
            </Card>
          </div>
          <RecentTransactions />
        </TabsContent>
        <TabsContent value="transactions">
          <RecentTransactions />
        </TabsContent>
        <TabsContent value="categories">
          <ExpenseCategoryChart />
        </TabsContent>
        <TabsContent value="savings">
          <SavingsAccounts />
        </TabsContent>
        <TabsContent value="trends">
          <TrendAnalysis />
        </TabsContent>
        <TabsContent value="calendar">
          <CalendarView />
        </TabsContent>
      </Tabs>
    </div>
  )
}

