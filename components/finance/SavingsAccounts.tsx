import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function SavingsAccounts() {
  const accounts = [
    { name: "Emergency Fund", balance: 5000, goal: 10000 },
    { name: "Vacation", balance: 2500, goal: 5000 },
    { name: "New Car", balance: 7500, goal: 15000 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Savings Accounts</CardTitle>
        <CardDescription>Track your progress towards savings goals</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {accounts.map((account) => (
            <div key={account.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">{account.name}</p>
                  <p className="text-sm text-muted-foreground">
                    ${account.balance.toFixed(2)} / ${account.goal.toFixed(2)}
                  </p>
                </div>
                <div className="text-sm font-medium">{((account.balance / account.goal) * 100).toFixed(0)}%</div>
              </div>
              <Progress value={(account.balance / account.goal) * 100} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

