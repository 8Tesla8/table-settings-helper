import { CellTemplateTypes } from "../column-table/column-table.component";
import { TableColumnSettings } from "../table-infrastructure/column/models/column-settings.model";
import { BaseTableSetttingsService } from "../table-infrastructure/services/base-table-settings.service";

enum StudentsTableColumnKey {
  RowNumber = "number",
  Country = "country",
  Name = "name",
  Gender = "gender",
}

export class StudentsTableSettings extends BaseTableSetttingsService {
  protected getOrderedColumnKeys(): string[] {
    let columnKeys = [
        StudentsTableColumnKey.RowNumber,
        StudentsTableColumnKey.Name,
        StudentsTableColumnKey.Gender,
        StudentsTableColumnKey.Country,
    ];

    return columnKeys;
  }

  protected getColumnSettings(): TableColumnSettings[] {
    let columnSettings =[
        {
            key: StudentsTableColumnKey.RowNumber,
            title : "No", 
            templateName: CellTemplateTypes.RowNumber,
            width: "20px",
            allowSorting: false,
        } as TableColumnSettings,
        {
            key: StudentsTableColumnKey.Name,
            title : "Name", 
            dataPropName : "name",
            templateName: CellTemplateTypes.Text,
        } as TableColumnSettings,
        {
            key: StudentsTableColumnKey.Gender,
            title : "Gender", 
            dataPropName : "gender",
            templateName: CellTemplateTypes.Text,
        } as TableColumnSettings,
        {
            key: StudentsTableColumnKey.Country,
            title : "Country", 
            dataPropName : "country",
            templateName: CellTemplateTypes.Text,
        } as TableColumnSettings,
    ];

    return columnSettings;
  }
}
