// import { writingStatus } from './../post.model';
import { writingStatus } from '../post.write.status';

import { Optional } from '@nestjs/common';
import { IsNotEmpty } from 'class-validator';
export class FliterPostDto {
  @Optional()
  status: writingStatus;
  @Optional()
 
  search: string;
  title: string;
  subTitle: string;
}
