import { AfterViewInit, Component, EventEmitter, Input, Output } from "@angular/core";
import { HtmlTableColumnSettings } from "../table-infrastructure/column/models/column-settings.model";
import { SortingType } from "../table-infrastructure/column/models/first-sorting-settings.model";
import { BaseTableSetttingsService } from "../table-infrastructure/services/base-table-settings.service";

@Component({
  selector: "app-generic-table",
  templateUrl: "./generic-table.component.html",
  styleUrls: ["./generic-table.component.less"],
})
export class GenericTableComponent implements AfterViewInit {
  @Input()
  public tableData: any[];

  @Input()
  public tableSettings: BaseTableSetttingsService;

  @Output()
  public onSortingChange = new EventEmitter<HtmlTableColumnSettings>();

  @Output()
  public onFilterChange = new EventEmitter<HtmlTableColumnSettings>();


  public searchEvent(event: any, column: HtmlTableColumnSettings): void {
    //enter code
    if (event.keyCode === 13) {
      event.preventDefault();
      this.onFilterChange.emit(column);
    }
  }

  public columnClick(column: HtmlTableColumnSettings): void {
    if (!column.allowSorting) return;

    if (column.sortingType === SortingType.None)
      column.sortingType = SortingType.Ascending;
    else if (column.sortingType === SortingType.Ascending)
      column.sortingType = SortingType.Descending;
    else if (column.sortingType === SortingType.Descending)
      column.sortingType = SortingType.None;

    this.onSortingChange.emit(column);
  }

  ngAfterViewInit(): void {
    this.tableSettings.setTableSettings();
  }
}
