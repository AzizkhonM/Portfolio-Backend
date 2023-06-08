import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudyPlaceDto } from './dto/create-study_place.dto';
import { UpdateStudyPlaceDto } from './dto/update-study_place.dto';
import { InjectModel } from '@nestjs/mongoose';
import { StudyPlace } from './schemas/study_place.schema';
import { Model } from 'mongoose';

@Injectable()
export class StudyPlaceService {
  constructor(@InjectModel(StudyPlace.name) private studyPlaceModel: Model<StudyPlace>) {}

  async create(createStudyPlaceDto: CreateStudyPlaceDto): Promise<StudyPlace> {
    const newStudyPlace = await new this.studyPlaceModel(createStudyPlaceDto);
    return newStudyPlace.save();
  }

  async findAll(): Promise<StudyPlace[]> {
    return await this.studyPlaceModel.find().exec();
  }

  async findOne(id: string): Promise<StudyPlace> {
    const existingStudyPlace = await this.studyPlaceModel.findById(id).exec();
    if (!existingStudyPlace) {
      throw new NotFoundException("Ushbu joy topilmadi");
    }
    return existingStudyPlace;
  }

  async update(id: string, updateStudyPlaceDto: UpdateStudyPlaceDto): Promise<StudyPlace> {
    return await this.studyPlaceModel.findByIdAndUpdate(id, updateStudyPlaceDto, { new: true }).exec();
  }

  async remove(id: string): Promise<StudyPlace> {
    const deletedStudyPlace = await this.studyPlaceModel.findByIdAndDelete(id);
    if (!deletedStudyPlace) {
      throw new NotFoundException(`Ushbu joy topilmadi`);
    }
    return deletedStudyPlace;
  }
}
