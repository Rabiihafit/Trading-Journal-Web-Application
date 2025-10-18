import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FileDown } from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const performanceData = [
  { month: "Jan", profit: 2400, loss: -800 },
  { month: "Feb", profit: 1398, loss: -600 },
  { month: "Mar", profit: 9800, loss: -1200 },
  { month: "Apr", profit: 3908, loss: -900 },
  { month: "May", profit: 4800, loss: -700 },
  { month: "Jun", profit: 3800, loss: -1100 },
];

const strategyComparison = [
  { name: "Breakout", value: 35 },
  { name: "Scalping", value: 28 },
  { name: "Swing", value: 22 },
  { name: "Momentum", value: 15 },
];

const COLORS = ["hsl(var(--primary))", "hsl(var(--accent))", "hsl(var(--profit))", "hsl(var(--loss))"];

export default function Statistics() {
  return (
    <Layout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Statistics</h1>
            <p className="text-muted-foreground">Analyze your trading performance</p>
          </div>
          <Button className="transition-all duration-200 hover:scale-105 hover:shadow-lg">
            <FileDown className="mr-2 h-4 w-4" />
            Generate Report
          </Button>
        </div>

        {/* Filters */}
        <div className="flex gap-4">
          <Select defaultValue="all">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent className="bg-popover">
              <SelectItem value="all">All Time</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select portfolio" />
            </SelectTrigger>
            <SelectContent className="bg-popover">
              <SelectItem value="all">All Portfolios</SelectItem>
              <SelectItem value="main">Main Trading</SelectItem>
              <SelectItem value="demo">Demo Practice</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select strategy" />
            </SelectTrigger>
            <SelectContent className="bg-popover">
              <SelectItem value="all">All Strategies</SelectItem>
              <SelectItem value="breakout">Breakout</SelectItem>
              <SelectItem value="scalping">Scalping</SelectItem>
              <SelectItem value="swing">Swing</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          <Card className="shadow-card animate-fade-in transition-all duration-300 hover:scale-105 hover:shadow-xl" style={{ animationDelay: '0ms' }}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Trades
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">247</div>
            </CardContent>
          </Card>

          <Card className="shadow-card animate-fade-in transition-all duration-300 hover:scale-105 hover:shadow-xl" style={{ animationDelay: '100ms' }}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Win Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-profit">68.5%</div>
            </CardContent>
          </Card>

          <Card className="shadow-card animate-fade-in transition-all duration-300 hover:scale-105 hover:shadow-xl" style={{ animationDelay: '200ms' }}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total P&L
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-profit">+$24,104</div>
            </CardContent>
          </Card>

          <Card className="shadow-card animate-fade-in transition-all duration-300 hover:scale-105 hover:shadow-xl" style={{ animationDelay: '300ms' }}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Expectancy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">1.45</div>
            </CardContent>
          </Card>

          <Card className="shadow-card animate-fade-in transition-all duration-300 hover:scale-105 hover:shadow-xl" style={{ animationDelay: '400ms' }}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Max Drawdown
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-loss">-5.2%</div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="shadow-card animate-fade-in transition-all duration-300 hover:shadow-xl" style={{ animationDelay: '500ms' }}>
            <CardHeader>
              <CardTitle>Performance Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={performanceData}>
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
                  <Legend />
                  <Bar dataKey="profit" fill="hsl(var(--profit))" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="loss" fill="hsl(var(--loss))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="shadow-card animate-fade-in transition-all duration-300 hover:shadow-xl" style={{ animationDelay: '600ms' }}>
            <CardHeader>
              <CardTitle>Strategy Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={strategyComparison}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {strategyComparison.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--popover))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "var(--radius)",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
