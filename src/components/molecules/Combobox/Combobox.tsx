import { Check, ChevronDown, X } from 'lucide-react';
import React, { useEffect, useId, useMemo, useRef, useState } from 'react';
import { cn } from '../../../utils/cn';

export interface ComboboxOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface ComboboxProps {
  options: ComboboxOption[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  clearable?: boolean;
  className?: string;
  ariaLabel?: string;
}

export const Combobox: React.FC<ComboboxProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option...',
  disabled = false,
  clearable = true,
  className,
  ariaLabel = 'Combobox',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listboxId = useId();

  const selectedOption = useMemo(
    () => options.find((opt) => opt.value === value),
    [options, value]
  );

  const filteredOptions = useMemo(() => {
    if (!searchQuery.trim()) return options;
    return options.filter((opt) =>
      opt.label.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [options, searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchQuery('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (val: string) => {
    onChange(val);
    setIsOpen(false);
    setSearchQuery('');
    setActiveIndex(-1);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange('');
    setSearchQuery('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    if (!isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setIsOpen(true);
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((prev) =>
        prev < filteredOptions.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((prev) =>
        prev > 0 ? prev - 1 : filteredOptions.length - 1
      );
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      e.preventDefault();
      const targetOption = filteredOptions[activeIndex];
      if (targetOption && !targetOption.disabled) {
        handleSelect(targetOption.value);
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setIsOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn('relative w-full font-sans', className)}
      onKeyDown={handleKeyDown}
    >
      <div
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls={listboxId}
        aria-label={ariaLabel}
        onClick={() => {
          if (!disabled) {
            setIsOpen(!isOpen);
            if (!isOpen) {
              setTimeout(() => inputRef.current?.focus(), 0);
            }
          }
        }}
        className={cn(
          'flex items-center justify-between w-full min-h-[2.5rem] px-3 py-2 text-sm rounded-btn border transition-colors cursor-pointer bg-surface-card-light dark:bg-surface-card-dark',
          isOpen
            ? 'border-primary-500 ring-2 ring-primary-500/20'
            : 'border-secondary-300 dark:border-secondary-700 hover:border-secondary-400',
          disabled && 'opacity-50 cursor-not-allowed bg-secondary-100 dark:bg-secondary-800'
        )}
      >
        <span
          className={cn(
            'truncate',
            selectedOption
              ? 'text-secondary-900 dark:text-white font-medium'
              : 'text-secondary-400 dark:text-secondary-500'
          )}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>

        <div className="flex items-center gap-1.5 ml-2 shrink-0">
          {clearable && selectedOption && !disabled && (
            <button
              type="button"
              aria-label="Clear selection"
              onClick={handleClear}
              className="p-0.5 rounded text-secondary-400 hover:text-secondary-600 dark:hover:text-secondary-200"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
          <ChevronDown
            className={cn(
              'w-4 h-4 text-secondary-400 transition-transform duration-200',
              isOpen && 'rotate-180 text-primary-500'
            )}
          />
        </div>
      </div>

      {isOpen && (
        <div
          id={listboxId}
          role="listbox"
          className="absolute z-50 w-full mt-1.5 py-1 bg-surface-card-light dark:bg-surface-card-dark rounded-card shadow-dropdown border border-secondary-200 dark:border-secondary-800 max-h-60 overflow-auto focus:outline-none"
        >
          <div className="p-2 border-b border-secondary-100 dark:border-secondary-800">
            <input
              ref={inputRef}
              type="text"
              role="searchbox"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setActiveIndex(0);
              }}
              className="w-full px-2.5 py-1 text-xs rounded border border-secondary-200 dark:border-secondary-700 bg-secondary-50 dark:bg-secondary-900 text-secondary-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500"
            />
          </div>

          <div className="py-1">
            {filteredOptions.length === 0 ? (
              <div className="px-3 py-2 text-xs text-secondary-400 text-center">
                No options found
              </div>
            ) : (
              filteredOptions.map((opt, idx) => {
                const isSelected = opt.value === value;
                const isHighlighted = idx === activeIndex;

                return (
                  <div
                    key={opt.value}
                    role="option"
                    aria-selected={isSelected}
                    aria-disabled={opt.disabled}
                    onClick={() => {
                      if (!opt.disabled) {
                        handleSelect(opt.value);
                      }
                    }}
                    onMouseEnter={() => setActiveIndex(idx)}
                    className={cn(
                      'flex items-center justify-between px-3 py-2 text-sm cursor-pointer select-none transition-colors',
                      isHighlighted && 'bg-secondary-100 dark:bg-secondary-800',
                      isSelected && 'font-medium text-primary-600 dark:text-primary-400',
                      opt.disabled && 'opacity-40 cursor-not-allowed'
                    )}
                  >
                    <span>{opt.label}</span>
                    {isSelected && <Check className="w-4 h-4 shrink-0 ml-2" />}
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
};

Combobox.displayName = 'Combobox';
export default Combobox;
