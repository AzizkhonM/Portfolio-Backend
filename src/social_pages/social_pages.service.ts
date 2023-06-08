import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSocialPageDto } from './dto/create-social_page.dto';
import { UpdateSocialPageDto } from './dto/update-social_page.dto';
import { InjectModel } from '@nestjs/mongoose';
import { SocialPage } from './schemas/social_page.schema';
import { Model } from 'mongoose';

@Injectable()
export class SocialPagesService {
  constructor(@InjectModel(SocialPage.name) private socialPageModel: Model<SocialPage>) {}

  async create(createSocialPageDto: CreateSocialPageDto): Promise<SocialPage> {
    const newSocialPage = await new this.socialPageModel(createSocialPageDto);
    return newSocialPage.save();
  }

  async findAll(): Promise<SocialPage[]> {
    return await this.socialPageModel.find().exec();
  }

  async findOne(id: string): Promise<SocialPage> {
    const existingSocialPage = await this.socialPageModel.findById(id).exec();
    if (!existingSocialPage) {
      throw new NotFoundException("Ushbu sahifa topilmadi");
    }
    return existingSocialPage;
  }

  async update(id: string, updateSocialPageDto: UpdateSocialPageDto): Promise<SocialPage> {
    return await this.socialPageModel.findByIdAndUpdate(id, updateSocialPageDto, { new: true }).exec();
  }

  async remove(id: string): Promise<SocialPage> {
    const deletedSocialPage = await this.socialPageModel.findByIdAndDelete(id);
    if (!deletedSocialPage) {
      throw new NotFoundException(`Ushbu sahifa topilmadi`);
    }
    return deletedSocialPage;
  }
}
