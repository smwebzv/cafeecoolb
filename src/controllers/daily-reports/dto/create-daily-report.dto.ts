import { IsNotEmpty } from "class-validator";

export class IDailyReport{
    drinkId: number;
    consumption: number;
    remaind: number;
}

export class CreateDailyReportDto {
    @IsNotEmpty()
    shift: number;

    consumption: number;

    consumptionDesc: string;

    @IsNotEmpty()
    total: number;

    @IsNotEmpty()
    dailyList: IDailyReport[];
}
