"use client";

import { DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ChartConfig, ChartContainer } from "../ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

export function ChartOverview() {
  const chartData = [
    { month: "Janeiro", desktop: 186, mobile: 80 },
    { month: "Fevereiro", desktop: 305, mobile: 200 },
    { month: "Março", desktop: 237, mobile: 120 },
    { month: "Abril", desktop: 73, mobile: 190 },
    { month: "Maio", desktop: 209, mobile: 130 },
    { month: "Junho", desktop: 214, mobile: 140 },
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  } satisfies ChartConfig;

  return (
    <Card className="w-full md:w-1/2 md:max-w-[600px]">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-900">
            Overview Geral de vendas
          </CardTitle>
          <DollarSign className="ml-auto w-5 h-5" />
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="w-full min-h-[200px]">
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tickMargin={10}
              tickFormatter={(value) => value.slice(0, 3)}
              tick={{ fill: "#6b7280" }}
            />
            <Bar
              dataKey="desktop"
              fill={chartConfig.desktop.color}
              radius={4}
            />
            <Bar dataKey="mobile" fill={chartConfig.mobile.color} radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
