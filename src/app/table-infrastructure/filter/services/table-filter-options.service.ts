import { FilterOptionsTypeList, NumberAndDateFilterOptions, StringFilterOptions } from "../models/filter-options.model";

export class TableFilterOptions{

    public getFilterOperators(type: FilterOptionsTypeList) : string[] {
        let filterOperators= [];

        if(type === FilterOptionsTypeList.StringShort){
            filterOperators = [
                StringFilterOptions.Contains,
                StringFilterOptions.Startswith,
                StringFilterOptions.Endswith,
            ];
        }
        else if(type === FilterOptionsTypeList.StringAll){
            filterOperators = [
                StringFilterOptions.Contains,
                StringFilterOptions.NotContains,
                StringFilterOptions.Startswith,
                StringFilterOptions.Endswith,
                StringFilterOptions.Equal,
                StringFilterOptions.NotEqualt,
            ];
        }

        else if(type === FilterOptionsTypeList.NumberShort){
            filterOperators = [
                NumberAndDateFilterOptions.Equal,
                NumberAndDateFilterOptions.GreaterThan,
                NumberAndDateFilterOptions.LessThen,
            ];
        }
        else if(type === FilterOptionsTypeList.NumberAll){
            filterOperators = [
                NumberAndDateFilterOptions.Equal,
                NumberAndDateFilterOptions.NotEqual,
                NumberAndDateFilterOptions.GreaterThan,
                NumberAndDateFilterOptions.LessThen,
                NumberAndDateFilterOptions.GreaterThanOrEqual,
                NumberAndDateFilterOptions.LessThenOrEqual,
                NumberAndDateFilterOptions.Between
            ];
        }

        else if(type === FilterOptionsTypeList.DateAll){
            filterOperators = [
                NumberAndDateFilterOptions.Equal,
                NumberAndDateFilterOptions.NotEqual,
                NumberAndDateFilterOptions.GreaterThan,
                NumberAndDateFilterOptions.LessThen,
                NumberAndDateFilterOptions.GreaterThanOrEqual,
                NumberAndDateFilterOptions.LessThenOrEqual,
                NumberAndDateFilterOptions.Between
            ];
        }
        else if(type === FilterOptionsTypeList.DateShort){
            filterOperators = [
                NumberAndDateFilterOptions.Equal,
                NumberAndDateFilterOptions.GreaterThan,
                NumberAndDateFilterOptions.LessThen,
            ];
        }

        return filterOperators;
    }

}

