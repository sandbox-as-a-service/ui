import type {Meta, StoryObj} from "@storybook/react-vite"
import {AlertCircle, Terminal} from "lucide-react"

import {Alert, AlertDescription, AlertTitle} from "./alert"

const meta = {
  title: "shadcn/Alert",
  component: Alert,
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the cli.</AlertDescription>
    </Alert>
  ),
}

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
    </Alert>
  ),
}

export const WithoutIcon: Story = {
  render: () => (
    <Alert>
      <AlertTitle>Notification</AlertTitle>
      <AlertDescription>This is a simple alert without an icon.</AlertDescription>
    </Alert>
  ),
}
