// Button.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Component imports
import { Button} from '../index';

// Story
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Det Fælles Design System/Knapper (Buttons)',
  component: Button,
  args: {type: 'button', disabled: false, visual: "primary"}
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = { label: 'Default Button' };

export const DisabledPrimary = Template.bind({});
DisabledPrimary.args = { label: 'Disabled Button', visual: 'primary', disabled: true  };

export const Secondary = Template.bind({});
Secondary.args = { label: 'Secondary Button', visual: 'secondary'};

export const Tertiary = Template.bind({});
Tertiary.args = { label: 'Tertiary Button', visual: 'tertiary' };