import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImageService } from './image.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Rasmlar amallari")
@Controller('images')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @ApiOperation({ summary: "Rasm qo'shish" })
  @Post("add")
  create(@Body() createImageDto: CreateImageDto) {
    return this.imageService.create(createImageDto);
  }

  @ApiOperation({ summary: "Barcha rasmlar" })
  @Get("all")
  findAll() {
    return this.imageService.findAll();
  }

  @ApiOperation({ summary: "ID bo'yicha rasmlar" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imageService.findOne(id);
  }

  @ApiOperation({ summary: "Rasmni tahrirlash" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImageDto: UpdateImageDto) {
    return this.imageService.update(id, updateImageDto);
  }

  @ApiOperation({ summary: "Rasmni o'chirib tashlash" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imageService.remove(id);
  }
}
