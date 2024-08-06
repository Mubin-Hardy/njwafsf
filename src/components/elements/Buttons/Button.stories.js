import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const buttonStories = {
  title: 'Elements/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export default buttonStories;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Basic = () => <Button />;
