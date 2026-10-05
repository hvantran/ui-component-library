import { describe, expect, it } from 'vitest';
import pkg from '../package.json';
import {
  AppFooter,
  AppSidebar,
  AppSwitcher,
  AppTopBar,
  Badge,
  BoardColumn,
  BoardView,
  Breadcrumbs,
  Button,
  Card,
  Chip,
  CodeEditor,
  Combobox,
  ConfirmationDialog,
  DarkModeToggle,
  DashboardTemplate,
  DataTable,
  Divider,
  DynamicForm,
  EmptyState,
  EntityDetailTemplate,
  EntitySummaryTemplate,
  ErrorPageTemplate,
  FloatingActions,
  FormField,
  Input,
  JobStatusBadge,
  Modal,
  PageHeader,
  Pagination,
  ProgressBar,
  PropType,
  SearchBar,
  Select,
  Skeleton,
  Spinner,
  StatCard,
  Switch,
  Tabs,
  Textarea,
  TextTruncate,
  ThemeProvider,
  Tooltip,
  VERSION,
  ViewModeToggle,
  WizardCreationTemplate,
  WizardStepper,
  cn,
  useTheme,
} from './index';

describe('ui-component-library entry', () => {
  it('exports valid version string', () => {
    expect(VERSION).toBe(pkg.version);
  });

  it('exports utility functions', () => {
    expect(typeof cn).toBe('function');
  });

  it('exports core atomic components', () => {
    expect(Button).toBeDefined();
    expect(Card).toBeDefined();
    expect(Input).toBeDefined();
    expect(Badge).toBeDefined();
    expect(Select).toBeDefined();
    expect(ProgressBar).toBeDefined();
    expect(Modal).toBeDefined();
    expect(CodeEditor).toBeDefined();
    expect(Chip).toBeDefined();
    expect(Tooltip).toBeDefined();
    expect(Skeleton).toBeDefined();
    expect(Spinner).toBeDefined();
    expect(Textarea).toBeDefined();
    expect(Switch).toBeDefined();
    expect(Divider).toBeDefined();
  });

  it('exports molecule components', () => {
    expect(FormField).toBeDefined();
    expect(Breadcrumbs).toBeDefined();
    expect(ConfirmationDialog).toBeDefined();
    expect(TextTruncate).toBeDefined();
    expect(SearchBar).toBeDefined();
    expect(Pagination).toBeDefined();
    expect(EmptyState).toBeDefined();
    expect(Tabs).toBeDefined();
    expect(JobStatusBadge).toBeDefined();
    expect(DarkModeToggle).toBeDefined();
    expect(ViewModeToggle).toBeDefined();
    expect(StatCard).toBeDefined();
    expect(Combobox).toBeDefined();
  });

  it('exports organism components', () => {
    expect(DataTable).toBeDefined();
    expect(DynamicForm).toBeDefined();
    expect(WizardStepper).toBeDefined();
    expect(FloatingActions).toBeDefined();
    expect(PageHeader).toBeDefined();
    expect(AppSwitcher).toBeDefined();
    expect(AppTopBar).toBeDefined();
    expect(AppSidebar).toBeDefined();
    expect(AppFooter).toBeDefined();
    expect(BoardColumn).toBeDefined();
    expect(BoardView).toBeDefined();
  });

  it('exports template components and types', () => {
    expect(EntitySummaryTemplate).toBeDefined();
    expect(EntityDetailTemplate).toBeDefined();
    expect(WizardCreationTemplate).toBeDefined();
    expect(DashboardTemplate).toBeDefined();
    expect(ErrorPageTemplate).toBeDefined();
    expect(PropType.InputText).toBe(0);
  });

  it('exports theme engine', () => {
    expect(ThemeProvider).toBeDefined();
    expect(useTheme).toBeDefined();
  });
});
