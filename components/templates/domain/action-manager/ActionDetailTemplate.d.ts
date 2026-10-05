import { default as React } from '../../../../../node_modules/react';
import { EntityDetailTemplateProps } from '../../EntityDetailTemplate';
import { DataTableProps } from '../../../organisms/DataTable';
export interface ActionDetailTemplateProps extends Omit<EntityDetailTemplateProps, 'pageTitle'> {
    pageTitle?: string;
    jobsTableProps?: DataTableProps<any>;
    onAddJob?: () => void;
    children?: React.ReactNode;
}
export declare const ActionDetailTemplate: React.FC<ActionDetailTemplateProps>;
export default ActionDetailTemplate;
