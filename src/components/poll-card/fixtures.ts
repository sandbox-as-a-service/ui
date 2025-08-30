type PollStatus = "draft" | "open" | "closed"
type PollOptionItem = {optionId: string; label: string}

type PollResultsItem = {optionId: string; label: string; count: number; pct: number}
export type PollFeedPageItem = {
  pollId: string
  slug: string
  question: string
  status: PollStatus
  category: string | null
  openedAt: string
  createdAt: string
  options: Array<PollOptionItem>
  results: {
    total: number
    updatedAt: string | null
    warmingUp: boolean
    items: Array<PollResultsItem>
  }
}

export const createPollFeedPageItem = (overrides?: Partial<PollFeedPageItem>): PollFeedPageItem => {
  const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min

  const isoDaysAgo = (days: number) => new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString()

  // createdAt should be older than openedAt; pick created between 10-30 days ago,
  // and opened between 1 day and (createdDays - 1) days ago
  const createdDays = randomInt(10, 30)
  const openedDays = randomInt(1, Math.max(1, createdDays - 1))

  return {
    pollId: "poll-1",
    slug: "poll-1",
    question: "What is your favorite color?",
    status: "open",
    category: "Politics",
    openedAt: isoDaysAgo(openedDays),
    createdAt: isoDaysAgo(createdDays),
    options: [
      {optionId: "option-1", label: "Yes"},
      {optionId: "option-2", label: "No"},
    ],
    results: {
      total: 233_123,
      updatedAt: null,
      warmingUp: false,
      items: [
        {optionId: "option-1", label: "Yes", count: 54_244, pct: 45},
        {optionId: "option-2", label: "No", count: 111_213, pct: 55},
      ],
    },
    ...overrides,
  }
}
