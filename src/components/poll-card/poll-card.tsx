import {Activity, Calculator, Calendar, Copy, Eye, Globe, UserPlus} from "lucide-react"

import {PollCategoryBadge} from "../poll-category-badge/poll-category-badge"
import {TypographyH2, TypographyMuted} from "../ui"
import {Badge} from "../ui/badge"
import {Button} from "../ui/button"
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "../ui/card"
import type {PollFeedPageItem} from "./fixtures"

type PollCardProps = {
  poll: PollFeedPageItem
}

export function PollCard({poll}: PollCardProps) {
  return (
    <Card className="w-full rounded-md shadow-none">
      <CardHeader>
        <div className="flex flex-row items-start justify-between">
          <div className="flex flex-row gap-2">
            <PollCategoryBadge category={poll.category?.toUpperCase() ?? ""} />
            <Badge variant="outline" className="bg-green-200">
              <Activity />
              {poll.status.toUpperCase()}
            </Badge>
            <Badge variant="outline" className="bg-green-400">
              <Globe />
              {poll.results.warmingUp ? "QUORUM NOT REACHED" : "QUORUM REACHED"}
            </Badge>
          </div>
          <div>
            <Button variant="ghost">
              <UserPlus aria-hidden />
              <span>Follow</span>
            </Button>
            <Button variant="ghost">
              <Copy aria-hidden />
              <span>Copy Link</span>
            </Button>
            <Button variant="ghost">
              <Eye aria-hidden />
              <span>View Details</span>
            </Button>
          </div>
        </div>
        <CardTitle>
          <TypographyH2>{poll.question}</TypographyH2>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row justify-between gap-2">
          {poll.options.map((option) => (
            <Button variant="secondary" key={option.optionId} className="flex grow flex-row gap-2">
              <span>{option.label}</span>
              <span>{poll.results.items.find((item) => item.optionId === option.optionId)?.pct}%</span>
              <span>{poll.results.items.find((item) => item.optionId === option.optionId)?.count}</span>
            </Button>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex flex-row gap-2">
          <TypographyMuted className="flex flex-row items-center gap-1">
            <Calendar className="h-4 w-4" />
            Opened: {new Date(poll.openedAt).toLocaleDateString()}
          </TypographyMuted>
          <TypographyMuted className="flex flex-row items-center gap-1">
            <Calculator className="h-4 w-4" />
            Total votes: {poll.results.total}
          </TypographyMuted>
        </div>
      </CardFooter>
    </Card>
  )
}
