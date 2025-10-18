import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Target,
  Plus,
  Download,
  Upload,
  FileText,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const profitData = [
  { month: "Jan", profit: 2400 },
  { month: "Feb", profit: 1398 },
  { month: "Mar", profit: 9800 },
  { month: "Apr", profit: 3908 },
  { month: "May", profit: 4800 },
  { month: "Jun", profit: 3800 },
];

const strategyData = [
  { strategy: "Breakout", trades: 45 },
  { strategy: "Scalping", trades: 78 },
  { strategy: "Swing", trades: 32 },
  { strategy: "Momentum", trades: 56 },
];

export default function Dashboard() {
  return (
    <Layout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">Overview of your trading performance</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="transition-all duration-200 hover:scale-105">
              <Upload className="mr-2 h-4 w-4" />
              Import
            </Button>
            <Button variant="outline" className="transition-all duration-200 hover:scale-105">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button className="transition-all duration-200 hover:scale-105 hover:shadow-lg">
              <Plus className="mr-2 h-4 w-4" />
              Add Trade
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="shadow-card animate-fade-in transition-all duration-300 hover:scale-105 hover:shadow-xl" style={{ animationDelay: '0ms' }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Profit/Loss</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-profit">+$24,104</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-profit">+12.5%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card animate-fade-in transition-all duration-300 hover:scale-105 hover:shadow-xl" style={{ animationDelay: '100ms' }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Win Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">68.5%</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-profit">+2.3%</span> improvement
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card animate-fade-in transition-all duration-300 hover:scale-105 hover:shadow-xl" style={{ animationDelay: '200ms' }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Max Drawdown</CardTitle>
              <TrendingDown className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-loss">-$3,240</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-loss">-5.2%</span> of capital
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card animate-fade-in transition-all duration-300 hover:shadow-xl" style={{ animationDelay: '500ms' }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Expectancy</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">1.45</div>
              <p className="text-xs text-muted-foreground">
                Positive edge maintained
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="shadow-card animate-fade-in transition-all duration-300 hover:shadow-xl" style={{ animationDelay: '300ms' }}>
            <CardHeader>
              <CardTitle>Profit Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={profitData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--popover))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "var(--radius)",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="profit"
                    stroke="hsl(var(--profit))"
                    strokeWidth={2}
                    dot={{ fill: "hsl(var(--profit))" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="shadow-card animate-fade-in transition-all duration-300 hover:shadow-xl" style={{ animationDelay: '400ms' }}>
            <CardHeader>
              <CardTitle>Trades by Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={strategyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="strategy" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--popover))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "var(--radius)",
                    }}
                  />
                  <Bar dataKey="trades" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="shadow-card animate-fade-in transition-all duration-300 hover:shadow-xl" style={{ animationDelay: '700ms' }}>
          <CardHeader>
            <CardTitle>Recent Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  message: "New trade added: EUR/USD",
                  time: "2 hours ago",
                  type: "success",
                },
                {
                  message: "Monthly report generated",
                  time: "5 hours ago",
                  type: "info",
                },
                {
                  message: "Import completed: 45 trades from MT5",
                  time: "1 day ago",
                  type: "success",
                },
              ].map((notification, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 rounded-lg border border-border p-3 animate-slide-in transition-all duration-200 hover:bg-muted/50 hover:scale-[1.02]"
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                >
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{notification.message}</p>
                    <p className="text-xs text-muted-foreground">{notification.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
