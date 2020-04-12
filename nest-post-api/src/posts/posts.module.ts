import { PostRepository } from './post.repository';
import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { TypegooseModule } from 'nestjs-typegoose';
// import { Post } from "./post.model";
import { PostsService } from './posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({

  // imports: [TypegooseModule.forFeature([
  //   Post
  // ])],
  // providers: [CatsService],
   imports: [TypeOrmModule.forFeature([
    PostRepository
  ])],
  controllers: [PostsController],

  providers: [PostsService]
})
export class PostsModule {}
