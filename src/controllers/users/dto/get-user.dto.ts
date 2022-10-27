import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class GetUserDto {
    @IsNotEmpty()
    username: string;

    @MinLength(4)
    @MaxLength(20)
    @IsNotEmpty()
    password: string;
}
