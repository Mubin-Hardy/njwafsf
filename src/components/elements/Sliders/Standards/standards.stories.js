import { StandardsSlider } from './Standards';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const standardsSliderStories = {
  title: 'Elements/StandardsSlider',
  component: StandardsSlider,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export default standardsSliderStories;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Basic = () => <StandardsSlider />;
