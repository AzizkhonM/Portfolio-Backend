import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Service } from './schemas/service.schema';
import { Model } from 'mongoose';

@Injectable()
export class ServicesService {
  constructor(@InjectModel(Service.name) private serviceModel: Model<Service>) {}

  async create(createServiceDto: CreateServiceDto): Promise<Service> {
    const newService = await new this.serviceModel(createServiceDto);
    return newService.save();
  }

  async findAll(): Promise<Service[]> {
    return await this.serviceModel.find().exec();
  }

  async findOne(id: string): Promise<Service> {
    const existingService = await this.serviceModel.findById(id).exec();
    if (!existingService) {
      throw new NotFoundException("Ushbu loyiha topilmadi");
    }
    return existingService;
  }

  async update(id: string, updateServiceDto: UpdateServiceDto): Promise<Service> {
    return await this.serviceModel.findByIdAndUpdate(id, updateServiceDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Service> {
    const deletedService = await this.serviceModel.findByIdAndDelete(id);
    if (!deletedService) {
      throw new NotFoundException(`Ushbu loyiha topilmadi`);
    }
    return deletedService;
  }
}
