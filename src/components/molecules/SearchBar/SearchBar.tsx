import { Search, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { cn } from '../../../utils/cn';

export interface SearchBarProps {
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  placeholder?: string;
  debounceMs?: number;
  className?: string;
  disabled?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value: controlledValue,
  onChange,
  onSearch,
  placeholder = 'Search...',
  debounceMs = 300,
  className,
  disabled = false,
}) => {
  const [internalValue, setInternalValue] = useState(controlledValue || '');

  useEffect(() => {
    if (controlledValue !== undefined) {
      setInternalValue(controlledValue);
    }
  }, [controlledValue]);

  useEffect(() => {
    if (debounceMs <= 0 || !onChange) return;
    const timer = setTimeout(() => {
      onChange(internalValue);
    }, debounceMs);
    return () => clearTimeout(timer);
  }, [internalValue, debounceMs, onChange]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInternalValue(val);
    if (debounceMs === 0 && onChange) {
      onChange(val);
    }
  };

  const handleClear = () => {
    setInternalValue('');
    if (onChange) onChange('');
    if (onSearch) onSearch('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSearch) {
      onSearch(internalValue);
    }
  };

  return (
    <div
      className={cn(
        'relative flex items-center w-full max-w-sm rounded-btn border border-secondary-300 dark:border-secondary-700 bg-surface-card-light dark:bg-surface-card-dark transition-colors',
        'focus-within:border-primary-500 focus-within:ring-2 focus-within:ring-primary-500/20',
        disabled && 'opacity-50 cursor-not-allowed bg-secondary-100 dark:bg-secondary-800',
        className
      )}
    >
      <div className="pl-3 text-secondary-400 dark:text-secondary-500 pointer-events-none">
        <Search className="w-4 h-4" aria-hidden="true" />
      </div>
      <input
        type="search"
        role="searchbox"
        disabled={disabled}
        value={internalValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        aria-label={placeholder}
        className={cn(
          'w-full py-1.5 pl-2 pr-8 text-sm bg-transparent text-secondary-900 dark:text-white',
          'placeholder:text-secondary-400 dark:placeholder:text-secondary-500 outline-none',
          disabled && 'cursor-not-allowed'
        )}
      />
      {internalValue && !disabled && (
        <button
          type="button"
          aria-label="Clear search"
          onClick={handleClear}
          className="absolute right-2 p-1 text-secondary-400 hover:text-secondary-600 dark:hover:text-secondary-200 rounded-full"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
};

SearchBar.displayName = 'SearchBar';
export default SearchBar;
