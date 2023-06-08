import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Skill } from './schemas/skill.schema';
import { Model } from 'mongoose';

@Injectable()
export class SkillsService {
  constructor(@InjectModel(Skill.name) private skillModel: Model<Skill>) {}
  
  async create(createSkillDto: CreateSkillDto): Promise<Skill> {
    const newSkill = await new this.skillModel(createSkillDto);
    return newSkill.save();
  }

  async findAll(): Promise<Skill[]> {
    return await this.skillModel.find().exec();
  }

  async findOne(id: string): Promise<Skill> {
    const existingSkill = await this.skillModel.findById(id).exec();
    if (!existingSkill) {
      throw new NotFoundException("Ushbu loyiha topilmadi");
    }
    return existingSkill;
  }

  async update(id: string, updateSkillDto: UpdateSkillDto): Promise<Skill> {
    return await this.skillModel.findByIdAndUpdate(id, updateSkillDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Skill> {
    const deletedSkill = await this.skillModel.findByIdAndDelete(id);
    if (!deletedSkill) {
      throw new NotFoundException(`Ushbu loyiha topilmadi`);
    }
    return deletedSkill;
  }
}
