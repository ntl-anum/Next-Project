import { IsEmail, IsNotEmpty, IsString, IsInt } from 'class-validator';

export class UpdateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  name: string;

}
