import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    username: string;

    @MinLength(4)
    @MaxLength(20)
    @IsNotEmpty()
    password: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    admin: number;
}
