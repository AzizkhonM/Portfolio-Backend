import { Module } from '@nestjs/common';
import { AdminsService } from './admin.service';
import { AdminController } from './admin.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Admin, AdminSchema } from './schemas/admin.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [MongooseModule.forFeature([{ name: Admin.name, schema: AdminSchema }]), JwtModule.register({})],
  controllers: [AdminController],
  providers: [AdminsService]
})
export class AdminModule {}
