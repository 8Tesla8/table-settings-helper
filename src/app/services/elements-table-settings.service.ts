import { CellTemplateTypes } from "../column-table/column-table.component";
import { TableColumnSettings } from "../table-infrastructure/column/models/column-settings.model";
import { BaseTableSetttingsService } from "../table-infrastructure/services/base-table-settings.service";

enum ElementsTableColumnKeys{
    RowNumber= "rowNumber",
    Name = "name",
    Weight = "weight",
    Symbol = "symbol"
}

export class ElementsTableSettings extends BaseTableSetttingsService{
    protected getOrderedColumnKeys(): string[] {
        let columnKeys = [
            ElementsTableColumnKeys.RowNumber,
            ElementsTableColumnKeys.Name,
            ElementsTableColumnKeys.Weight,
            ElementsTableColumnKeys.Symbol,
        ];    

        return columnKeys;

    }
    protected getColumnSettings(): TableColumnSettings[] {
        let columnSettings =[
            {
                key: ElementsTableColumnKeys.RowNumber,
                title : "No", 
                templateName: CellTemplateTypes.RowNumber,
                width: "30px",
                allowSorting : false
            } as TableColumnSettings,
            {
                key: ElementsTableColumnKeys.Name,
                title : "Name", 
                dataPropName : "name",
                templateName: CellTemplateTypes.Text,
            } as TableColumnSettings,
            {
                key: ElementsTableColumnKeys.Weight,
                title : "Weight", 
                dataPropName : "weight",
                templateName: CellTemplateTypes.Number,
                allowSorting: true,
            } as TableColumnSettings,
            {
                key: ElementsTableColumnKeys.Symbol,
                title : "Symbol", 
                dataPropName : "symbol",
                templateName: CellTemplateTypes.Text,
            } as TableColumnSettings,
        ];
        
        return columnSettings;
    }

}