import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
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


  @Output()
  public onFilterChange = new EventEmitter<HtmlTableColumnSettings>();

  public titleMargin(column: HtmlTableColumnSettings): string {
    if (this.tableSettings.showFilterRow() && !column.allowFiltering) {
      return "-19px";
    }
  }

  @Input()
  public tableSettings: BaseTableSetttingsService;

  public searchEvent(event: any, column: HtmlTableColumnSettings): void {
    if (!column.allowFiltering) return;

    //enter code
    if (event.keyCode === 13) {
      event.preventDefault();
      this.onFilterChange.emit(column);
    }
  }

  @Output()
  public onSortingChange = new EventEmitter<HtmlTableColumnSettings>();


  public columnClick(column: HtmlTableColumnSettings): void {
    if (!column.allowSorting) return;

    if (
      column.sortingType === SortingType.None ||
      column.sortingType === undefined ||
      column.sortingType === null
    )
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
