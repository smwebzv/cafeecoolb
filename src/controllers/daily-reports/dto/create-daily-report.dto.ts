import { IsNotEmpty } from "class-validator";

export interface IDailyReport{
    drinkId: number,
    consumption: number,
    remaind: number
}

export class CreateDailyReportDto {
    @IsNotEmpty()
    userId: number;

    @IsNotEmpty()
    shift: number;

    consumption: number;

    consumptionDesc: string;

    @IsNotEmpty()
    total: number;

    @IsNotEmpty()
    dailyList: IDailyReport[];
}
