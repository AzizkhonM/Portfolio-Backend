import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreatePostDto {

    @ApiProperty({ example: "Avtobusda", description: "Sarlavha" })
    @IsString()
    readonly title: string;

    @ApiProperty({ example: "Avtobusdagi holat haqida so'z ochsam", description: "Matn" })
    @IsString()
    readonly text: string;

}