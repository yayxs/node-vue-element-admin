import { PostEntity } from './post.entity';
import { FliterPostDto } from './dto/fliter.post.dto';
import { PostsService } from './posts.service';
import {
  Controller,
  Get,
  Body,
  Delete,
  Query,
  Param,
  Post,
  Patch,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from '@typegoose/typegoose/lib/types';
// import { PostModel, writingStatus } from './post.model';
import { CreatePostDto } from './dto/create.post.dto';
import { WriteStatusValidationPipe } from './pipes/status.validator.pipe';
import { writingStatus } from './post.write.status';
// class CreatePostDto {
//   @ApiProperty({
//     description: '帖子标题',
//     example: 'XXXXXXX',
//   })
//   @IsNotEmpty({ message: '标题不能够是空' })
//   title: string;
//   @ApiProperty({
//     description: '帖子内容',
//     example: 'OOOOOO',
//   })
//   con: string;
// }

@ApiTags('博客贴')
@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}
  @Get()
  getPosts(
    @Query(ValidationPipe) fliterPostDto: FliterPostDto,
  ): Promise<PostEntity[]> {
    return this.postsService.getAllPostsOrFilter(fliterPostDto);
  }

  @Get('/:id')
  getPostById(@Param('id', ParseIntPipe) id: number): Promise<PostEntity> {
    return this.postsService.getPostById(id);
  }
  @Delete('/:id')
  deletePost(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.postsService.deletePost(id);
  }
  @Patch('/:id/status')
  updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', WriteStatusValidationPipe) status: writingStatus,
  ): Promise<PostEntity> {
    return this.postsService.updateStatus(id, status);
  }
  @Post()
  @UsePipes(ValidationPipe)
  createPost(@Body() createPostDto: CreatePostDto): Promise<PostEntity> {
    return this.postsService.createPost(createPostDto);
  }
}
