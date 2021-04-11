import { TableColumnFilterSettings } from "../../filter/models/filter-column-settings.model";
import { TableFilterOptions } from "../../filter/services/table-filter-options.service";
import { HtmlTableColumnSettings, TableColumnSettings } from "../models/column-settings.model";
import { FirstSortingSettings } from "../models/first-sorting-settings.model";

export class ColumnBuilderService {

    private showColumnFiltersRow = false;
    private filterOptions = new TableFilterOptions();


    public getShowColumnFiltersRow(): boolean{
        return this.showColumnFiltersRow;
    }

    public createColumns(
        orderedColumnKeys: string[],
        allColumnSettings: TableColumnSettings[],
        sortOptions: FirstSortingSettings,
        filterColumnSettings: TableColumnFilterSettings[],
        allowDuplicateColumn: boolean
    ): HtmlTableColumnSettings[] {
        let columnSettingMap = this.createColumnSettingsMap(allColumnSettings);
        let columnFilterSettingsMap = this.createColumnFilterSettingsMap(
            filterColumnSettings
        );

        if(allowDuplicateColumn === false) {
            this.checkOrderedColumnsOnDuplicates(orderedColumnKeys);
        }   

        let columns = this.createTableColumns(
            orderedColumnKeys,
            columnSettingMap
        );

        this.setSortingSettings(columns, sortOptions);
        this.setColumnFilterOptins(columns, columnFilterSettingsMap);

        return columns;
    }

    private checkOrderedColumnsOnDuplicates(orderedColumnKeys:string[]):void{
        let map = new Map<string, string>();

        let duplicateKeys = "";

        orderedColumnKeys.forEach((key) => {

            if (map.has(key)){
                duplicateKeys += key + ",";
            }
            else {
                map.set(key, key);
            }

        });

        if(duplicateKeys !== ""){
            throw (
                "Found duplicate in collection OrderedColumnKeys. Key:" +
                duplicateKeys +
                '. Set alloDuplicate(s) true or remove key from the collection.'
            );
        }
    }

    private createColumnSettingsMap(
        columnSettings: TableColumnSettings[]
    ): Map<string, HtmlTableColumnSettings> {
        let map = new Map<string, HtmlTableColumnSettings>();

        let duplicateKeys = "";

        columnSettings.forEach((columnSetting) => {
            let key = columnSetting.key;

            if (!map.has(key)) {
                let column = Object.assign(
                    new HtmlTableColumnSettings(),
                    columnSetting
                );
                column.allowFiltering = false;

                map.set(key, column);
            }
            else {
                duplicateKeys += key + ', ';
            }

        });

        if(duplicateKeys !== ""){
            throw new Error(
                'Collection TableColumnSettings[] contains duplicate key(s):' + duplicateKeys
            );
        }
        
        return map;
    }

    private createColumnFilterSettingsMap(
        filterColumnSettings: TableColumnFilterSettings[]
    ): Map<string, TableColumnFilterSettings> {
        let map = new Map<string, TableColumnFilterSettings>();

        let duplicateKeys = "";

        filterColumnSettings.forEach((filterSettings) => {
            let key = filterSettings.key;

            if (!map.has(key)) {
                map.set(key, filterSettings);
            }
            else{
                duplicateKeys += key + ', ';               
            }

        });

        if(duplicateKeys !== ""){
            throw new Error(
                'Collectuion TableColumnFilterSettings[] contains duplicate key(s):' + duplicateKeys
            );                
        }

        return map;
    }

    private createTableColumns(
        orderedColumnKeys: string[],
        columnsMap: Map<string, HtmlTableColumnSettings>
    ): HtmlTableColumnSettings[] {
        let columns = [];

        let absentKey = "";

        orderedColumnKeys.forEach((key) => {
            if (!columnsMap.has(key)) {
                absentKey += key + ', ';
            }
            else {
                columns.push(columnsMap.get(key));
            }
        });

        if(absentKey !== ""){
            throw (
                'Can not create column settings with key(s):' +
                absentKey +
                ', add TableColumnSettings with that key(s) or remove it from OrderedColumnsKey collection.'
            );
        }

        return columns;
    }

    private setSortingSettings(
        columns: HtmlTableColumnSettings[],
        sortOptions: FirstSortingSettings
    ): void {
        columns.forEach((column) => {
            if (column.allowSorting !== false){
                column.allowSorting = true;
            } 

            if (sortOptions !== null && column.key === sortOptions.columnKey) {
                column.sortingType = sortOptions.sortingType;
            }
        });
    }

    private setColumnFilterOptins(
        columns: HtmlTableColumnSettings[],
        columnFilterSettingsMap: Map<string, TableColumnFilterSettings>
    ): void {
        columns.forEach((column)=> {
            let key = column.key;

            if (columnFilterSettingsMap.has(key)){
                let filterSettings = columnFilterSettingsMap.get(key);

                column.allowFiltering = true;
                column.filterOptions = this.filterOptions.getFilterOperators(
                    filterSettings.filterOptionsList
                );

                this.showColumnFiltersRow = true;
            }

        });
    }
}
