import { HtmlTableColumnSettings, TableColumnSettings } from "../column/models/column-settings.model";
import { FirstSortingSettings } from "../column/models/first-sorting-settings.model";
import { ColumnBuilderService } from "../column/service/column-builder.service";
import { TableColumnFilterSettings } from "../filter/models/filter-column-settings.model";

export abstract class BaseTableSetttingsService {
    private columnSettings: HtmlTableColumnSettings[];
    private columnBuilderService = new ColumnBuilderService();
    private allowDuplicates = false;


    //methods for override

    //must override
    protected abstract getOrderedColumnKeys(): string[];
    protected abstract getColumnSettings(): TableColumnSettings[];
    //

    // overiding is optional
    protected getFilterColumnSettings() : TableColumnFilterSettings[] {  return []; }
    protected getFirstSortingSettings(): FirstSortingSettings { return null; }
    // 

    // end methods for override

    public getAllowDuplicatesCollumns(): boolean {
        return this.allowDuplicates;
    }

    public setAllowDuplicatesCollumns(value: boolean): void {
        this.allowDuplicates = value;
    }

    public setTableSettings(): void {
        this.columnSettings = this.columnBuilderService.createColumns(
            this.getOrderedColumnKeys(),
            this.getColumnSettings(),
            this.getFirstSortingSettings(),
            this.getFilterColumnSettings(),
            this.allowDuplicates
        );
    }

    public getTableColumnSettings(): HtmlTableColumnSettings[] {
        return this.columnSettings;
    }

    public showFilterRow(): boolean {
        return this.columnBuilderService.getShowColumnFiltersRow();
    }
}
