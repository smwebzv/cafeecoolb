import { IsNotEmpty } from "class-validator";

export class IDailyList{
    drinkId: number;
    quantity: number;
    price: number;
}

export class CreateFaqDto {
    @IsNotEmpty()
    total: number;

    @IsNotEmpty()
    dailyList: IDailyList[];

    number: string;

    place: string;
}