import { TableColumnFilterSettings } from "../../filter/models/filter-column-settings.model";
import { TableFilterOptions } from "../../filter/services/table-filter-options.service";
import { DevExtremTableColumnSettings, TableColumnSettings } from "../models/column-settings.model";
import { FirstSortingSettings } from "../models/first-sorting-settings.model";

export class ColumnBuilderService {

    private showColumnFiltersRow = false;
    private filterOptions = new TableFilterOptions();


    public getshowColumnFiltersRow(): boolean{
        return this.showColumnFiltersRow;
    }

    public createColumns(
        orderedColumnKeys: string[],
        allColumnSettings: TableColumnSettings[],
        sortOptions: FirstSortingSettings,
        filterColumnSettings: TableColumnFilterSettings[]
    ): DevExtremTableColumnSettings[] {
        let columnSettingMap = this.createColumnSettingsMap(allColumnSettings);
        let columnFilterSettingsMap = this.createColumnFilterSettingsMap(
            filterColumnSettings
        );

        let columns = this.createTableColumns(
            orderedColumnKeys,
            columnSettingMap
        );

        this.setSortingSettings(columns, sortOptions);
        this.setColumnFilterOptins(columns, columnFilterSettingsMap);

        return columns;
    }


    private createColumnSettingsMap(
        columnSettings: TableColumnSettings[]
    ): Map<string, DevExtremTableColumnSettings> {
        let map = new Map<string, DevExtremTableColumnSettings>();

        columnSettings.forEach((columnSetting) => {
            let key = columnSetting.key;

            if (!map.has(key)) {
                let column = Object.assign(
                    new DevExtremTableColumnSettings(),
                    columnSetting
                );
                column.allowFiltering = false;

                map.set(key, column);
            } else
                throw new Error(
                    'TableColumnSettings[] already has a key:' + key
                );
        });

        return map;
    }

    private createColumnFilterSettingsMap(
        filterColumnSettings: TableColumnFilterSettings[]
    ): Map<string, TableColumnFilterSettings> {
        let map = new Map<string, TableColumnFilterSettings>();

        filterColumnSettings.forEach((filterSettings) => {
            var key = filterSettings.key;

            if (!map.has(key)) map.set(key, filterSettings);
            else
                throw new Error(
                    'TableColumnFilterSettings[] already has a key:' + key
                );
        });

        return map;
    }

    private createTableColumns(
        orderedColumnKeys: string[],
        columnsMap: Map<string, DevExtremTableColumnSettings>
    ): DevExtremTableColumnSettings[] {
        let columns = [];

        orderedColumnKeys.forEach((key) => {
            if (!columnsMap.has(key))
                throw (
                    'Can not create column with key:' +
                    key +
                    ', add TableColumnSettings with that key or remove it from ColumnsKey collection'
                );

            columns.push(columnsMap.get(key));
        });

        return columns;
    }

    private setSortingSettings(
        columns: DevExtremTableColumnSettings[],
        sortOptions: FirstSortingSettings
    ): void {
        columns.forEach((column) => {
            if (column.allowSorting !== false) column.allowSorting = true;

            if (sortOptions !== null && column.key === sortOptions.columnKey) {
                column.sortingType = sortOptions.sortingType;
            }
        });
    }

    private setColumnFilterOptins(
        columns: DevExtremTableColumnSettings[],
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
