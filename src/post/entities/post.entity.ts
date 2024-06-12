import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
// import { Category } from 'src/category/entities/category.entity';

@Entity()
@ObjectType()
export class Post {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field({ nullable: false })
  body: string;

  @Column()
  @Field()
  // @ManyToOne(() => Category, (category) => category.posts, { eager: true })
  category: string;
}
