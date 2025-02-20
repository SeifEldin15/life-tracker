"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"

export function CalendarView() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  const transactions = [
    { date: new Date(2023, 5, 1), description: "Salary Deposit", amount: 3500 },
    { date: new Date(2023, 5, 5), description: "Rent Payment", amount: -1200 },
    { date: new Date(2023, 5, 10), description: "Grocery Shopping", amount: -150 },
    { date: new Date(2023, 5, 15), description: "Utility Bill", amount: -100 },
  ]

  const transactionsOnSelectedDate = transactions.filter(
    (transaction) => transaction.date.toDateString() === date?.toDateString(),
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Financial Calendar</CardTitle>
        <CardDescription>View your transactions by date</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4">Transactions on {date?.toDateString()}</h3>
          {transactionsOnSelectedDate.length > 0 ? (
            <ul className="space-y-2">
              {transactionsOnSelectedDate.map((transaction, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{transaction.description}</span>
                  <span className={transaction.amount > 0 ? "text-green-600" : "text-red-600"}>
                    ${Math.abs(transaction.amount).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p>No transactions on this date.</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

