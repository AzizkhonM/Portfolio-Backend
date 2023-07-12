import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateSocialPageDto {

    @ApiProperty({ example: "Instagram", description: "Ijtimoiy tarmoq" })
    @IsString()
    readonly site: string;

    @ApiProperty({ example: "azizkhon05", description: "Username" })
    @IsString()
    readonly username: string;

    @ApiProperty({ example: "color", description: "Rang" })
    @IsString()
    readonly color: string;

    @ApiProperty({ example: "icon", description: "Ikonka" })
    @IsString()
    readonly icon: string;

    @ApiProperty({ example: "icon_color", description: "Ikonka rangi" })
    @IsString()
    readonly icon_color: string;

}