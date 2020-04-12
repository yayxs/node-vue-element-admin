// import { writingStatus } from './post.model';
import { writingStatus } from './post.write.status';


import {Entity, Column, BaseEntity,PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class PostEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    subTitle: string;

    @Column()
    avatar: string;

    @Column()
    mainContent: string;

    @Column()
    status: writingStatus;
}