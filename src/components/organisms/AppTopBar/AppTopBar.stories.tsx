import type { Meta, StoryObj } from '@storybook/react';
import { Bell } from 'lucide-react';
import React, { useState } from 'react';
import { Badge } from '../../atoms/Badge';
import { Button } from '../../atoms/Button';
import { SearchBar } from '../../molecules/SearchBar';
import { AppTopBar } from './AppTopBar';

const meta: Meta<typeof AppTopBar> = {
  title: 'Organisms/AppTopBar',
  component: AppTopBar,
};

export default meta;
type Story = StoryObj<typeof AppTopBar>;

export const Default: Story = {
  render: () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
      <div className={darkMode ? 'dark bg-slate-900 min-h-[160px]' : 'bg-slate-50 min-h-[160px]'}>
        <AppTopBar
          title={
            <div className="flex items-center gap-2">
              <span className="font-bold text-primary-600">PM</span>
              <span>Microservices</span>
            </div>
          }
          searchSlot={<SearchBar placeholder="Search resources... (Press /)" />}
          isDarkMode={darkMode}
          onThemeToggle={() => setDarkMode(!darkMode)}
          actionsSlot={
            <Button variant="ghost" size="sm" aria-label="Notifications">
              <Bell className="w-4 h-4" />
            </Button>
          }
          userSlot={
            <div className="flex items-center gap-2 text-xs">
              <div className="w-7 h-7 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                HT
              </div>
              <Badge variant="success" size="sm">Admin</Badge>
            </div>
          }
        />
      </div>
    );
  },
};
