import { BadGatewayException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Admin } from './schemas/admin.schema';
import { Model } from 'mongoose';
import * as bcrypt from "bcrypt"
import { JwtService } from '@nestjs/jwt';
import { LoginAdminDto } from './dto/login-admin.dto';
import { Response } from 'express';

@Injectable()
export class AdminsService {
  constructor(@InjectModel(Admin.name) private adminModel: Model<Admin>, private readonly jwtService: JwtService) { }

  async create(createAdminDto: CreateAdminDto): Promise<Admin> {
    let candid = await this.adminModel.findOne({ login: createAdminDto.login }).exec()
    
    if(candid){
      throw new BadGatewayException("Ushbu username band")
    }
    const newAdmin = await new this.adminModel(createAdminDto);    
    
    const hashed_password = await bcrypt.hash(createAdminDto.password, 7)

    newAdmin.save();
    newAdmin.hashed_password = hashed_password

    return await this.adminModel.findByIdAndUpdate(newAdmin.id, newAdmin).exec()
  }

  async login(loginAdminDto: LoginAdminDto, res: Response) {

    let candid = await this.adminModel.find({ login: loginAdminDto.login }).exec()
    console.log(candid);
    
    if(candid.length == 0){
      throw new UnauthorizedException("Bunday foydalanuvchi tizimda mavjud emas!")
    }

    /* return candid */
    const isPassCorrect = await bcrypt.compare(loginAdminDto.password, candid[0].hashed_password)
    if(!isPassCorrect){
      throw new UnauthorizedException("Parol noto'g'ri")
    }

    const tokens = await this.getTokens(candid)

    const hashed_token = await bcrypt.hash(tokens.refresh_token, 7)

    const updatedAdmin = await this.adminModel.findByIdAndUpdate(candid[0]._id, { hashed_refresh_token: hashed_token }, { new: true }).exec()

    res.cookie("refresh_token", tokens.access_token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true 
    })

    return {
      message: "Tizimga muvaffaqiyatli kirdingiz",
      Admin: updatedAdmin,
      tokens
    }
  }

  async findAll(): Promise<Admin[]> {
    return await this.adminModel.find().exec();
  }

  async findOne(id: string): Promise<Admin> {
    const existingAdmin = await this.adminModel.findById(id).exec();
    if (!existingAdmin) {
      throw new NotFoundException("Ushbu admin topilmadi");
    }
    return existingAdmin;
  }

  async update(id: string, updateAdminDto: UpdateAdminDto): Promise<Admin> {
    return await this.adminModel.findByIdAndUpdate(id, updateAdminDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Admin> {
    const deletedAdmin = await this.adminModel.findByIdAndDelete(id);
    if (!deletedAdmin) {
      throw new NotFoundException(`Ushbu admin topilmadi`);
    }
    return deletedAdmin;
  }

  async getTokens(Admin: any) {
    console.log(Admin);
    
    const jwtPayload = {
      id: Admin[0]._id,
      first_name: Admin[0].first_name
    }

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.PRIVATE_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.PRIVATE_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME
      })
    ])

    return {
      access_token: accessToken,
      refresh_token: refreshToken
    }
  }
}