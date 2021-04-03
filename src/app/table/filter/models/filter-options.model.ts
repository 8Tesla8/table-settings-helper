export enum FilterOptionsTypeList {
    NumberShort = 0,
    NumberAll = 1,

    StringShort = 2,
    StringAll = 3,

    DateAll = 4,
    DateShort = 5
}


export enum StringFilterOptions {
    NotContains = "notcontains", 
    Contains = "contains", 
    Startswith = "startswith", 
    Endswith = "endswith", 
    Equal = "=", 
    NotEqualt = "<>"
}

export enum NumberAndDateFilterOptions {
    Equal= "=", 
    NotEqual = "<>", 
    LessThen = "<", 
    GreaterThan = ">", 
    LessThenOrEqual = "<=", 
    GreaterThanOrEqual = ">=", 
    Between = "between",  
}