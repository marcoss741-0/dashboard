import { DollarSign, PackageCheck, Percent, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { ChartOverview } from "../components/charts";
import SalesOverview from "@/components/sales";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl select-none text-primary">
                Total de vendas
              </CardTitle>
              <DollarSign className="ml-auto w-5 h-5" />
            </div>
            <CardDescription>Total de vendas 90 dias.</CardDescription>
            <CardContent>
              <p className="text-base sm:text-lg font-semibold">R$ 50.000,00</p>
            </CardContent>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl select-none text-primary">
                Novos Clientes
              </CardTitle>
              <Users className="ml-auto w-5 h-5" />
            </div>
            <CardDescription>Novos Clientes em 30 Dias</CardDescription>
            <CardContent>
              <p className="text-base sm:text-lg font-semibold">256</p>
            </CardContent>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl select-none text-primary">
                Pedidos
              </CardTitle>
              <Percent className="ml-auto w-5 h-5" />
            </div>
            <CardDescription>Pedidos Hoje</CardDescription>
            <CardContent>
              <p className="text-base sm:text-lg font-semibold">34</p>
            </CardContent>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl select-none text-primary">
                Total de Pedidos
              </CardTitle>
              <PackageCheck className="ml-auto w-5 h-5" />
            </div>
            <CardDescription>Total de Pedidos em 30</CardDescription>
            <CardContent>
              <p className="text-base sm:text-lg font-semibold">3490</p>
            </CardContent>
          </CardHeader>
        </Card>
      </section>

      <section className="mt-4 flex flex-col gap-4 md:flex-row">
        <ChartOverview />
        <SalesOverview />
      </section>
      <ThemeToggle />
    </main>
  );
}
