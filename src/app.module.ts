import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentsModule } from './comments/comments.module';
import { PostModule } from './post/post.module';
import { StudyPlaceModule } from './study_place/study_place.module';
import { WorkPlaceModule } from './work_place/work_place.module';
import { ImageModule } from './image/image.module';
import { ProjectsModule } from './projects/projects.module';
import { SocialPagesModule } from './social_pages/social_pages.module';
import { ServicesModule } from './services/services.module';
import { SkillsModule } from './skills/skills.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://Azizkhon:aziz_2005@cluster0.y3affow.mongodb.net/?retryWrites=true&w=majority"), CommentsModule, PostModule, StudyPlaceModule, WorkPlaceModule, ImageModule, ProjectsModule, SocialPagesModule, ServicesModule, SkillsModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


// username: Azizkhon
// password: aziz_2005

// mongodb+srv://Azizkhon:<password>@cluster0.y3affow.mongodb.net/?retryWrites=true&w=majority