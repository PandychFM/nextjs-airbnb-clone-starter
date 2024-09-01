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
import {
  IsString,
  MaxLength,
  ValidateNested,
  IsOptional,
  IsNumber,
  Min,
  Max,
} from "class-validator";
import { ListingWhereUniqueInput } from "./ListingWhereUniqueInput";
import { Type } from "class-transformer";
import { ListingCreateNestedManyWithoutListingsInput } from "./ListingCreateNestedManyWithoutListingsInput";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { TripCreateNestedManyWithoutListingsInput } from "./TripCreateNestedManyWithoutListingsInput";
import { WishlistCreateNestedManyWithoutListingsInput } from "./WishlistCreateNestedManyWithoutListingsInput";

@InputType()
class ListingCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  description!: string;

  @ApiProperty({
    required: true,
    type: () => ListingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ListingWhereUniqueInput)
  @Field(() => ListingWhereUniqueInput)
  listingCreatedBy!: ListingWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => ListingCreateNestedManyWithoutListingsInput,
  })
  @ValidateNested()
  @Type(() => ListingCreateNestedManyWithoutListingsInput)
  @IsOptional()
  @Field(() => ListingCreateNestedManyWithoutListingsInput, {
    nullable: true,
  })
  listings?: ListingCreateNestedManyWithoutListingsInput;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  locationData!: InputJsonValue;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  locationType!: string;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  mapData!: InputJsonValue;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  photos!: InputJsonValue;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  placeAmeneties?: InputJsonValue;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  placeSpace!: InputJsonValue;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  placeType!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @Field(() => Number)
  price!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  title!: string;

  @ApiProperty({
    required: false,
    type: () => TripCreateNestedManyWithoutListingsInput,
  })
  @ValidateNested()
  @Type(() => TripCreateNestedManyWithoutListingsInput)
  @IsOptional()
  @Field(() => TripCreateNestedManyWithoutListingsInput, {
    nullable: true,
  })
  trips?: TripCreateNestedManyWithoutListingsInput;

  @ApiProperty({
    required: false,
    type: () => WishlistCreateNestedManyWithoutListingsInput,
  })
  @ValidateNested()
  @Type(() => WishlistCreateNestedManyWithoutListingsInput)
  @IsOptional()
  @Field(() => WishlistCreateNestedManyWithoutListingsInput, {
    nullable: true,
  })
  wishlists?: WishlistCreateNestedManyWithoutListingsInput;
}

export { ListingCreateInput as ListingCreateInput };
