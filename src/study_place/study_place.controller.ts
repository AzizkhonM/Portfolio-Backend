import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudyPlaceService } from './study_place.service';
import { CreateStudyPlaceDto } from './dto/create-study_place.dto';
import { UpdateStudyPlaceDto } from './dto/update-study_place.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("O'qilgan joylar amallari")
@Controller('studyplaces')
export class StudyPlaceController {
  constructor(private readonly studyPlaceService: StudyPlaceService) {}

  @ApiOperation({ summary: "Joy qo'shish" })
  @Post("add")
  create(@Body() createStudyPlaceDto: CreateStudyPlaceDto) {
    return this.studyPlaceService.create(createStudyPlaceDto);
  }

  @ApiOperation({ summary: "Barcha joylar" })
  @Get()
  findAll() {
    return this.studyPlaceService.findAll();
  }

  @ApiOperation({ summary: "ID bo'yicha joylar" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studyPlaceService.findOne(id);
  }

  @ApiOperation({ summary: "Joyni tahrirlash" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudyPlaceDto: UpdateStudyPlaceDto) {
    return this.studyPlaceService.update(id, updateStudyPlaceDto);
  }

  @ApiOperation({ summary: "Joyni o'chirib tashlash" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studyPlaceService.remove(id);
  }
}
