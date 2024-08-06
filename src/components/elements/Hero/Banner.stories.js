import { Banner } from './Banner';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const bannerStories = {
  title: 'Elements/Hero',
  component: Banner,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    
  },
};

export default bannerStories;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Basic = (args) => <Banner {...args} />;
