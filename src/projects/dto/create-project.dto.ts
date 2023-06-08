import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateProjectDto {

    @ApiProperty({ example: "Academy Project", description: "Loyiha" })
    @IsString()
    readonly title: string;

    @ApiProperty({ example: "1", description: "Rasm ID si" })
    @IsString()
    readonly image_id: string;

}