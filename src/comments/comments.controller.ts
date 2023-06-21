import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Izohlar amallari")
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @ApiOperation({ summary: "Izoh qo'shish" })
  @Post()
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentsService.create(createCommentDto);
  }

  @ApiOperation({ summary: "Post bo'yicha izohlarni olish" })
  @Get(`post/:id`)
  findByPost(@Param("id") id: string){
    return this.commentsService.findByPost(id)
  }

  @ApiOperation({ summary: "Izohni tasdiqlash" })
  @Get(`verify/:id`)
  verify(@Param("id") id: string){
    return this.commentsService.verify(id)
  }

  @ApiOperation({ summary: "Izoh tasdig'ini olib tashlash" })
  @Get(`unverify/:id`)
  unverify(@Param("id") id: string){
    return this.commentsService.unverify(id)
  }

  @ApiOperation({ summary: "Barcha izohlar" })
  @Get()
  findAll() {
    return this.commentsService.findAll();
  }

  @ApiOperation({ summary: "ID bo'yicha izohlar" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentsService.findOne(id);
  }

  @ApiOperation({ summary: "Izohni tahrirlash" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentsService.update(id, updateCommentDto);
  }

  @ApiOperation({ summary: "Izohni o'chirib tashlash" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentsService.remove(id);
  }
}
