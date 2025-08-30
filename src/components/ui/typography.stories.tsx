import type {Meta, StoryObj} from "@storybook/react-vite"

import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyInlineCode,
  TypographyLarge,
  TypographyLead,
  TypographyMuted,
  TypographyP,
  TypographySmall,
} from "./typography"

const meta = {
  title: "shadcn/Typography",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Showcase: Story = {
  render: () => (
    <div className="flex w-full flex-col items-center gap-12 py-12">
      <TypographyH1>Typography H1 — The quick brown fox jumps over the lazy dog</TypographyH1>
      <TypographyH2>Typography H2 — Section Title</TypographyH2>
      <TypographyH3>Typography H3 — Subsection</TypographyH3>
      <TypographyH4>Typography H4 — Small heading</TypographyH4>
      <TypographyLead>This is a lead paragraph — larger and muted to introduce a section.</TypographyLead>
      <TypographyInlineCode>pnpm add @your/pkg</TypographyInlineCode>
      <TypographyP>A secondary paragraph under the H2 to demonstrate spacing and rhythm.</TypographyP>
      <TypographyBlockquote>
        This is a blockquote to show emphasized or quoted text. It should be styled with an italic font and a
        left border.
      </TypographyBlockquote>
      <TypographyLarge>Large text</TypographyLarge>
      <TypographySmall>Small text</TypographySmall>
      <TypographyMuted>Muted small text</TypographyMuted>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Shows all named typography exports from `typography.tsx` in one place for visual reference.",
      },
    },
  },
}
