import { PartialType } from '@nestjs/swagger';
import { CreateWorkPlaceDto } from './create-work_place.dto';

export class UpdateWorkPlaceDto extends PartialType(CreateWorkPlaceDto) {}
