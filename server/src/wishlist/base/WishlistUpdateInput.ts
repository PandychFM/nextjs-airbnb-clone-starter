/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ListingWhereUniqueInput } from "../../listing/base/ListingWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class WishlistUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ListingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ListingWhereUniqueInput)
  @IsOptional()
  @Field(() => ListingWhereUniqueInput, {
    nullable: true,
  })
  listing?: ListingWhereUniqueInput | null;
}

export { WishlistUpdateInput as WishlistUpdateInput };
