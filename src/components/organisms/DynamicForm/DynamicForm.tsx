import { Info } from 'lucide-react';
import React from 'react';
import { PropertyMetadata, PropType } from '../../../types/metadata';
import { cn } from '../../../utils/cn';
import { CodeEditor } from '../../atoms/CodeEditor';
import { Input } from '../../atoms/Input';
import { Select } from '../../atoms/Select';
import { Switch } from '../../atoms/Switch';
import { Textarea } from '../../atoms/Textarea';
import { Tooltip } from '../../atoms/Tooltip';

export interface DynamicFormProps {
  properties: PropertyMetadata[];
  onChange: (propName: string, value: any) => void;
  disabled?: boolean;
  className?: string;
  errors?: Record<string, string>;
}

const colSpanClasses: Record<number, string> = {
  1: 'col-span-12 sm:col-span-1',
  2: 'col-span-12 sm:col-span-2',
  3: 'col-span-12 sm:col-span-3',
  4: 'col-span-12 sm:col-span-4',
  6: 'col-span-12 sm:col-span-6',
  12: 'col-span-12',
};

export const DynamicForm: React.FC<DynamicFormProps> = ({
  properties,
  onChange,
  disabled = false,
  className,
  errors = {},
}) => {
  // Check whether property should be visible based on dependOn rules
  const isPropertyVisible = (prop: PropertyMetadata): boolean => {
    if (!prop.dependOn || prop.dependOn.length === 0) return true;

    return prop.dependOn.every((dep) => {
      const parentProp = properties.find((p) => p.propName === dep.propName);
      if (!parentProp) return true;

      const parentVal = parentProp.propValue ?? parentProp.propDefaultValue;
      if (dep.equals !== undefined) {
        return parentVal === dep.equals;
      }
      if (dep.notEquals !== undefined) {
        return parentVal !== dep.notEquals;
      }
      return true;
    });
  };

  const renderField = (prop: PropertyMetadata) => {
    const isFieldDisabled = disabled || prop.disabled;
    const value = prop.propValue ?? prop.propDefaultValue ?? '';
    const errorMsg = errors[prop.propName];
    const hasError = Boolean(errorMsg);

    switch (prop.propType) {
      case PropType.InputText:
        return (
          <Input
            value={value}
            disabled={isFieldDisabled}
            placeholder={prop.textFieldMeta?.placeholder}
            error={errorMsg}
            onChange={(e) => {
              onChange(prop.propName, e.target.value);
              if (prop.textFieldMeta?.onChangeEvent) {
                prop.textFieldMeta.onChangeEvent(e);
              }
            }}
          />
        );

      case PropType.Textarea:
        return (
          <Textarea
            value={value}
            disabled={isFieldDisabled}
            placeholder={prop.textareaFieldMeta?.placeholder}
            rows={prop.textareaFieldMeta?.rows || 4}
            error={hasError}
            errorMessage={errorMsg}
            onChange={(e) => {
              onChange(prop.propName, e.target.value);
              if (prop.textareaFieldMeta?.onChangeEvent) {
                prop.textareaFieldMeta.onChangeEvent(e);
              }
            }}
          />
        );

      case PropType.Selection: {
        const options =
          prop.selectionMeta?.selections.map((sel) => ({
            label: sel.label,
            value: sel.value,
          })) || [];

        return (
          <Select
            value={value}
            options={options}
            disabled={isFieldDisabled}
            error={errorMsg}
            onChange={(val) => {
              onChange(prop.propName, val);
              if (prop.selectionMeta?.onChangeEvent) {
                prop.selectionMeta.onChangeEvent(val);
              }
            }}
          />
        );
      }

      case PropType.Switcher:
        return (
          <div className="py-2">
            <Switch
              checked={Boolean(value)}
              disabled={isFieldDisabled}
              label={prop.switcherFieldMeta?.label || prop.propLabel}
              onChange={(e) => {
                const checked = e.target.checked;
                onChange(prop.propName, checked);
                if (prop.switcherFieldMeta?.onChangeEvent) {
                  prop.switcherFieldMeta.onChangeEvent(checked);
                }
              }}
            />
          </div>
        );

      case PropType.CodeEditor: {
        const language =
          (prop.codeEditorMeta?.codeLanguages?.[0] as 'javascript' | 'json') || 'javascript';
        return (
          <CodeEditor
            value={String(value)}
            readOnly={isFieldDisabled}
            height={prop.codeEditorMeta?.height || '220px'}
            language={language}
            error={errorMsg}
            onChange={(val) => {
              onChange(prop.propName, val);
              if (prop.codeEditorMeta?.onChangeEvent) {
                prop.codeEditorMeta.onChangeEvent(prop.propName)(val);
              }
            }}
          />
        );
      }

      case PropType.Autocomplete:
        return (
          <Input
            value={value}
            disabled={isFieldDisabled}
            placeholder={prop.autoCompleteMeta?.placeholder || 'Type or select...'}
            error={errorMsg}
            onChange={(e) => {
              onChange(prop.propName, e.target.value);
              if (prop.autoCompleteMeta?.onChange) {
                prop.autoCompleteMeta.onChange(e.target.value);
              }
            }}
          />
        );

      default:
        return (
          <Input
            value={value}
            disabled={isFieldDisabled}
            onChange={(e) => onChange(prop.propName, e.target.value)}
          />
        );
    }
  };

  return (
    <form
      role="form"
      onSubmit={(e) => e.preventDefault()}
      className={cn('w-full grid grid-cols-12 gap-x-4 gap-y-4 font-sans', className)}
    >
      {properties.filter(isPropertyVisible).map((prop) => {
        const span = prop.colSpan || 12;
        const spanClass = colSpanClasses[span] || 'col-span-12';
        const isSwitcher = prop.propType === PropType.Switcher;

        return (
          <div key={prop.propName} className={cn('flex flex-col', spanClass)}>
            {!isSwitcher && (
              <div className="flex items-center gap-1.5 mb-1">
                <label className="text-sm font-medium text-secondary-900 dark:text-secondary-100">
                  {prop.propLabel || prop.propName}
                  {prop.isRequired && <span className="text-error-500 ml-0.5">*</span>}
                </label>
                {prop.info && (
                  <Tooltip content={prop.info}>
                    <span className="text-secondary-400 hover:text-secondary-600 dark:hover:text-secondary-200 cursor-help">
                      <Info className="w-3.5 h-3.5" />
                    </span>
                  </Tooltip>
                )}
              </div>
            )}
            {renderField(prop)}
            {prop.propDescription && (
              <p className="mt-1 text-xs text-secondary-500 dark:text-secondary-400">
                {prop.propDescription}
              </p>
            )}
          </div>
        );
      })}
    </form>
  );
};

DynamicForm.displayName = 'DynamicForm';
export default DynamicForm;
