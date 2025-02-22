import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentTransactions() {
  const transactions = [
    {
      id: 1,
      name: "Grocery Store",
      amount: -85.32,
      date: "2023-06-15",
      category: "Food",
    },
    {
      id: 2,
      name: "Salary Deposit",
      amount: 3500.0,
      date: "2023-06-01",
      category: "Income",
    },
    {
      id: 3,
      name: "Electric Bill",
      amount: -120.5,
      date: "2023-06-10",
      category: "Utilities",
    },
    {
      id: 4,
      name: "Restaurant",
      amount: -45.0,
      date: "2023-06-18",
      category: "Dining Out",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>You had 12 transactions this month.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                <AvatarFallback>{transaction.name[0]}</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">{transaction.name}</p>
                <p className="text-sm text-muted-foreground">{transaction.category}</p>
              </div>
              <div className="ml-auto font-medium">
                {transaction.amount > 0 ? "+" : ""}${transaction.amount.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

