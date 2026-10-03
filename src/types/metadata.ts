import React from 'react';

export enum PropType {
  InputText = 0,
  Textarea = 1,
  Selection = 2,
  CodeEditor = 3,
  Switcher = 4,
  Autocomplete = 5,
}

export interface TextFieldMetadata {
  placeholder?: string;
  onChangeEvent?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

export interface TextareaFieldMetadata {
  placeholder?: string;
  rows?: number;
  onChangeEvent?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export interface SelectionOption {
  label: string;
  value: any;
}

export interface SelectionMetadata {
  selections: SelectionOption[];
  isMultiple?: boolean;
  onChangeEvent?: (value: any) => void;
}

export interface SwitcherFieldMeta {
  label?: string;
  onChangeEvent?: (checked: boolean) => void;
}

export interface CodeEditorMetadata {
  height?: string;
  codeLanguages?: string[];
  onChangeEvent?: (propertyName: string) => (value: string) => void;
}

export interface AutocompleteMeta {
  options: any[];
  isMultiple?: boolean;
  getOptionLabel?: (option: any) => string;
  onChange?: (value: any) => void;
  placeholder?: string;
}

export interface PropertyMetadata {
  propName: string;
  propValue: any;
  propDefaultValue?: any;
  propType: PropType;
  propLabel?: string;
  isRequired?: boolean;
  info?: string;
  disabled?: boolean;
  colSpan?: 1 | 2 | 3 | 4 | 6 | 12;
  dependOn?: Array<{ propName: string; equals?: any; notEquals?: any }>;
  propDescription?: string;

  textFieldMeta?: TextFieldMetadata;
  textareaFieldMeta?: TextareaFieldMetadata;
  selectionMeta?: SelectionMetadata;
  switcherFieldMeta?: SwitcherFieldMeta;
  codeEditorMeta?: CodeEditorMetadata;
  autoCompleteMeta?: AutocompleteMeta;
}

export interface ColumnActionMetadata<T = any> {
  actionName: string;
  actionLabel: string;
  actionIcon: React.ReactNode;
  onClick: (row: T) => (event: React.MouseEvent) => void;
  visible?: (row: T) => boolean;
  disabled?: (row: T) => boolean;
}

export interface ColumnMetadata<T = any> {
  id: string;
  label: string;
  isHidden?: boolean;
  minWidth?: number | string;
  isKeyColumn?: boolean;
  isSortable?: boolean;
  align?: 'left' | 'center' | 'right';
  format?: (value: any, row: T) => React.ReactNode;
  renderCell?: (row: T) => React.ReactNode;
  actions?: ColumnActionMetadata<T>[];
}

export interface PagingOptionMetadata {
  rowsPerPageOptions: number[];
  pageSize: number;
  pageIndex: number;
  orderBy: string;
  searchText?: string;
  onPageChange: (pageIndex: number, pageSize: number, orderBy: string, searchText: string) => void;
}

export interface PagingResult<T = any> {
  totalElements: number;
  content: T[];
  elementTransformCallback?: (record: any) => T;
}

export interface TableMetadata<T = any> {
  name: string;
  columns: ColumnMetadata<T>[];
  pagingOptions: PagingOptionMetadata;
  pagingResult: PagingResult<T>;
  keyColumn: string;
  visibleSearchbar?: boolean;
  searchPlaceholder?: string;
  loading?: boolean;
  onRowClickCallback?: (record: T) => void;
  headerActions?: React.ReactNode;
}

export interface StepMetadata {
  name: string;
  label: string;
  description?: string;
  isOptional?: boolean;
  properties: PropertyMetadata[];
  onFinishStepClick?: (steps: StepMetadata[]) => void;
}

export interface SpeedDialActionMetadata {
  actionName: string;
  actionLabel: string;
  actionIcon: React.ReactNode;
  onClick: (event: React.MouseEvent) => void;
  disabled?: boolean;
}

export interface GenericActionMetadata {
  actionName: string;
  actionLabel: string;
  actionIcon?: React.ReactNode;
  onClick?: (data?: any) => void;
  disabled?: boolean;
  isSecondary?: boolean;
}

export interface TabMetadata {
  name: string;
  label?: string;
  properties?: PropertyMetadata[];
  tableMetadata?: TableMetadata;
  content?: React.ReactNode;
}

export interface PageEntityMetadata<T = any> {
  pageName: string;
  pageTitle?: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
  pageEntityActions?: GenericActionMetadata[];
  floatingActions?: SpeedDialActionMetadata[];
  stepMetadatas?: StepMetadata[];
  tableMetadata?: TableMetadata<T>;
  properties?: PropertyMetadata[];
  tabMetadata?: TabMetadata[];
}
