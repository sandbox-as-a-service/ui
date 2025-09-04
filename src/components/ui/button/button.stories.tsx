import type {Meta, StoryObj} from "@storybook/react-vite"
import {ArrowRight, Download, Plus, Search, Settings} from "lucide-react"
import {fn} from "storybook/test"

import {Button} from "./button"

const meta = {
  title: "shadcn/Button",
  component: Button,
  argTypes: {
    variant: {
      control: {type: "select"},
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
      description: "The visual style variant of the button",
    },
    size: {
      control: {type: "select"},
      options: ["default", "sm", "lg", "icon"],
      description: "The size of the button",
    },
    asChild: {
      control: {type: "boolean"},
      description: "Change the component to use Radix's Slot for composition",
    },
    disabled: {
      control: {type: "boolean"},
      description: "Whether the button is disabled",
    },
  },
  args: {
    onClick: fn(),
    children: "Button",
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// Primary story - the main interactive example
export const Default: Story = {
  args: {
    children: "Button",
  },
}

// Real-world use case examples
export const DestructiveAction: Story = {
  args: {
    variant: "destructive",
    children: "Delete Account",
  },
  parameters: {
    docs: {
      description: {
        story: "Use for destructive actions that require user confirmation.",
      },
    },
  },
}

export const CallToAction: Story = {
  args: {
    size: "lg",
    children: "Get Started",
  },
  parameters: {
    docs: {
      description: {
        story: "Large button for primary call-to-action scenarios.",
      },
    },
  },
}

export const IconButton: Story = {
  args: {
    size: "icon",
    variant: "outline",
    "aria-label": "Settings",
    children: <Settings className="size-4" />,
  },
  parameters: {
    docs: {
      description: {
        story: "Icon-only button with proper accessibility attributes.",
      },
    },
  },
}

export const ButtonWithLeadingIcon: Story = {
  args: {
    children: (
      <>
        <Plus className="size-4" />
        Add Item
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "Button with leading icon and text for common actions.",
      },
    },
  },
}

export const ButtonWithTrailingIcon: Story = {
  args: {
    children: (
      <>
        Continue
        <ArrowRight className="size-4" />
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "Button with trailing icon to indicate direction or action.",
      },
    },
  },
}

export const DownloadButton: Story = {
  args: {
    variant: "outline",
    children: (
      <>
        <Download className="size-4" />
        Download
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "Example of a download button with icon and descriptive text.",
      },
    },
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Loading...",
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled state for loading or unavailable actions.",
      },
    },
  },
}

// Visual showcase stories for comprehensive overview
export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4 p-4">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "All available button variants. Use the Controls panel to test individual variants interactively.",
      },
    },
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4 p-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon" aria-label="Search">
        <Search className="size-4" />
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All available button sizes. Use the Controls panel to test individual sizes interactively.",
      },
    },
  },
}
