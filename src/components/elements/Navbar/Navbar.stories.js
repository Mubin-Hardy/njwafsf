import { Navbar } from './Navbar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const navbarStories = {
  title: 'Elements/navbar',
  component: Navbar,
};

export default navbarStories;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Basic = () => <Navbar />;

export const Default = Basic.bind({});
