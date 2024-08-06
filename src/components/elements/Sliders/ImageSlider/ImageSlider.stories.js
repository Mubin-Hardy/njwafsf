import { ImageSlider } from './ImageSlider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const imageSliderStories = {
  title: 'Elements/ImageSlider',
  component: ImageSlider,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};
export default imageSliderStories;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Basic = () => <ImageSlider />;
