import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateSkillDto {

    @ApiProperty({ example: "NodeJS", description: "Texnologiya" })
    @IsString()
    readonly skill: string;

    @ApiProperty({ example: "icon", description: "Ikonka" })
    @IsString()
    readonly image: string;

    @ApiProperty({ example: "link", description: "Link" })
    @IsString()
    readonly link: string;

}