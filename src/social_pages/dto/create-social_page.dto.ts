import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateSocialPageDto {

    @ApiProperty({ example: "Instagram", description: "Ijtimoiy tarmoq" })
    @IsString()
    readonly site: string;

    @ApiProperty({ example: "azizkhon05", description: "Username" })
    @IsString()
    readonly username: string;

    @ApiProperty({ example: "image.jpg", description: "Rasm linki" })
    @IsString()
    readonly image: string;

}