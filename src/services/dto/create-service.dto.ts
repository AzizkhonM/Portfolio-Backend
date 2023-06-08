import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateServiceDto {

    @ApiProperty({ example: "VueJS", description: "Xizmat" })
    @IsString()
    readonly service: string;

    @ApiProperty({ example: "1", description: "Rasm ID si" })
    @IsString()
    readonly image_id: string;

}