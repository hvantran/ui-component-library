import { default as React } from '../../../../node_modules/react';
export interface SearchBarProps {
    value?: string;
    onChange?: (value: string) => void;
    onSearch?: (value: string) => void;
    placeholder?: string;
    debounceMs?: number;
    className?: string;
    disabled?: boolean;
}
export declare const SearchBar: React.FC<SearchBarProps>;
export default SearchBar;
