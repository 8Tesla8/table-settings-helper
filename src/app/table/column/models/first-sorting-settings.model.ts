//dev extrem allow multi sorting using [sortIndex] to ser corect sorting order 
export class FirstSortingSettings {
    columnKey: string;
    sortingType: SortingType;
}

export enum SortingType {
    None = "",
    Ascending = "asc",
    Descending = "desc"
}


