import type {Meta, StoryObj} from "@storybook/react-vite"
import {MoreHorizontal} from "lucide-react"

import {Button} from "../button"
import {Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "./card"

const meta = {
  title: "shadcn/Card",
  component: Card,
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

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
        <p>Content with header action. Content with header action.</p>
      </CardContent>
    </Card>
  ),
}

export const WithFooter: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card with Footer</CardTitle>
        <CardDescription>This card includes a footer with actions.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Content with footer actions below. Content with footer actions below.</p>
      </CardContent>
      <CardFooter>
        <div className="space-x-4">
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </div>
      </CardFooter>
    </Card>
  ),
}

export const ContentOnly: Story = {
  render: () => (
    <Card>
      <CardContent>
        <p>A simple card with only content, no header or footer.</p>
      </CardContent>
    </Card>
  ),
}

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
        <div className="space-x-4">
          <Button variant="outline">Secondary</Button>
          <Button>Primary</Button>
        </div>
      </CardFooter>
    </Card>
  ),
}
