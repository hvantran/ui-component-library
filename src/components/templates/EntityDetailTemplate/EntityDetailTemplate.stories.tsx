import type { Meta, StoryObj } from '@storybook/react';
import { Save } from 'lucide-react';
import React, { useState } from 'react';
import { PropType } from '../../../types/metadata';
import { EntityDetailTemplate } from './EntityDetailTemplate';

const meta: Meta<typeof EntityDetailTemplate> = {
  title: 'Templates/EntityDetailTemplate',
  component: EntityDetailTemplate,
};

export default meta;
type Story = StoryObj<typeof EntityDetailTemplate>;

export const Default: Story = {
  render: () => {
    const [properties, setProperties] = useState([
      {
        propName: 'endpointName',
        propLabel: 'Endpoint Name',
        propType: PropType.InputText,
        propValue: 'Shopee Order Ingestion',
        isRequired: true,
        colSpan: 6 as const,
      },
      {
        propName: 'method',
        propLabel: 'Method',
        propType: PropType.Selection,
        propValue: 'GET',
        colSpan: 6 as const,
        selectionMeta: {
          selections: [
            { label: 'GET', value: 'GET' },
            { label: 'POST', value: 'POST' },
          ],
        },
      },
      {
        propName: 'url',
        propLabel: 'URL',
        propType: PropType.InputText,
        propValue: 'https://partner.shopeemobile.com/api/v2/order/get_order_list',
        colSpan: 12 as const,
      },
    ]);

    const handlePropChange = (name: string, val: any) => {
      setProperties((prev) =>
        prev.map((p) => (p.propName === name ? { ...p, propValue: val } : p))
      );
    };

    return (
      <EntityDetailTemplate
        pageTitle="Endpoint Configuration"
        breadcrumbs={[
          { label: 'Endpoints', href: '/endpoints' },
          { label: 'Shopee Order Ingestion' },
        ]}
        headerActions={[
          {
            actionName: 'save',
            actionLabel: 'Save Changes',
            actionIcon: <Save className="w-4 h-4" />,
            onClick: () => alert('Changes saved!'),
          },
        ]}
        properties={properties}
        onPropertyChange={handlePropChange}
      />
    );
  },
};
