import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface TradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  trade?: any;
}

export const TradeModal = ({ isOpen, onClose, trade }: TradeModalProps) => {
  const [formData, setFormData] = useState({
    instrument: "",
    strategy: "",
    entryDate: "",
    exitDate: "",
    entryPrice: "",
    exitPrice: "",
    positionType: "Long",
    size: "",
    leverage: "",
    comments: "",
  });

  useEffect(() => {
    if (trade) {
      setFormData({
        instrument: trade.instrument || "",
        strategy: trade.strategy || "",
        entryDate: trade.entryDate || "",
        exitDate: trade.exitDate || "",
        entryPrice: "",
        exitPrice: "",
        positionType: trade.type || "Long",
        size: trade.size?.toString() || "",
        leverage: trade.leverage?.toString() || "",
        comments: "",
      });
    } else {
      setFormData({
        instrument: "",
        strategy: "",
        entryDate: "",
        exitDate: "",
        entryPrice: "",
        exitPrice: "",
        positionType: "Long",
        size: "",
        leverage: "",
        comments: "",
      });
    }
  }, [trade, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(trade ? "Trade updated successfully!" : "Trade added successfully!");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-popover">
        <DialogHeader>
          <DialogTitle>{trade ? "Edit Trade" : "Add New Trade"}</DialogTitle>
          <DialogDescription>
            {trade
              ? "Update the trade details below"
              : "Enter the details of your new trade"}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="instrument">Instrument</Label>
              <Input
                id="instrument"
                value={formData.instrument}
                onChange={(e) =>
                  setFormData({ ...formData, instrument: e.target.value })
                }
                placeholder="EUR/USD"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="strategy">Strategy</Label>
              <Select
                value={formData.strategy}
                onValueChange={(value) =>
                  setFormData({ ...formData, strategy: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select strategy" />
                </SelectTrigger>
                <SelectContent className="bg-popover">
                  <SelectItem value="Breakout">Breakout</SelectItem>
                  <SelectItem value="Scalping">Scalping</SelectItem>
                  <SelectItem value="Swing">Swing</SelectItem>
                  <SelectItem value="Momentum">Momentum</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="entryDate">Entry Date</Label>
              <Input
                id="entryDate"
                type="date"
                value={formData.entryDate}
                onChange={(e) =>
                  setFormData({ ...formData, entryDate: e.target.value })
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="exitDate">Exit Date</Label>
              <Input
                id="exitDate"
                type="date"
                value={formData.exitDate}
                onChange={(e) =>
                  setFormData({ ...formData, exitDate: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="entryPrice">Entry Price</Label>
              <Input
                id="entryPrice"
                type="number"
                step="0.00001"
                value={formData.entryPrice}
                onChange={(e) =>
                  setFormData({ ...formData, entryPrice: e.target.value })
                }
                placeholder="1.10250"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="exitPrice">Exit Price</Label>
              <Input
                id="exitPrice"
                type="number"
                step="0.00001"
                value={formData.exitPrice}
                onChange={(e) =>
                  setFormData({ ...formData, exitPrice: e.target.value })
                }
                placeholder="1.10450"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="positionType">Position Type</Label>
              <Select
                value={formData.positionType}
                onValueChange={(value) =>
                  setFormData({ ...formData, positionType: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-popover">
                  <SelectItem value="Long">Long</SelectItem>
                  <SelectItem value="Short">Short</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="size">Position Size</Label>
              <Input
                id="size"
                type="number"
                step="0.01"
                value={formData.size}
                onChange={(e) =>
                  setFormData({ ...formData, size: e.target.value })
                }
                placeholder="1.5"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="leverage">Leverage</Label>
              <Input
                id="leverage"
                type="number"
                value={formData.leverage}
                onChange={(e) =>
                  setFormData({ ...formData, leverage: e.target.value })
                }
                placeholder="10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="comments">Comments</Label>
            <Textarea
              id="comments"
              value={formData.comments}
              onChange={(e) =>
                setFormData({ ...formData, comments: e.target.value })
              }
              placeholder="Add notes about this trade..."
              rows={3}
            />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">{trade ? "Update" : "Add"} Trade</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
