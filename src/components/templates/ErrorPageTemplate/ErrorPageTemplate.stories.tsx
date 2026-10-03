import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ErrorPageTemplate } from './ErrorPageTemplate';

const meta: Meta<typeof ErrorPageTemplate> = {
  title: 'Templates/ErrorPageTemplate',
  component: ErrorPageTemplate,
};

export default meta;
type Story = StoryObj<typeof ErrorPageTemplate>;

export const ServerError500: Story = {
  args: {
    statusCode: '500',
    title: 'Internal Server Error',
    message: 'Kafka consumer cluster temporarily unavailable.',
    details: 'Error: Connection timeout to kafka:9092 after 30000ms',
    onRetry: () => alert('Retrying...'),
    onHome: () => alert('Navigating home...'),
  },
};

export const NotFound404: Story = {
  args: {
    statusCode: '404',
    title: 'Resource Not Found',
    message: 'The requested action workflow does not exist or was deleted.',
    onHome: () => alert('Navigating home...'),
  },
};
