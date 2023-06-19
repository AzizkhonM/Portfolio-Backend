import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateProjectDto {

    @ApiProperty({ example: "Academy Project", description: "Loyiha" })
    @IsString()
    readonly title: string;

    @ApiProperty({ example: "image.png", description: "Rasm linki" })
    @IsString()
    readonly image: string;

}