import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Filter, Pencil, Trash2 } from "lucide-react";
import { TradeModal } from "@/components/TradeModal";

const trades = [
  {
    id: 1,
    entryDate: "2025-01-15",
    exitDate: "2025-01-15",
    instrument: "EUR/USD",
    strategy: "Breakout",
    type: "Long",
    size: 1.5,
    leverage: 10,
    pnl: 450,
    status: "Closed",
  },
  {
    id: 2,
    entryDate: "2025-01-14",
    exitDate: "2025-01-14",
    instrument: "GBP/USD",
    strategy: "Scalping",
    type: "Short",
    size: 2.0,
    leverage: 20,
    pnl: -180,
    status: "Closed",
  },
  {
    id: 3,
    entryDate: "2025-01-13",
    exitDate: "2025-01-16",
    instrument: "BTC/USD",
    strategy: "Swing",
    type: "Long",
    size: 0.5,
    leverage: 5,
    pnl: 1250,
    status: "Closed",
  },
  {
    id: 4,
    entryDate: "2025-01-12",
    exitDate: null,
    instrument: "USD/JPY",
    strategy: "Momentum",
    type: "Long",
    size: 3.0,
    leverage: 15,
    pnl: 320,
    status: "Open",
  },
];

export default function Trades() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTrade, setSelectedTrade] = useState(null);

  const handleEdit = (trade: any) => {
    setSelectedTrade(trade);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setSelectedTrade(null);
    setIsModalOpen(true);
  };

  return (
    <Layout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Trades</h1>
            <p className="text-muted-foreground">View and manage all your trades</p>
          </div>
          <Button onClick={handleAdd} className="transition-all duration-200 hover:scale-105 hover:shadow-lg">
            <Plus className="mr-2 h-4 w-4" />
            Add Trade
          </Button>
        </div>

        {/* Filters */}
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search trades..." className="pl-10" />
          </div>
          <Button variant="outline" className="transition-all duration-200 hover:scale-105">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>

        {/* Trades Table */}
        <div className="rounded-lg border border-border bg-card shadow-card animate-fade-in transition-all duration-300 hover:shadow-xl" style={{ animationDelay: '200ms' }}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Entry Date</TableHead>
                <TableHead>Exit Date</TableHead>
                <TableHead>Instrument</TableHead>
                <TableHead>Strategy</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Leverage</TableHead>
                <TableHead>P&L</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {trades.map((trade, index) => (
                <TableRow 
                  key={trade.id} 
                  className="animate-slide-in transition-all duration-200 hover:bg-muted/50"
                  style={{ animationDelay: `${300 + index * 50}ms` }}
                >
                  <TableCell className="font-medium">#{trade.id}</TableCell>
                  <TableCell>{trade.entryDate}</TableCell>
                  <TableCell>{trade.exitDate || "-"}</TableCell>
                  <TableCell className="font-medium">{trade.instrument}</TableCell>
                  <TableCell>{trade.strategy}</TableCell>
                  <TableCell>
                    <Badge variant={trade.type === "Long" ? "default" : "secondary"}>
                      {trade.type}
                    </Badge>
                  </TableCell>
                  <TableCell>{trade.size}</TableCell>
                  <TableCell>{trade.leverage}x</TableCell>
                  <TableCell>
                    <span
                      className={`font-semibold ${
                        trade.pnl >= 0 ? "text-profit" : "text-loss"
                      }`}
                    >
                      {trade.pnl >= 0 ? "+" : ""}${trade.pnl}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={trade.status === "Open" ? "default" : "outline"}
                      className={trade.status === "Open" ? "bg-accent" : ""}
                    >
                      {trade.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEdit(trade)}
                        className="transition-all duration-200 hover:scale-110"
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="transition-all duration-200 hover:scale-110">
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <TradeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        trade={selectedTrade}
      />
    </Layout>
  );
}
