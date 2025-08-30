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
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
}

export default preview
