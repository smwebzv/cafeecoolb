import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateDrinkDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    quantity: number;

    @IsNotEmpty()
    price: number;

    @IsNotEmpty()
    carried: number;
}

