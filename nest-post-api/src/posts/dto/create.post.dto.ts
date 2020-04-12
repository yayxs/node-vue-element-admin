import { IsNotEmpty } from 'class-validator';
export class CreatePostDto {
  @IsNotEmpty()
  title: string;
  subTitle: string;
  avatar: string;
  @IsNotEmpty()
  mainContent: string;
}
