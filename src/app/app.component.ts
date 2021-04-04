import { Component, OnInit } from "@angular/core";
import { StudentsTableSettings } from "./services/students-table-settings.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {
    this.studentsTableSettings.setTableSettings();
    this.elementsTableSettings.setTableSettings();
  }

  public studentsTableSettings = new StudentsTableSettings();
  public elementsTableSettings = new StudentsTableSettings();


  public students = [
    {
      name: "Jackline Joy",
      gender: "Female",
      country: "Sri Lanak",
    },
    {
      name: "Will Smith",
      gender: "Male",
      country: "USA",
    },
    {
      name: "John Snow",
      gender: "Male",
      country: "United Kingdom",
    },
  ];

  public elements = [
    {
      name: "Hydrogen",
      weight: 1.0079,
      symbol: "H",
    },
    {
      name: "HydroLithiumgen",
      weight: 6.941,
      symbol: "Li",
    },
    {
      name: "Boron",
      weight: 10.811,
      symbol: "B",
    },
  ];
}

