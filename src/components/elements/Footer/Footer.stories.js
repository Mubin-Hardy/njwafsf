import Footer from './Footer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const footerStories = {
  title: 'Elements/Footer',
  component: Footer,
};

export default footerStories;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Basic = () => <Footer />;

export const Default = Basic.bind({});
