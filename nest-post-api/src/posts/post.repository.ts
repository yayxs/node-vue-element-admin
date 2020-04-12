import { PostEntity } from './post.entity';

import { EntityRepository, Repository } from 'typeorm';
import { CreatePostDto } from './dto/create.post.dto';
import { writingStatus } from './post.write.status';
import { FliterPostDto } from './dto/fliter.post.dto';

@EntityRepository(PostEntity)
export class PostRepository extends Repository<PostEntity> {
  async createPost(createPostDto: CreatePostDto): Promise<PostEntity> {
    const { title, subTitle, avatar, mainContent } = createPostDto;

    const one = new PostEntity();
    one.title = title;
    one.subTitle = subTitle;
    one.avatar = avatar;
    one.mainContent = mainContent;
    one.status = writingStatus.NotStarted;
    await one.save();

    return one;
  }

  async getAllPostsOrFilter(
    fliterPostDto: FliterPostDto,
  ): Promise<PostEntity[]> {
    const { search, status } = fliterPostDto;

    const query = this.createQueryBuilder('post');

    if (status) {
      query.andWhere('post.status = :status', { status });
    }

    if (search) {
      query.andWhere('(post.title LIKE :search OR post.subTitle LIKE :search)', { search: `%${search}%` });
    }
    const res = await query.getMany();

    return res;
  }
}
