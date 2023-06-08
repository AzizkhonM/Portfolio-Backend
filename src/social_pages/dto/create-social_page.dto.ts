import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateSocialPageDto {

    @ApiProperty({ example: "Instagram", description: "Ijtimoiy tarmoq" })
    @IsString()
    readonly site: string;

    @ApiProperty({ example: "azizkhon05", description: "Username" })
    @IsString()
    readonly username: string;

    @ApiProperty({ example: "1", description: "Rasm ID si" })
    @IsString()
    readonly image_id: string;

}