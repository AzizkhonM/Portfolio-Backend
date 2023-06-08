import { PartialType } from '@nestjs/swagger';
import { CreateSocialPageDto } from './create-social_page.dto';

export class UpdateSocialPageDto extends PartialType(CreateSocialPageDto) {}
