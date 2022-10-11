import { IsNotEmpty } from "class-validator";

export interface IDailyList{
    drinkId: number,
    quantity: number,
    price: number,
}

export class CreateFaqDto {
    @IsNotEmpty()
    userId: number;

    @IsNotEmpty()
    total: number;

    @IsNotEmpty()
    dailyList: IDailyList[];

    number: string;

    place: string;
}