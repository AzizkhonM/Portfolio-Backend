import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkPlaceService } from './work_place.service';
import { CreateWorkPlaceDto } from './dto/create-work_place.dto';
import { UpdateWorkPlaceDto } from './dto/update-work_place.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Ishlagan joylar amallari")
@Controller('workplaces')
export class WorkPlaceController {
  constructor(private readonly workPlaceService: WorkPlaceService) {}

  @ApiOperation({ summary: "Joy qo'shish" })
  @Post("add")
  create(@Body() createWorkPlaceDto: CreateWorkPlaceDto) {
    return this.workPlaceService.create(createWorkPlaceDto);
  }

  @ApiOperation({ summary: "Barcha joylar" })
  @Get("all")
  findAll() {
    return this.workPlaceService.findAll();
  }

  @ApiOperation({ summary: "ID bo'yicha joylar" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workPlaceService.findOne(id);
  }

  @ApiOperation({ summary: "Joyni tahrirlash" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkPlaceDto: UpdateWorkPlaceDto) {
    return this.workPlaceService.update(id, updateWorkPlaceDto);
  }

  @ApiOperation({ summary: "Joyni o'chirib tashlash" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workPlaceService.remove(id);
  }
}
