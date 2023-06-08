import { PartialType } from '@nestjs/swagger';
import { CreateStudyPlaceDto } from './create-study_place.dto';

export class UpdateStudyPlaceDto extends PartialType(CreateStudyPlaceDto) {}
