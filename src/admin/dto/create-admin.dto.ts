import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateAdminDto {

    @ApiProperty({ example: "O'roqvoy", description: "Ism" })
    @IsString()
    readonly first_name: string;

    @ApiProperty({ example: "Boltaboyev", description: "Familiya" })
    @IsString()
    readonly second_name: string;

    @ApiProperty({ example: "avatar.png", description: "Avatar linki" })
    @IsString()
    readonly image: string;

    @ApiProperty({ example: "UroqvoyB", description: "Login" })
    @IsString()
    readonly login: string;

    @ApiProperty({ example: "Ur0qvoy_B", description: "Parol" })
    @IsString()
    readonly password: string;

}