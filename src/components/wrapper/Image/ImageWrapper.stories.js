import WandrImage from './WandrImage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const wandrImageStories = {
  title: 'Wrapper/WandrImage',
  component: WandrImage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export default wandrImageStories;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Basic = () => <WandrImage />;
