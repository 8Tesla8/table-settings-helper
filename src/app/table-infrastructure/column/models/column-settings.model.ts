import { SortingType } from "./first-sorting-settings.model";

export class TableColumnSettings {   
    public key: string;
    public title :string; 
    public dataPropName :string;
    public templateName : string;
    public width : string;
 
    public allowSorting : boolean; // by default BaseTableSettings set true
}

export class HtmlTableColumnSettings extends TableColumnSettings {   
    public sortingType : SortingType;

    public allowFiltering: boolean;
    public filterOptions: string[];
    public filterText: string;
}
