"use client"

import {TrendingUp} from "lucide-react"
import {Area, AreaChart, CartesianGrid, XAxis, YAxis} from "recharts"

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "./card"
import {type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent} from "./chart"

type DataPoint = {month: string; desktop: number; mobile: number}

interface ChartAreaStackedProps {
  data: DataPoint[]
  config: ChartConfig
}

export function ChartAreaStacked({data, config}: ChartAreaStackedProps) {
  const formatMonthLabel = (value: string, options?: {shortYear?: boolean; monthLength?: number}) => {
    const [m, y] = String(value).split(" ")
    const month = m.slice(0, options?.monthLength ?? 3)
    if (!y) return month
    const year = options?.shortYear ? y.slice(-2) : y
    return `${month} ${year}`
  }

  const periodLabel = data?.length
    ? `${formatMonthLabel(data[0].month)} - ${formatMonthLabel(data[data.length - 1].month)}`
    : ""

  return (
    <Card className="shadow-none">
      <CardHeader>
        <CardTitle>Area Chart - Stacked</CardTitle>
        <CardDescription>Showing total visitors for the last 6 months</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={config}>
          <AreaChart
            accessibilityLayer
            data={data}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => formatMonthLabel(String(value), {shortYear: true})}
            />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} tickCount={3} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
            <Area
              dataKey="mobile"
              type="natural"
              fill="var(--color-mobile)"
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground flex items-center gap-2 leading-none">{periodLabel}</div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
