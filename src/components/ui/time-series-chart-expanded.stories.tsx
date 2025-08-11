import type { Meta, StoryObj } from "@storybook/react-vite";

import { ChartAreaStackedExpand } from "./time-series-chart-expanded";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "shadcn/time-series-chart-expanded",
  component: ChartAreaStackedExpand,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        className="md:w-2xl lg:w-4xl xl:w-5xl 2xl:w-7xl"
        data-testid="storybook-style-decorator"
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ChartAreaStackedExpand>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const WithHalfYearData: Story = {
  args: {
    data: [
      { month: "Jan", yes: 492, no: 508 },
      { month: "Feb", yes: 610, no: 590 },
      { month: "Mar", yes: 480, no: 520 },
      { month: "Apr", yes: 400, no: 500 },
      { month: "May", yes: 540, no: 460 },
      { month: "Jun", yes: 570, no: 430 },
    ],
    config: {
      yes: { label: "Yes", color: "var(--chart-1)" },
      no: { label: "No", color: "var(--chart-2)" },
    },
  },
};

export const WithThreeYearData: Story = {
  args: {
    data: [
      // 2023
      { month: "Jan 23", yes: 450, no: 550 },
      { month: "Feb 23", yes: 480, no: 520 },
      { month: "Mar 23", yes: 500, no: 500 },
      { month: "Apr 23", yes: 520, no: 480 },
      { month: "May 23", yes: 550, no: 450 },
      { month: "Jun 23", yes: 580, no: 420 },
      { month: "Jul 23", yes: 600, no: 400 },
      { month: "Aug 23", yes: 590, no: 410 },
      { month: "Sep 23", yes: 560, no: 440 },
      { month: "Oct 23", yes: 530, no: 470 },
      { month: "Nov 23", yes: 510, no: 490 },
      { month: "Dec 23", yes: 490, no: 510 },
      // 2024
      { month: "Jan 24", yes: 470, no: 530 },
      { month: "Feb 24", yes: 490, no: 510 },
      { month: "Mar 24", yes: 510, no: 490 },
      { month: "Apr 24", yes: 530, no: 470 },
      { month: "May 24", yes: 560, no: 440 },
      { month: "Jun 24", yes: 590, no: 410 },
      { month: "Jul 24", yes: 610, no: 390 },
      { month: "Aug 24", yes: 600, no: 400 },
      { month: "Sep 24", yes: 570, no: 430 },
      { month: "Oct 24", yes: 540, no: 460 },
      { month: "Nov 24", yes: 520, no: 480 },
      { month: "Dec 24", yes: 500, no: 500 },
      // 2025
      { month: "Jan 25", yes: 480, no: 520 },
      { month: "Feb 25", yes: 500, no: 500 },
      { month: "Mar 25", yes: 520, no: 480 },
      { month: "Apr 25", yes: 540, no: 460 },
      { month: "May 25", yes: 570, no: 430 },
      { month: "Jun 25", yes: 600, no: 400 },
      { month: "Jul 25", yes: 620, no: 380 },
      { month: "Aug 25", yes: 610, no: 390 },
      { month: "Sep 25", yes: 580, no: 420 },
      { month: "Oct 25", yes: 550, no: 450 },
      { month: "Nov 25", yes: 530, no: 470 },
      { month: "Dec 25", yes: 510, no: 490 },
    ],
    config: {
      yes: { label: "Yes", color: "var(--chart-1)" },
      no: { label: "No", color: "var(--chart-2)" },
    },
  },
};
