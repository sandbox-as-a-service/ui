import type {Meta, StoryObj} from "@storybook/react-vite"

import {TwoColumnLayout} from "./two-column-layout"

const meta: Meta<typeof TwoColumnLayout> = {
  title: "OpReg/TwoColumnLayout",
  component: TwoColumnLayout,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    expandMainWhenNoAside: {
      control: "boolean",
      description: "When no aside is present, expand main to span both columns on large screens",
      table: {
        defaultValue: {summary: "true"},
      },
    },
    stackAsideFirst: {
      control: "boolean",
      description: "On mobile, render aside before main content",
      table: {
        defaultValue: {summary: "false"},
      },
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the container",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <TwoColumnLayout {...args}>
      <TwoColumnLayout.Main>main</TwoColumnLayout.Main>
      <TwoColumnLayout.Aside>aside</TwoColumnLayout.Aside>
    </TwoColumnLayout>
  ),
}

export const MainOnlyFullWidth: Story = {
  render: (args) => (
    <TwoColumnLayout {...args}>
      <TwoColumnLayout.Main>main</TwoColumnLayout.Main>
    </TwoColumnLayout>
  ),
}

export const MainOnly70Percent: Story = {
  args: {
    expandMainWhenNoAside: false,
  },
  render: (args: React.ComponentProps<typeof TwoColumnLayout>) => (
    <TwoColumnLayout {...args}>
      <TwoColumnLayout.Main>main</TwoColumnLayout.Main>
    </TwoColumnLayout>
  ),
}

export const AsideStackedFirstVisually: Story = {
  args: {
    stackAsideFirst: true,
  },
  render: (args) => (
    <TwoColumnLayout {...args}>
      <TwoColumnLayout.Main>main</TwoColumnLayout.Main>
      <TwoColumnLayout.Aside>aside</TwoColumnLayout.Aside>
    </TwoColumnLayout>
  ),
}

export const AsideStackedFirstDom: Story = {
  render: (args) => (
    <TwoColumnLayout {...args}>
      <TwoColumnLayout.Aside>aside</TwoColumnLayout.Aside>
      <TwoColumnLayout.Main>main</TwoColumnLayout.Main>
    </TwoColumnLayout>
  ),
}

export const StickyAsideWithOffset: Story = {
  render: (args) => (
    <TwoColumnLayout {...args} className="h-[200vh]">
      <TwoColumnLayout.Main>main</TwoColumnLayout.Main>
      <TwoColumnLayout.Aside stickyOffsetClassName="top-8">aside</TwoColumnLayout.Aside>
    </TwoColumnLayout>
  ),
}

export const StickyAsideNoOffset: Story = {
  render: (args) => (
    <TwoColumnLayout {...args} className="h-[200vh]">
      <TwoColumnLayout.Main>main</TwoColumnLayout.Main>
      <TwoColumnLayout.Aside stickyOffsetClassName="top-0">aside</TwoColumnLayout.Aside>
    </TwoColumnLayout>
  ),
}
