import type { Meta, StoryObj } from "@storybook/react-vite";

import { ChartAreaStacked } from "./time-series-chart";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "shadcn/time-series-chart",
  component: ChartAreaStacked,
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
} satisfies Meta<typeof ChartAreaStacked>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const WithHalfYearData: Story = {
  args: {
    data: [
      { month: "January", desktop: 0, mobile: 0 },
      { month: "February", desktop: 305, mobile: 200 },
      { month: "March", desktop: 237, mobile: 120 },
      { month: "April", desktop: 73, mobile: 190 },
      { month: "May", desktop: 209, mobile: 130 },
      { month: "June", desktop: 214, mobile: 140 },
    ],
    config: {
      desktop: {
        label: "Desktop",
        color: "var(--chart-4)",
      },
      mobile: {
        label: "Mobile",
        color: "var(--chart-5)",
      },
    },
  },
};

export const WithFullYearData: Story = {
  args: {
    data: [
      { month: "January", desktop: 0, mobile: 0 },
      { month: "February", desktop: 305, mobile: 200 },
      { month: "March", desktop: 237, mobile: 120 },
      { month: "April", desktop: 73, mobile: 190 },
      { month: "May", desktop: 209, mobile: 130 },
      { month: "June", desktop: 214, mobile: 140 },
      { month: "July", desktop: 258, mobile: 150 },
      { month: "August", desktop: 198, mobile: 115 },
      { month: "September", desktop: 322, mobile: 610 },
      { month: "October", desktop: 287, mobile: 550 },
      { month: "November", desktop: 231, mobile: 425 },
      { month: "December", desktop: 265, mobile: 660 },
    ],
    config: {
      desktop: {
        label: "Desktop",
        color: "var(--chart-4)",
      },
      mobile: {
        label: "Mobile",
        color: "var(--chart-5)",
      },
    },
  },
};

export const WithThreeYearData: Story = {
  args: {
    data: [
      // 2023
      { month: "January 2023", desktop: 12, mobile: 35 },
      { month: "February 2023", desktop: 305, mobile: 200 },
      { month: "March 2023", desktop: 237, mobile: 120 },
      { month: "April 2023", desktop: 73, mobile: 190 },
      { month: "May 2023", desktop: 209, mobile: 130 },
      { month: "June 2023", desktop: 214, mobile: 140 },
      { month: "July 2023", desktop: 258, mobile: 150 },
      { month: "August 2023", desktop: 198, mobile: 115 },
      { month: "September 2023", desktop: 322, mobile: 610 },
      { month: "October 2023", desktop: 287, mobile: 550 },
      { month: "November 2023", desktop: 231, mobile: 425 },
      { month: "December 2023", desktop: 265, mobile: 660 },

      // 2024
      { month: "January 2024", desktop: 125, mobile: 125 },
      { month: "February 2024", desktop: 330, mobile: 215 },
      { month: "March 2024", desktop: 262, mobile: 135 },
      { month: "April 2024", desktop: 98, mobile: 205 },
      { month: "May 2024", desktop: 234, mobile: 145 },
      { month: "June 2024", desktop: 239, mobile: 155 },
      { month: "July 2024", desktop: 283, mobile: 165 },
      { month: "August 2024", desktop: 223, mobile: 130 },
      { month: "September 2024", desktop: 347, mobile: 625 },
      { month: "October 2024", desktop: 312, mobile: 565 },
      { month: "November 2024", desktop: 256, mobile: 440 },
      { month: "December 2024", desktop: 290, mobile: 675 },

      // 2025
      { month: "January 2025", desktop: 150, mobile: 130 },
      { month: "February 2025", desktop: 355, mobile: 230 },
      { month: "March 2025", desktop: 287, mobile: 150 },
      { month: "April 2025", desktop: 123, mobile: 220 },
      { month: "May 2025", desktop: 259, mobile: 160 },
      { month: "June 2025", desktop: 264, mobile: 170 },
      { month: "July 2025", desktop: 308, mobile: 180 },
      { month: "August 2025", desktop: 248, mobile: 145 },
      { month: "September 2025", desktop: 372, mobile: 640 },
      { month: "October 2025", desktop: 337, mobile: 580 },
      { month: "November 2025", desktop: 281, mobile: 455 },
      { month: "December 2025", desktop: 315, mobile: 690 },
    ],
    config: {
      desktop: {
        label: "Desktop",
        color: "var(--chart-4)",
      },
      mobile: {
        label: "Mobile",
        color: "var(--chart-5)",
      },
    },
  },
};

export const WithOneMonthData: Story = {
  args: {
    data: [{ month: "January", desktop: 15, mobile: 25 }],
    config: {
      desktop: {
        label: "Desktop",
        color: "var(--chart-4)",
      },
      mobile: {
        label: "Mobile",
        color: "var(--chart-5)",
      },
    },
  },
};

export const WithTwoMonthData: Story = {
  args: {
    data: [
      { month: "January", desktop: 15, mobile: 25 },
      { month: "February", desktop: 20, mobile: 30 },
    ],
    config: {
      desktop: {
        label: "Desktop",
        color: "var(--chart-4)",
      },
      mobile: {
        label: "Mobile",
        color: "var(--chart-5)",
      },
    },
  },
};
