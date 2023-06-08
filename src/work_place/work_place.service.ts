import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWorkPlaceDto } from './dto/create-work_place.dto';
import { UpdateWorkPlaceDto } from './dto/update-work_place.dto';
import { InjectModel } from '@nestjs/mongoose';
import { WorkPlace } from './schemas/work_place.schema';
import { Model } from 'mongoose';

@Injectable()
export class WorkPlaceService {
  constructor(@InjectModel(WorkPlace.name) private workPlaceModel: Model<WorkPlace>) {}

  async create(createWorkPlaceDto: CreateWorkPlaceDto): Promise<WorkPlace> {
    const newWorkPlace = await new this.workPlaceModel(createWorkPlaceDto);
    return newWorkPlace.save();
  }

  async findAll(): Promise<WorkPlace[]> {
    return await this.workPlaceModel.find().exec();
  }

  async findOne(id: string): Promise<WorkPlace> {
    const existingWorkPlace = await this.workPlaceModel.findById(id).exec();
    if (!existingWorkPlace) {
      throw new NotFoundException("Ushbu joy topilmadi");
    }
    return existingWorkPlace;
  }

  async update(id: string, updateWorkPlaceDto: UpdateWorkPlaceDto): Promise<WorkPlace> {
    return await this.workPlaceModel.findByIdAndUpdate(id, updateWorkPlaceDto, { new: true }).exec();
  }

  async remove(id: string): Promise<WorkPlace> {
    const deletedWorkPlace = await this.workPlaceModel.findByIdAndDelete(id);
    if (!deletedWorkPlace) {
      throw new NotFoundException(`Ushbu joy topilmadi`);
    }
    return deletedWorkPlace;
  }
}
