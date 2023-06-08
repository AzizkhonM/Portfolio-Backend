import { Module } from '@nestjs/common';
import { StudyPlaceService } from './study_place.service';
import { StudyPlaceController } from './study_place.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StudyPlace, StudyPlaceSchema } from './schemas/study_place.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: StudyPlace.name, schema: StudyPlaceSchema }])],
  controllers: [StudyPlaceController],
  providers: [StudyPlaceService]
})
export class StudyPlaceModule {}
