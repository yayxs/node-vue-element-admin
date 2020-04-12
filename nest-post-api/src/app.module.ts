import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { TypegooseModule } from 'nestjs-typegoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
@Module({
  imports: [
    // TypegooseModule.forRoot('mongodb://127.0.0.1:27017/nest-blog-api', {
    //   useNewUrlParser: true,
    // }),

    TypeOrmModule.forRoot(typeOrmConfig),
    PostsModule,
  ],
})
export class AppModule {}
