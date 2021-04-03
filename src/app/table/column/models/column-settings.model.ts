import { SortingType } from "./first-sorting-settings.model";

export class TableColumnSettings {   
    public key: string;
    public title :string; 
    public dataPropName :string;
    public templateName : string;
    public width : number;
 
    public allowSorting : boolean; // by default BaseTableSettings set true
}

export class DevExtremTableColumnSettings extends TableColumnSettings {   
    public sortingType : SortingType;

    public allowFiltering: boolean;
    public filterOptions: string[];
}

export enum ColumnDataType {
    Number = 'number',
    Boolean = 'boolean',
    String = 'string',
    Date = 'date',
    Datetime ='datetime',
}