import React from 'react';
import { AbModal, AbModalProps } from '../src';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Componentes/AbModal',
  component: AbModal,
} as ComponentMeta<typeof AbModal>;

const Template: ComponentStory<typeof AbModal> = args => <AbModal {...args} />;

export const Primario = Template.bind({});

Primario.args = {
  children: <input type="text" />,
  aberta: true,
  titulo: 'Login',
} as AbModalProps;
