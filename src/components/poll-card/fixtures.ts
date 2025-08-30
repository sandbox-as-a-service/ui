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

export const createPollFeedPageItem = (overrides?: Partial<PollFeedPageItem>): PollFeedPageItem => ({
  pollId: "poll-1",
  slug: "poll-1",
  question: "What is your favorite color?",
  status: "open",
  category: "Politics",
  openedAt: new Date().toISOString(),
  createdAt: new Date().toISOString(),
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
})
