"use client"

import {TrendingUp} from "lucide-react"
import {Area, AreaChart, CartesianGrid, XAxis, YAxis} from "recharts"

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "./card"
import {type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent} from "./chart"

type DataPoint = {month: string; yes: number; no: number}

interface ChartAreaStackedExpandProps {
  data: DataPoint[]
  config: ChartConfig
}

export function ChartAreaStackedExpand({data, config}: ChartAreaStackedExpandProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Poll split over time</CardTitle>
        <CardDescription>Share of Yes vs No by month (100% stacked)</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={config}>
          <AreaChart
            accessibilityLayer
            data={data}
            margin={{
              left: 12,
              right: 12,
              top: 12,
            }}
            stackOffset="expand"
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value}
            />
            <YAxis
              tickFormatter={(v) => `${Math.round(v * 100)}%`} // v is 0..1
              ticks={[0, 0.25, 0.5, 0.75, 1]}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              width={30}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  hideLabel
                  className="w-[200px]"
                  formatter={(value, name, item, index) => {
                    const payload: Omit<DataPoint, "month"> = item?.payload

                    const raw = payload[name as keyof typeof payload]
                    const total = payload.yes + payload.no

                    const frac = Number(value) ? raw / total : 0

                    return (
                      <>
                        {index === 0 && <div className="basis-full font-semibold">{item.payload.month}</div>}
                        <div
                          className="h-2.5 w-2.5 rounded-[2px]"
                          style={{background: `var(--color-${name})`}}
                        />
                        {config[name as keyof typeof config]?.label ?? name}
                        <span className="ml-auto font-mono">{(frac * 100).toFixed(2)}%</span>
                      </>
                    )
                  }}
                />
              }
            />
            <Area
              dataKey="no"
              type="natural"
              fill="var(--color-no)"
              fillOpacity={0.4}
              stroke="var(--color-no)"
              stackId="a"
            />
            <Area
              dataKey="yes"
              type="natural"
              fill="var(--color-yes)"
              fillOpacity={0.4}
              stroke="var(--color-yes)"
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
            <div className="text-muted-foreground flex items-center gap-2 leading-none">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
