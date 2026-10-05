import { default as React } from '../../../../../node_modules/react';
import { EntityDetailTemplateProps } from '../../EntityDetailTemplate';
import { DataTableProps } from '../../../organisms/DataTable';
export interface ExtEndpointDetailsTemplateProps extends Omit<EntityDetailTemplateProps, 'pageTitle'> {
    pageTitle?: string;
    tableProps?: DataTableProps<any>;
}
export declare const ExtEndpointDetailsTemplate: React.FC<ExtEndpointDetailsTemplateProps>;
export default ExtEndpointDetailsTemplate;
