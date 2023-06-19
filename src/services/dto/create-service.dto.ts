import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateServiceDto {

    @ApiProperty({ example: "VueJS", description: "Xizmat" })
    @IsString()
    readonly service: string;

    @ApiProperty({ example: "image.jpg", description: "Rasm linki" })
    @IsString()
    readonly image: string;

}