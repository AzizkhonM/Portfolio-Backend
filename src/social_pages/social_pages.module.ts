import { Module } from '@nestjs/common';
import { SocialPagesService } from './social_pages.service';
import { SocialPagesController } from './social_pages.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SocialPage, SocialPageSchema } from './schemas/social_page.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: SocialPage.name, schema: SocialPageSchema }])],
  controllers: [SocialPagesController],
  providers: [SocialPagesService]
})
export class SocialPagesModule {}
