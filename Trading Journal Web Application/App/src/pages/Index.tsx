import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TrendingUp, BarChart3, Shield, Zap } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col bg-gradient-subtle">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Journaling</span>
          </div>
          <Button onClick={() => navigate("/auth")}>Get Started</Button>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1">
        <section className="container mx-auto px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-5xl font-bold leading-tight text-foreground">
              Professional Trading Journal for Serious Traders
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Track, analyze, and improve your trading performance with advanced statistics,
              comprehensive reporting, and intuitive portfolio management.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" onClick={() => navigate("/auth")}>
                Start Trading Journal
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate("/auth")}>
                View Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="border-t border-border bg-card py-20">
          <div className="container mx-auto px-6">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
              Everything You Need to Excel
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary">
                  <BarChart3 className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Advanced Analytics</h3>
                <p className="text-muted-foreground">
                  Comprehensive statistics with win rate, expectancy, drawdown analysis, and
                  strategy comparison
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary">
                  <Shield className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Multi-Portfolio Support</h3>
                <p className="text-muted-foreground">
                  Manage multiple trading accounts across different brokers and track both real and
                  demo portfolios
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary">
                  <Zap className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Import & Export</h3>
                <p className="text-muted-foreground">
                  Seamlessly import trades from MT5 or CSV files, and export detailed reports in
                  PDF or Excel format
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          © 2025 Journaling. Professional trading journal platform.
        </div>
      </footer>
    </div>
  );
};

export default Index;
