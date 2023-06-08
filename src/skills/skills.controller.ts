import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Qobiliyatlar amallari")
@Controller('skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @ApiOperation({ summary: "Qobiliyat qo'shish" })
  @Post()
  create(@Body() createSkillDto: CreateSkillDto) {
    return this.skillsService.create(createSkillDto);
  }

  @ApiOperation({ summary: "Barcha qobiliyatlar" })
  @Get()
  findAll() {
    return this.skillsService.findAll();
  }

  @ApiOperation({ summary: "ID bo'yicha qobiliyatlar" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.skillsService.findOne(id);
  }

  @ApiOperation({ summary: "Qobiliyatni tahrirlash" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSkillDto: UpdateSkillDto) {
    return this.skillsService.update(id, updateSkillDto);
  }

  @ApiOperation({ summary: "Qobiliyatni o'chirib tashlash" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.skillsService.remove(id);
  }
}
