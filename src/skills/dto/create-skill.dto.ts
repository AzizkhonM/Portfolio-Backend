import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateSkillDto {

    @ApiProperty({ example: "Tezkorlik", description: "Qobiliyat" })
    @IsString()
    readonly skill: string;

    @ApiProperty({ example: "image.jpg", description: "Rasm linki" })
    @IsString()
    readonly image: string;

}