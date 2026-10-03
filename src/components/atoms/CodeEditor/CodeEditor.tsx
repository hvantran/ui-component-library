import React from 'react';
import CodeMirror, { type Extension } from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { json } from '@codemirror/lang-json';
import { cn } from '../../../utils/cn';

export type CodeLanguage = 'javascript' | 'json';

export interface CodeEditorProps {
  /** Source code content */
  value: string;
  /** Value change callback */
  onChange?: (value: string) => void;
  /** Target programming language or custom codemirror extensions */
  language?: CodeLanguage;
  /** Custom extensions array */
  extensions?: Extension[];
  /** Editor container height, e.g. "300px" or "100%" */
  height?: string;
  /** Read-only mode */
  readOnly?: boolean;
  /** Optional field label */
  label?: string;
  /** Optional error message */
  error?: string;
  /** Editor color theme */
  theme?: 'light' | 'dark';
  /** Additional container styling */
  className?: string;
}

/**
 * Atom — CodeEditor
 *
 * Microservice code editor powered by CodeMirror 6 with zero MUI dependencies.
 * Supports JavaScript/TypeScript and JSON syntax highlighting, dark mode, and error borders.
 */
export const CodeEditor: React.FC<CodeEditorProps> = ({
  value,
  onChange,
  language = 'javascript',
  extensions: customExtensions,
  height = '300px',
  readOnly = false,
  label,
  error,
  theme = 'light',
  className,
}) => {
  const languageExtension = React.useMemo(() => {
    if (customExtensions && customExtensions.length > 0) {
      return customExtensions;
    }
    switch (language) {
      case 'json':
        return [json()];
      case 'javascript':
      default:
        return [javascript({ jsx: true, typescript: true })];
    }
  }, [language, customExtensions]);

  return (
    <div className={cn('flex flex-col gap-1 w-full', className)}>
      {label && (
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </span>
      )}

      <div
        className={cn(
          'overflow-hidden rounded-md border font-mono text-sm transition duration-150',
          error
            ? 'border-red-500'
            : 'border-gray-300 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 dark:border-gray-700',
        )}
      >
        <CodeMirror
          value={value}
          height={height}
          extensions={languageExtension}
          readOnly={readOnly}
          editable={!readOnly}
          theme={theme}
          onChange={(val) => onChange?.(val)}
        />
      </div>

      {error && (
        <p className="text-xs text-red-600 dark:text-red-400 mt-0.5">{error}</p>
      )}
    </div>
  );
};

CodeEditor.displayName = 'CodeEditor';
export default CodeEditor;
