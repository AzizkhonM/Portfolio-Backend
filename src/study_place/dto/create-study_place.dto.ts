import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateStudyPlaceDto {

    @ApiProperty({ example: "TATU", description: "Joy nomi" })
    @IsString()
    readonly place: string;

    @ApiProperty({ example: "Kiberxavfsizlik", description: "Fakultet" })
    @IsString()
    readonly faculty: string;

    @ApiProperty({ example: "2019", description: "Boshlangan yil" })
    @IsNumber()
    readonly start_year: number;
    
    @ApiProperty({ example: "2023", description: "Yakunlangan yil" })
    @IsNumber()
    readonly end_year: number;
}