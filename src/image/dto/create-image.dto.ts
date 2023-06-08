import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateImageDto {

    @ApiProperty({ example: "https://", description: "Link" })
    @IsString()
    readonly link: string;

}