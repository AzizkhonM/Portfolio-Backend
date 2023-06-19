import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentsModule } from './comments/comments.module';
import { PostModule } from './post/post.module';
import { StudyPlaceModule } from './study_place/study_place.module';
import { WorkPlaceModule } from './work_place/work_place.module';
import { ProjectsModule } from './projects/projects.module';
import { SocialPagesModule } from './social_pages/social_pages.module';
import { ServicesModule } from './services/services.module';
import { SkillsModule } from './skills/skills.module';
import { AdminModule } from './admin/admin.module';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'swagger-static'),
      serveRoot: process.env.NODE_ENV === 'development' ? '/' : '/swagger',
    }),
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }), MongooseModule.forRoot("mongodb+srv://Azizkhon:llRMkQqtwMQpRxNB@cluster0.30hrsns.mongodb.net/?retryWrites=true&w=majority"), CommentsModule, PostModule, StudyPlaceModule, WorkPlaceModule, ProjectsModule, SocialPagesModule, ServicesModule, SkillsModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


// username: Azizkhon
// password: aziz_2005
// password2: PxncYnXLpiwgwL2J

// mongodb+srv://Azizkhon:<password>@cluster0.y3affow.mongodb.net/?retryWrites=true&w=majority