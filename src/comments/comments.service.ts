import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './schemas/comment.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CommentsService {
  constructor(@InjectModel(Comment.name) private commentModel: Model<Comment>) { }

  async create(createCommentDto: CreateCommentDto): Promise<Comment> {
    const newComment = await new this.commentModel(createCommentDto);
    return newComment.save();
  }

  async findByPost(id: string){
    let arr = []
    const comments = await this.commentModel.find().exec()
    for(let i of comments){
      if(i.post_id == id){
        arr.push(i)
      }
    }
    return arr
  }

  async verify(id: string){
    return await this.commentModel.findByIdAndUpdate(id, { status: true }, { new: true }).exec()
  }

  async unverify(id: string){
    return await this.commentModel.findByIdAndUpdate(id, { status: false }, { new: true }).exec()
  }

  async findAll(): Promise<Comment[]> {
    return await this.commentModel.find().populate("post_id").exec();
  }

  async findOne(id: string): Promise<Comment> {
    const existingComment = await this.commentModel.findById(id).exec();
    if (!existingComment) {
      throw new NotFoundException("Ushbu izoh topilmadi");
    }
    return existingComment;
  }

  async update(id: string, updateCommentDto: UpdateCommentDto): Promise<Comment> {
    return await this.commentModel.findByIdAndUpdate(id, updateCommentDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Comment> {
    const deletedComment = await this.commentModel.findByIdAndDelete(id);
    if (!deletedComment) {
      throw new NotFoundException(`Ushbu izoh topilmadi`);
    }
    return deletedComment;
  }
}
