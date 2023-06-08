import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Image } from './schemas/image.entity';

@Injectable()
export class ImageService {
  constructor(@InjectModel(Image.name) private imageModel: Model<Image>) {}

  async create(createImageDto: CreateImageDto): Promise<Image> {
    const newImage = await new this.imageModel(createImageDto);
    return newImage.save();
  }

  async findAll(): Promise<Image[]> {
    return await this.imageModel.find().exec();
  }

  async findOne(id: string): Promise<Image> {
    const existingImage = await this.imageModel.findById(id).exec();
    if (!existingImage) {
      throw new NotFoundException("Ushbu rasm topilmadi");
    }
    return existingImage;
  }

  async update(id: string, updateImageDto: UpdateImageDto): Promise<Image> {
    return await this.imageModel.findByIdAndUpdate(id, updateImageDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Image> {
    const deletedImage = await this.imageModel.findByIdAndDelete(id);
    if (!deletedImage) {
      throw new NotFoundException(`Ushbu joy topilmadi`);
    }
    return deletedImage;
  }
}
