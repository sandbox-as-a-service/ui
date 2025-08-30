import {Activity, BadgeCheck, Bookmark, Copy, Dot, Globe, Rewind, Sigma} from "lucide-react"
import {useState} from "react"

import {cn} from "../../lib/utils"
import {PollCategoryBadge} from "../poll-category-badge/poll-category-badge"
import {TypographyMuted, TypographyP} from "../ui"
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "../ui/accordion/accordon"
import {Badge} from "../ui/badge"
import {Button} from "../ui/button"
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "../ui/card"
import {Tooltip, TooltipContent, TooltipTrigger} from "../ui/tooltip"
import type {PollFeedPageItem} from "./fixtures"

type PollCardProps = {
  poll: PollFeedPageItem
  votedOptionId?: string
}

export function PollCard({poll, votedOptionId}: PollCardProps) {
  const openedAtDate = new Date(poll.openedAt)
  const daysSinceOpen = Math.floor((Date.now() - openedAtDate.getTime()) / (1000 * 60 * 60 * 24))
  const daysSinceOpenLabel = `${daysSinceOpen} day${daysSinceOpen === 1 ? "" : "s"} ago`

  const [votedFor, setVotedFor] = useState<string | null>(null)

  // Prefer controlled prop when provided; fall back to local state.
  // Treat empty string as "not provided" to avoid blocking local updates.
  const currentVotedOptionId = votedOptionId || votedFor

  return (
    <Card className="hover:bg-foreground/1 w-full cursor-pointer rounded-none py-4 shadow-none md:w-[600px]">
      <CardHeader>
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
          <div className="flex w-full flex-row justify-between gap-2 md:justify-start">
            <PollCategoryBadge category={poll.category?.toUpperCase() ?? ""} />
            <Badge variant="outline" className="bg-green-200">
              <Activity />
              {poll.status.toUpperCase()}
            </Badge>
            <Badge variant="outline" className="bg-green-200">
              <Globe />
              {poll.results.warmingUp ? "QUORUM PENDING" : "QUORUM REACHED"}
            </Badge>
          </div>
          <div className="flex w-full justify-between gap-2 md:justify-end">
            <Tooltip>
              <TooltipTrigger asChild>
                <span aria-disabled={!currentVotedOptionId || undefined}>
                  <Button
                    size="sm"
                    variant="destructive"
                    disabled={!currentVotedOptionId}
                    className={cn(!currentVotedOptionId && "pointer-events-none")} // let the span receive hover
                    onClick={() => setVotedFor(null)}
                  >
                    <Rewind aria-hidden />
                    Change opinion
                  </Button>
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <TypographyP>You may change your opinion once every 24 hours</TypographyP>
              </TooltipContent>
            </Tooltip>
            <Button variant="secondary" size="sm">
              <Copy aria-label="Copy Link" />
            </Button>
          </div>
        </div>
        <CardTitle className="flex flex-row items-center">
          <TypographyP className="underline underline-offset-3">@{poll.question}</TypographyP>
          <Dot className="text-muted-foreground" />
          <Tooltip>
            <TooltipTrigger asChild>
              <TypographyMuted>{daysSinceOpenLabel}</TypographyMuted>
            </TooltipTrigger>
            <TooltipContent>
              <TypographyP>Poll opened: {new Date(poll.openedAt).toLocaleString()}</TypographyP>
            </TooltipContent>
          </Tooltip>
        </CardTitle>
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="max-w-fit cursor-pointer gap-1 p-0">
                <TypographyMuted className="flex items-center gap-1 underline">
                  Disambiguation
                </TypographyMuted>
              </AccordionTrigger>
              <AccordionContent className="p-0">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          {poll.options.map((option) => {
            const result = poll.results.items.find((item) => item.optionId === option.optionId)
            const pct = Math.max(0, Math.min(100, result?.pct ?? 0))
            const isVoted = currentVotedOptionId === option.optionId
            return (
              <div
                key={option.optionId}
                className="grid grid-cols-[3fr_1fr] items-center md:grid-cols-[5fr_1fr]"
              >
                <Button
                  variant="secondary"
                  size="lg"
                  className={cn(
                    "relative flex w-full cursor-pointer justify-start gap-2 overflow-hidden",
                    isVoted && "ring-primary ring-offset-background ring-2 ring-offset-2",
                  )}
                  disabled={!!currentVotedOptionId}
                  aria-pressed={isVoted}
                  onClick={() => setVotedFor(option.optionId)}
                >
                  <span
                    aria-hidden
                    className="bg-primary pointer-events-none absolute inset-y-0 left-0"
                    style={{width: `${pct}%`}}
                  />
                  <span className="text-primary-foreground relative z-10">{option.label}</span>
                  <span className="relative z-10 ml-auto">{result?.count?.toLocaleString("en-US")}</span>
                </Button>
                <div className="flex h-full flex-row items-center justify-end gap-3">
                  {isVoted && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="bg-primary h-[22px] w-[22px] rounded-full p-[1px]">
                          <BadgeCheck size={20} strokeWidth={3} className="text-primary-foreground" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <TypographyP>You have voted for {currentVotedOptionId}</TypographyP>
                      </TooltipContent>
                    </Tooltip>
                  )}
                  <span>{pct}%</span>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <Badge variant="outline" className="bg-primary/20 text-xs">
          <Sigma />
          {poll.results.total.toLocaleString("en-US")} TOTAL VOTES
        </Badge>
        <div className="flex gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="secondary">
                <Bookmark aria-label="Bookmark" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <TypographyP>Bookmark this poll</TypographyP>
            </TooltipContent>
          </Tooltip>
        </div>
      </CardFooter>
    </Card>
  )
}
