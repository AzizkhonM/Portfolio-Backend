import { ApiProperty } from "@nestjs/swagger";

export class LoginAdminDto {

    @ApiProperty({ example: "Login", description: "Admin logini" })
    login: string

    @ApiProperty({ example: "Password", description: "Parol" })
    password: string

}