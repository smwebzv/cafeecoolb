import { ResponseUserDto } from "src/controllers/users/dto/response-user.dto";
import { IDailyReport } from "./create-daily-report.dto";

export class ResponseDailyReportDto {
    user: ResponseUserDto;

    total: number;

    dailyList: IDailyReport[];

    number: string;

    place: string;

    date: string;
}