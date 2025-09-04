import "@fontsource-variable/geist"
// provides "Geist Variable"
import "@fontsource-variable/geist-mono"
import type {Preview} from "@storybook/react-vite"

// provides "Geist Mono Variable"
import "../src/index.css"

// Import Tailwind CSS styles

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="flex min-h-full items-center justify-center">
        <div className="w-full">
          <Story />
        </div>
      </div>
    ),
  ],
}

export default preview
