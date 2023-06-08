import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateWorkPlaceDto {

    @ApiProperty({ example: "Najot Ta'lim", description: "Joy nomi" })
    @IsString()
    readonly place: string;

    @ApiProperty({ example: "NodeJS o'qituvchisi", description: "Lavozim" })
    @IsString()
    readonly post: string;

    @ApiProperty({ example: "2019", description: "Boshlangan yil" })
    @IsNumber()
    readonly start_year: number;
    
    @ApiProperty({ example: "2023", description: "Yakunlangan yil" })
    @IsNumber()
    readonly end_year: number;
}