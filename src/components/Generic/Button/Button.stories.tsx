import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { ButtonProps } from './Button';

export default {
  title: 'Example2/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (props) => <Button {...props} />;

export const search = Template.bind({});
search.args = {
  variantBtn: 'search',
  children: 'search',
};

export const searchBy = Template.bind({});
searchBy.args = {
  variantBtn: 'searchBy',
  children: 'Title',
};

export const sortBy = Template.bind({});
sortBy.args = {
  variantBtn: 'sortBy',
  children: 'sortBy',
};
