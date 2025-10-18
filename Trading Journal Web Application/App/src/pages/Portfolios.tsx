import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, ExternalLink } from "lucide-react";

const portfolios = [
  {
    id: 1,
    name: "Main Trading Account",
    broker: "Interactive Brokers",
    accountNumber: "U1234567",
    capital: 50000,
    currency: "USD",
    type: "Real",
    status: "Active",
  },
  {
    id: 2,
    name: "Demo Practice",
    broker: "MetaTrader 5",
    accountNumber: "D9876543",
    capital: 10000,
    currency: "USD",
    type: "Demo",
    status: "Active",
  },
  {
    id: 3,
    name: "Swing Trading",
    broker: "TD Ameritrade",
    accountNumber: "T4567890",
    capital: 25000,
    currency: "USD",
    type: "Real",
    status: "Active",
  },
];

export default function Portfolios() {
  return (
    <Layout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Portfolios</h1>
            <p className="text-muted-foreground">Manage your trading accounts and portfolios</p>
          </div>
          <Button className="transition-all duration-200 hover:scale-105 hover:shadow-lg">
            <Plus className="mr-2 h-4 w-4" />
            Add Portfolio
          </Button>
        </div>

        {/* Portfolio Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {portfolios.map((portfolio, index) => (
            <Card 
              key={portfolio.id} 
              className="shadow-card hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-lg">{portfolio.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{portfolio.broker}</p>
                  </div>
                  <Badge
                    variant={portfolio.type === "Real" ? "default" : "secondary"}
                    className={portfolio.type === "Real" ? "bg-primary" : ""}
                  >
                    {portfolio.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Account Number</span>
                    <span className="font-medium">{portfolio.accountNumber}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Capital</span>
                    <span className="font-medium">
                      {portfolio.capital.toLocaleString()} {portfolio.currency}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Status</span>
                    <span className="flex items-center gap-1 font-medium text-profit">
                      <span className="h-2 w-2 rounded-full bg-profit"></span>
                      {portfolio.status}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1 transition-all duration-200 hover:scale-105" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Trades
                  </Button>
                  <Button variant="outline" size="sm" className="transition-all duration-200 hover:scale-105">
                    Edit
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add Account Card */}
        <Card className="shadow-card border-dashed transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:shadow-xl animate-fade-in" style={{ animationDelay: '300ms' }}>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Plus className="h-12 w-12 text-muted-foreground mb-4 transition-transform duration-300 group-hover:rotate-90" />
            <h3 className="text-lg font-semibold mb-2">Add New Account</h3>
            <p className="text-sm text-muted-foreground text-center mb-4">
              Connect another trading account or create a demo portfolio
            </p>
            <Button className="transition-all duration-200 hover:scale-110">Add Account</Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
