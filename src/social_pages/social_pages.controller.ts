import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SocialPagesService } from './social_pages.service';
import { CreateSocialPageDto } from './dto/create-social_page.dto';
import { UpdateSocialPageDto } from './dto/update-social_page.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Sahifalar amallar")
@Controller('socialpages')
export class SocialPagesController {
  constructor(private readonly socialPagesService: SocialPagesService) {}

  @ApiOperation({ summary: "Sahifa qo'shish" })
  @Post()
  create(@Body() createSocialPageDto: CreateSocialPageDto) {
    return this.socialPagesService.create(createSocialPageDto);
  }

  @ApiOperation({ summary: "Barcha sahifalar" })
  @Get()
  findAll() {
    return this.socialPagesService.findAll();
  }

  @ApiOperation({ summary: "ID bo'yicha sahifalar" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.socialPagesService.findOne(id);
  }

  @ApiOperation({ summary: "Sahifani tahrirlash" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSocialPageDto: UpdateSocialPageDto) {
    return this.socialPagesService.update(id, updateSocialPageDto);
  }

  @ApiOperation({ summary: "Sahifani o'chirib tashlash" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.socialPagesService.remove(id);
  }
}
