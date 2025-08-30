import type {Meta, StoryObj} from "@storybook/react-vite"
import {MoreHorizontal} from "lucide-react"

import {Button} from "./button"
import {Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "./card"

const meta = {
  title: "shadcn/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible card component with header, content, and footer sections for organizing content in a structured layout.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: {type: "text"},
      description: "Additional CSS classes to apply to the card",
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

// Primary story - the main interactive example
export const Default: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here to describe the content.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the main content of the card.</p>
      </CardContent>
    </Card>
  ),
}

// Real-world use case examples
export const WithAction: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card with Action</CardTitle>
        <CardDescription>This card has an action button in the header.</CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon" aria-label="More options">
            <MoreHorizontal />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>Content with header action.</p>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "Card with action button in the header area.",
      },
    },
  },
}

export const WithFooter: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card with Footer</CardTitle>
        <CardDescription>This card includes a footer with actions.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Content with footer actions below.</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "Card with footer containing action buttons.",
      },
    },
  },
}

export const ContentOnly: Story = {
  render: () => (
    <Card>
      <CardContent>
        <p>A simple card with only content, no header or footer.</p>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "Minimal card with only content section.",
      },
    },
  },
}

// Visual showcase showing component structure
export const AllSections: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Complete Card</CardTitle>
        <CardDescription>Shows all card sections together</CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon">
            <MoreHorizontal />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>This card demonstrates all sections: header with action, content, and footer.</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline">Secondary</Button>
        <Button>Primary</Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "Complete card structure showing header with action, content, and footer sections.",
      },
    },
  },
}
