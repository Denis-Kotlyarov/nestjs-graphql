import { InputType, Int, Field } from '@nestjs/graphql';
// import { Category } from 'src/category/entities/category.entity';

@InputType()
export class CreatePostInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: false })
  body: string;

  @Field()
  category: string;
}
