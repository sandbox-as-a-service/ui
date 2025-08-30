import type {Meta, StoryObj} from "@storybook/react-vite"

import {createPollFeedPageItem} from "./fixtures"
import {PollCard} from "./poll-card"

const meta = {
  title: "OpReg/PollCard",
  component: PollCard,
} satisfies Meta<typeof PollCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    poll: createPollFeedPageItem(),
  },
}
