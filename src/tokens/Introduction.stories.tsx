import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const Introduction: React.FC = () => (
  <div className="p-8 max-w-2xl font-sans">
    <h1 className="text-3xl font-bold text-primary-600 mb-4">@hvantran/ui-component-library</h1>
    <p className="text-secondary-600 mb-6">
      Unified Atomic Design System & Component Library for Project Management Microservices.
    </p>
    <div className="grid grid-cols-2 gap-4">
      <div className="p-4 rounded-card border border-secondary-200 bg-surface-card-light dark:bg-surface-card-dark">
        <h2 className="font-semibold text-lg mb-2">Atomic Levels</h2>
        <ul className="list-disc list-inside text-sm text-secondary-500 space-y-1">
          <li>Tokens (Colors, Typography, Spacing)</li>
          <li>Atoms (Button, Input, Badge, Card...)</li>
          <li>Molecules (FormField, Breadcrumbs...)</li>
          <li>Organisms (DataTable, DynamicForm...)</li>
          <li>Templates (EntitySummaryTemplate...)</li>
        </ul>
      </div>
      <div className="p-4 rounded-card border border-secondary-200 bg-surface-card-light dark:bg-surface-card-dark">
        <h2 className="font-semibold text-lg mb-2">Key Principles</h2>
        <ul className="list-disc list-inside text-sm text-secondary-500 space-y-1">
          <li>Semantic HTML5 + Tailwind CSS</li>
          <li>Zero MUI runtime dependencies</li>
          <li>Strict 1 Page to 1 Template</li>
          <li>Full React Node & Ref compatibility</li>
        </ul>
      </div>
    </div>
  </div>
);

const meta: Meta<typeof Introduction> = {
  title: '00-Introduction/Welcome',
  component: Introduction,
};

export default meta;
type Story = StoryObj<typeof Introduction>;

export const Default: Story = {};
