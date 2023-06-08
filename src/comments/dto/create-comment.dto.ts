import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateCommentDto {

    @ApiProperty({ example: "Aziz", description: "Ism" })
    @IsString()
    readonly name: string;

    @ApiProperty({ example: "Zo'r bo'pti", description: "Izoh" })
    @IsString()
    readonly comment: string;
    
    @ApiProperty({ example: "1", description: "Post ID si" })
    @IsString()
    readonly post_id: string;
}