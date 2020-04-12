import { PostEntity } from './post.entity';
import { PostRepository } from './post.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
// import { v4 as uuidv4 } from 'uuid';
import { CreatePostDto } from './dto/create.post.dto';
import { FliterPostDto } from './dto/fliter.post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { writingStatus } from './post.write.status';
@Injectable()
export class PostsService {
  // private postList: PostModel[] = []; // 初始化数据列表
  constructor(
    @InjectRepository(PostRepository)
    private postRepository: PostRepository,
  ) {}

  getAllPostsOrFilter(fliterPostDto: FliterPostDto): Promise<PostEntity[]> {
    return this.postRepository.getAllPostsOrFilter(fliterPostDto);
  }
  // getAllPosts(): PostModel[] {
  //   return this.postList;
  // }

  // getPostsWithFilter(fliterPostDto: FliterPostDto): PostModel[] {
  //   let resArr: PostModel[] = this.getAllPosts();
  //   const { search, status } = fliterPostDto;

  //   if (status) {
  //   console.log(resArr[0].status)
  //     console.log(resArr.filter((item) => item.status === status));

  //     resArr = resArr.filter((item) => item.status === status);
  //   }
  //   if (search) {
  //     resArr = resArr.filter(
  //       (item) => item.title.includes(search) || item.subTitle.includes(search),
  //     );
  //   }
  //   return resArr;
  // }
  async getPostById(id: number): Promise<PostEntity> {
    const found = await this.postRepository.findOne(id);
    // 如果没有找到
    if (!found) {
      throw new NotFoundException(`帖子的id没有找到`);
    }

    return found;
  }
  async deletePost(id: number): Promise<void> {
    const found = await this.postRepository.delete(id);

    if (!found) {
      throw new NotFoundException(`删除的该帖子的id没有找到`);
    }
    console.log(found);
  }
  async updateStatus(id: number, status: writingStatus): Promise<PostEntity> {
    const found = await this.getPostById(id);
    found.status = status;
    await found.save();
    return found;
  }
  async createPost(createPostDto: CreatePostDto): Promise<PostEntity> {
    return this.postRepository.createPost(createPostDto);
  }
}
