import {Tag} from "lucide-react"

import {cn} from "@/lib/utils"

import {Badge} from "../ui/badge"

export type PollBadgeProps = {
  category: string
}

export function PollCategoryBadge({category}: PollBadgeProps) {
  const color = category.toLowerCase() === "politics" ? "bg-blue-100" : "bg-gray-300"

  return (
    <Badge variant="outline" className={cn(color)}>
      <Tag />
      {category}
    </Badge>
  )
}
