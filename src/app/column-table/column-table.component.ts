import { Component, Input } from '@angular/core';
import { HtmlTableColumnSettings } from '../table-infrastructure/column/models/column-settings.model';

@Component({
  selector: 'app-column-table',
  templateUrl: './column-table.component.html',
  styleUrls: ['./column-table.component.less']
})
export class ColumnTableComponent{

  @Input()
  public column: HtmlTableColumnSettings;

  @Input()
  public data: any;

  @Input()
  public rowIndex: number;

}

export enum CellTemplateTypes {
  RowNumber = "rowNumberTemplate",
  Text = "textTemplate",
  Number = "numberTemplate",
}