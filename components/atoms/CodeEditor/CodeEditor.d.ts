import { default as React } from '../../../../node_modules/react';
import { Extension } from '@uiw/react-codemirror';
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
export declare const CodeEditor: React.FC<CodeEditorProps>;
export default CodeEditor;
