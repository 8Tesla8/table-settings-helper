import { TableColumnSettings } from "../table-infrastructure/column/models/column-settings.model";
import { BaseTableSetttingsService } from "../table-infrastructure/services/base-table-settings.service";

enum StudentdColumnKey {
  Number = "number",
  Country = "country",
  Name = "name",
  Gender = "gender",
}

export class StudentsTableSettings extends BaseTableSetttingsService {
  protected getOrderedColumnKeys(): string[] {
    let columnKeys = [
        StudentdColumnKey.Number,
        StudentdColumnKey.Name,
        StudentdColumnKey.Gender,
        StudentdColumnKey.Country,
    ];

    return columnKeys;
  }

  protected getColumnSettings(): TableColumnSettings[] {
    let columnSettings =[
        {
            key: StudentdColumnKey.Number,
            title : "No", 
            dataPropName : "",
            templateName: "rowNumberTemplate",
            width: "20px",
            allowSorting: false,
        } as TableColumnSettings,
        {
            key: StudentdColumnKey.Name,
            title : "Name", 
            dataPropName : "name",
            templateName: "textTemplate",
        } as TableColumnSettings,
        {
            key: StudentdColumnKey.Gender,
            title : "Gender", 
            dataPropName : "gender",
            templateName: "textTemplate",
        } as TableColumnSettings,
        {
            key: StudentdColumnKey.Country,
            title : "Country", 
            dataPropName : "country",
            templateName: "textTemplate",
        } as TableColumnSettings,
    ];

    return columnSettings;
  }
}
