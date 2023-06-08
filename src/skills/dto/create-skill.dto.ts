import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateSkillDto {

    @ApiProperty({ example: "Tezkorlik", description: "Qobiliyat" })
    @IsString()
    readonly skill: string;

    @ApiProperty({ example: "1", description: "Rasm ID si" })
    @IsString()
    readonly image_id: string;

}