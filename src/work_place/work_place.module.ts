import { Module } from '@nestjs/common';
import { WorkPlaceService } from './work_place.service';
import { WorkPlaceController } from './work_place.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkPlace, WorkPlaceSchema } from './schemas/work_place.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: WorkPlace.name, schema: WorkPlaceSchema }])],
  controllers: [WorkPlaceController],
  providers: [WorkPlaceService]
})
export class WorkPlaceModule {}
