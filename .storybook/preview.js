/** @type { import('@storybook/svelte').Preview } */
import '../src/app.css'; // Adjust the path if necessary
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
